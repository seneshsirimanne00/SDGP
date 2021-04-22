from __future__ import division
from datetime import datetime, timedelta, date
import pandas as pd
import numpy as np
import statsmodels.formula.api as smf

import warnings

warnings.filterwarnings("ignore")

# import keras
from keras.layers import Dense
from keras.models import Sequential
from keras.optimizers import Adam
from keras.callbacks import EarlyStopping
from keras.utils import np_utils
from keras.layers import LSTM
from sklearn.model_selection import KFold, cross_val_score, train_test_split
from sklearn.preprocessing import MinMaxScaler
from dateutil.relativedelta import *
import datetime


class Prediction:
    def __init__(self):
        self.numpy_prediction = []
        self.predictionDates = []
        self.predictionAmounts = []
        self.dataArray = []

        # Set to false whenever new data is added. Set to true when Learning is done
        self.predictionUpToDate = False

    def update(self, date ,sales ):
        self.dataArray.append([date , 1 , 1 , sales])
        print("Data added : " , self.dataArray[-1] )
        self.predictionUpToDate = False

    def learn(self):
        self.numpy_prediction = self.setupLearn()
        self.predictionDates = []
        self.predictionAmounts = []

    def addData(self, data):
        self.dataArray = data
        self.predictionUpToDate = False

    def currentMonthsData(self):

        print("Acquiring current months data")
        dataOne = np.array(self.dataArray)
        df_salesOne = pd.DataFrame(data=dataOne, columns=["date", "store", "item", "sales"])
        #dataOne = pd.read_csv('saveddata/train - train.csv')
        #df_salesOne = pd.DataFrame(data=dataOne)
        count_row = df_salesOne.shape[0]
        df_final = df_salesOne.iloc[count_row-1]
        np_current = df_final.to_numpy()
        return np_current

    def setupLearn(self):

        print("debug[starting learn]")
        #df_sales = pd.read_csv('saveddata/train - train.csv')
        data = np.array(self.dataArray)
        df_sales = pd.DataFrame(data=data, columns=["date", "store", "item", "sales"])
        print(df_sales)
        df_sales['sales'] = pd.to_numeric(df_sales['sales'])
        df_sales['date'] = pd.to_datetime(df_sales['date'])
        print(df_sales.dtypes)
        print("1")

        df_sales['date'] = df_sales['date'].dt.year.astype('str') + '-' + df_sales['date'].dt.month.astype(
            'str') + '-01'
        df_sales['date'] = pd.to_datetime(df_sales['date'])
        # groupby date and sum the sales
        df_sales = df_sales.groupby('date').sales.sum().reset_index()
        df_sales['sales'] = df_sales['sales'].astype(int)
        # print(df_sales)
        print("2")
        df_diff = df_sales.copy()
        # add previous sales to the next row
        df_diff['prev_sales'] = df_diff['sales'].shift(1)
        print("3.1")
        # drop the null values and calculate the difference
        df_diff = df_diff.dropna()
        print("3.2")
        df_diff['diff'] = (df_diff['sales'] - df_diff['prev_sales'])
        print("3")
        df_supervised = df_diff.drop(['prev_sales'], axis=1)
        # adding lags
        for inc in range(1, 12):
            field_name = 'lag_' + str(inc)
            df_supervised[field_name] = df_supervised['diff'].shift(inc)
        # drop null values
        df_supervised = df_supervised.dropna().reset_index(drop=True)
        print("4")
        # Define the regression formula
        model = smf.ols(formula='diff ~ lag_1', data=df_supervised)
        # Fit the regression
        model_fit = model.fit()
        # Extract the adjusted r-squared
        regression_adj_rsq = model_fit.rsquared_adj
        ##print(regression_adj_rsq)

        df_model = df_supervised.drop(['sales', 'date'], axis=1)
        # split train and test set
        train_set, test_set = df_model[0:-6].values, df_model[-6:].values
        print("5")
        scaler = MinMaxScaler(feature_range=(-1, 1))
        scaler = scaler.fit(train_set)
        # reshape training set
        train_set = train_set.reshape(train_set.shape[0], train_set.shape[1])
        train_set_scaled = scaler.transform(train_set)
        # reshape test set
        test_set = test_set.reshape(test_set.shape[0], test_set.shape[1])
        test_set_scaled = scaler.transform(test_set)
        print("6")
        X_train, y_train = train_set_scaled[:, 1:], train_set_scaled[:, 0:1]
        X_train = X_train.reshape(X_train.shape[0], 1, X_train.shape[1])
        X_test, y_test = test_set_scaled[:, 1:], test_set_scaled[:, 0:1]
        X_test = X_test.reshape(X_test.shape[0], 1, X_test.shape[1])
        print("7")
        model = Sequential()
        model.add(LSTM(4, batch_input_shape=(1, X_train.shape[1], X_train.shape[2]), stateful=True))
        model.add(Dense(1))
        model.compile(loss='mean_squared_error', optimizer='adam')
        model.fit(X_train, y_train, epochs=100, batch_size=1, verbose=1, shuffle=False)

        y_pred = model.predict(X_test, batch_size=1)
        print("8")
        y_pred = y_pred.reshape(y_pred.shape[0], 1, y_pred.shape[1])
        # rebuild test set for inverse transform
        pred_test_set = []
        for index in range(0, len(y_pred)):
            ##print(np.concatenate([y_pred[index], X_test[index]], axis=1))
            pred_test_set.append(np.concatenate([y_pred[index], X_test[index]], axis=1))
        # reshape pred_test_set
        pred_test_set = np.array(pred_test_set)
        pred_test_set = pred_test_set.reshape(pred_test_set.shape[0], pred_test_set.shape[2])
        # inverse transform
        pred_test_set_inverted = scaler.inverse_transform(pred_test_set)
        print("9")
        result_list = []
        sales_dates = list(df_sales[-7:].date)
        act_sales = list(df_sales[-7:].sales)
        for index in range(0, len(pred_test_set_inverted)):
            result_dict = {}
            result_dict['pred_value'] = int(pred_test_set_inverted[index][0] + act_sales[index])
            result_dict['date'] = sales_dates[index + 1]
            result_list.append(result_dict)
        df_result = pd.DataFrame(result_list)
        # for multistep prediction, replace act_sales with the predicted sales
        np_array = df_result.to_numpy()
        print(np_array)

        #-----------------------------------------------------------------------------------------------------
        #starts future predictions
        # Checking the attributes of test set
        len(test_set)
        print(test_set)
        print(test_set[5:])

        # Reshaping the test set
        test_set = test_set.reshape(test_set.shape[0], test_set.shape[1])
        test_set = scaler.transform(test_set)
        print(test_set)

        # Getting the data wanted for the predictions
        x_input = test_set[5:]
        x_input.shape
        print(x_input)

        temp_input = list(x_input)
        print(temp_input)
        temp_input = temp_input[0].tolist()
        print(temp_input)

        print(temp_input)

        # demonstrate prediction for next 10 days
        from numpy import array

        lst_output = []
        n_steps = 11
        i = 0
        while (i < 6):

            if (len(temp_input) > 11):
                # print(temp_input)
                x_input = np.array(temp_input[1:])
                print("{} day input {}".format(i, x_input))
                x_input = x_input.reshape(1, -1)
                x_input = x_input.reshape((1, 1, n_steps))
                # print(x_input)
                yhat = model.predict(x_input, verbose=0)
                print(yhat)
                print("whaw")
                print("{} day output {}".format(i, yhat))
                temp_input.extend(yhat[0].tolist())
                temp_input = temp_input[1:]
                # print(temp_input)
                lst_output.extend(yhat.tolist())
                i = i + 1
            else:
                x_input = x_input.reshape((1, 1, n_steps))
                yhat = model.predict(x_input, verbose=0)
                print(yhat[0])
                temp_input.extend(yhat[0].tolist())
                print(len(temp_input))
                lst_output.extend(yhat.tolist())
                i = i + 1

        print(lst_output)
        lst_output = np.array(lst_output)
        print(lst_output)

        lst_output = lst_output.reshape(lst_output.shape[0], 1, lst_output.shape[1])
        # rebuild test set for inverse transform
        pred_test_set = []
        for index in range(0, len(lst_output)):
            print(np.concatenate([lst_output[index], X_test[index]], axis=1))
            pred_test_set.append(np.concatenate([lst_output[index], X_test[index]], axis=1))
        # reshape pred_test_set
        pred_test_set = np.array(pred_test_set)
        pred_test_set = pred_test_set.reshape(pred_test_set.shape[0], pred_test_set.shape[2])
        # inverse transform
        pred_test_set_inverted = scaler.inverse_transform(pred_test_set)
        print(pred_test_set_inverted)

        result_list = []
        sales_dates = list(df_sales[-7:].date)
        act_sales = list(df_sales[-7:].sales)
        for index in range(0, len(pred_test_set_inverted)):
            result_dict = {}
            result_dict['pred_value'] = int(pred_test_set_inverted[index][0] + act_sales[index])

            result_list.append(result_dict)
        df_result = pd.DataFrame(result_list)
        df_result
        # for multistep prediction, replace act_sales with the predicted sales

        df_result


        # df_sales['date'] = df_sales['date'].dt.year.astype('str') + '-' + df_sales['date'].dt.month.astype('str') + '-01'
        date_array = df_sales.to_numpy()
        sales_dates = date_array[-1][0]
        print(sales_dates)
        date_time = sales_dates.strftime("%y/%m/%d")
        print(date_time)
        date_series = pd.date_range(sales_dates, periods=7, freq='M')
        print(date_series[0])
        print(date_series)
        df = pd.DataFrame(date_series)
        print(df)

        df = df.drop(df.index[[0]])

        after_drop = df.to_numpy()

        print(after_drop)

        df_after = pd.DataFrame(after_drop)
        df_after

        result = pd.concat([df_result, df_after], axis=1, join='inner')
        print(result)

        Final_Numpy = result.to_numpy()

        print(Final_Numpy)

        # print(date_series[0])
        # print(date_series)

        self.predictionUpToDate = True
        return Final_Numpy

    def getPredictionDates(self):
        # Return the dates as a list of strings
        dateList = []
        for date in self.numpy_prediction:
            dateList.append(date[1].strftime("%d/%m/%Y"))
        return dateList

    def getPredictionAmounts(self):
        amtList = []
        for amount in self.numpy_prediction:
            amtList.append(amount[0])
        return amtList

    def getNextMonthPred(self):
        nextMonth = self.getPredictionAmounts()
        print("next month predictions : " , nextMonth)
        if len(nextMonth) == 0:
            return "Not Processed"
        return nextMonth[0]


    def getPrediction_amounts(self):
        # the corresponding sales amounts for predicted dates as a list of integers
        preictionValueList = []
        for val in self.numpy_prediction:
            preictionValueList.append(val[0])
        return preictionValueList

    def isPredictionUpToDate(self):
        return self.predictionUpToDate

    """
    ====================================================================================================================
    """

    def getAllData(self):
        return [self.predictionDates, self.predictionAmounts, self.numpy_prediction , self.dataArray]

    def setAllData(self, data):
        self.predictionDates = data[0]
        self.predictionAmounts = data[1]
        self.numpy_prediction = data[2]
        self.dataArray = data[3]
