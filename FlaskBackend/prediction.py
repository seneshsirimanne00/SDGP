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

    def update(self, date, sales):
        self.dataArray.append([date, 1, 1, sales])
        print("Data added : ", self.dataArray[-1])
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
        count_row = df_salesOne.shape[0]
        df_final = df_salesOne.iloc[count_row - 1]
        np_current = df_final.to_numpy()
        return np_current

    # Due to the limited time on hand , one Weakness that the team had to settle with of this datascience component
    # is that it is built to successfully predict only a certain type of datasets with the correct amount of data
    # ( Data of at least 4 years) and an assumption is done where the data has an upwards trend. The data is
    # pre-process under this pre conceived notion and the structure of the dataset should also be of the type of
    # dataset the team used for training the following model.

    # The improvements that can be done to this component in order to work with multiple different datasets will be
    # considered as future enhancements. It is also important to note that this app is not ready for the market
    # because of this issue.

    def setupLearn(self):
        # Starting the process. The data is added to a numpy array.
        # numpy array is converted to a dataframe.
        print("debug[starting learn]")
        data = np.array(self.dataArray)
        df_hist_sales = pd.DataFrame(data=data, columns=["date", "store", "item", "sales"])
        print(df_hist_sales)

        # The sales data is converted to type integer and the dates are converted to type datetime for convenience.
        # All the sales made during the month on different days are added up and taken as the total monthly sales
        # under the first day of each month
        df_hist_sales['sales'] = pd.to_numeric(df_hist_sales['sales'])
        df_hist_sales['date'] = pd.to_datetime(df_hist_sales['date'])
        df_hist_sales['date'] = df_hist_sales['date'].dt.year.astype('str') + '-' + df_hist_sales[
            'date'].dt.month.astype('str') + '-01'
        df_hist_sales['date'] = pd.to_datetime(df_hist_sales['date'])
        df_sales_grouped = df_hist_sales.groupby('date').sales.sum().reset_index()
        df_sales_grouped['sales'] = df_sales_grouped['sales'].astype(int)

        # The previous sales section is created using the shift function in order to create features to train our model
        # This gives null values so those are removed and the final values are calculated
        # The difference between the two values are taken in order to normalise the data
        df_diff_values = df_sales_grouped.copy()
        df_diff_values['prev_sales'] = df_diff_values['sales'].shift(1)
        df_diff_final = df_diff_values.dropna()
        df_diff_final['diff'] = (df_diff_final['sales'] - df_diff_final['prev_sales'])
        df_supervised_values = df_diff_final.drop(['prev_sales'], axis=1)

        # lags are created and filled with values that will be used for training
        for inc in range(1, 12):
            column_name = 'lag_' + str(inc)
            df_supervised_values[column_name] = df_supervised_values['diff'].shift(inc)

        # drop null values
        df_supervised_final = df_supervised_values.dropna().reset_index(drop=True)

        df_model = df_supervised_final.drop(['sales', 'date'], axis=1)
        # split the data for the training and testing as train_set and test_set
        # Here we have taken the last 6 months data as the testing data
        # The data is scaled to fit between -1 and 1 in order to normalise the values
        train_set, test_set = df_model[0:-6].values, df_model[-6:].values
        scaler = MinMaxScaler(feature_range=(-1, 1))
        scaler = scaler.fit(train_set)

        # reshape training set
        train_set = train_set.reshape(train_set.shape[0], train_set.shape[1])
        train_set_scaled = scaler.transform(train_set)
        # reshape test set
        test_set = test_set.reshape(test_set.shape[0], test_set.shape[1])
        test_set_scaled = scaler.transform(test_set)

        X_train, y_train = train_set_scaled[:, 1:], train_set_scaled[:, 0:1]
        X_train = X_train.reshape(X_train.shape[0], 1, X_train.shape[1])
        X_test, y_test = test_set_scaled[:, 1:], test_set_scaled[:, 0:1]
        X_test = X_test.reshape(X_test.shape[0], 1, X_test.shape[1])

        # creating a LSTM model and training with the prepared data
        # this also prints the processing data of the learning process and it shows how the error values decrease with
        # every epoch
        model = Sequential()
        model.add(LSTM(4, batch_input_shape=(1, X_train.shape[1], X_train.shape[2]), stateful=True))
        model.add(Dense(1))
        model.compile(loss='mean_squared_error', optimizer='adam')
        model.fit(X_train, y_train, epochs=100, batch_size=1, verbose=1, shuffle=False)

        # Testing is done with the data that we prepared for it
        y_pred = model.predict(X_test, batch_size=1)
        y_pred = y_pred.reshape(y_pred.shape[0], 1, y_pred.shape[1])
        # rebuild test set for inverse transform
        pred_test_set = []
        for index in range(0, len(y_pred)):
            pred_test_set.append(np.concatenate([y_pred[index], X_test[index]], axis=1))
        # reshape pred_test_set
        pred_test_set = np.array(pred_test_set)
        pred_test_set = pred_test_set.reshape(pred_test_set.shape[0], pred_test_set.shape[2])
        # inverse transform is done to the data inorder to get original values
        pred_test_set_inverted = scaler.inverse_transform(pred_test_set)

        # Predicted sales data for the six months are displayed in the following code block
        result_list = []
        sales_dates = list(df_sales_grouped[-7:].date)
        act_sales = list(df_sales_grouped[-7:].sales)
        for index in range(0, len(pred_test_set_inverted)):
            result_dict = {}
            result_dict['pred_value'] = int(pred_test_set_inverted[index][0] + act_sales[index])
            result_dict['date'] = sales_dates[index + 1]
            result_list.append(result_dict)
        df_result = pd.DataFrame(result_list)
        np_array = df_result.to_numpy()
        print("These are the predictions for the test data that we used")
        print(np_array)
        print(" ")

        # -----------------------------------------------------------------------------------------------------
        print("----------------------------------------------------------------------------------------------------")
        # starts future predictions
        print("Predicting future sales with the model ")
        # Reshaping the test set
        test_set = test_set.reshape(test_set.shape[0], test_set.shape[1])
        test_set = scaler.transform(test_set)
        # Getting the data wanted for the predictions
        x_input = test_set[5:]
        temp_input = list(x_input)
        temp_input = temp_input[0].tolist()

        # The predictions for the next six months are created here.
        lst_output = []
        n_steps = 11
        i = 0
        while (i < 6):

            if (len(temp_input) > 11):
                x_input = np.array(temp_input[1:])
                print("{} day input {}".format(i, x_input))
                x_input = x_input.reshape(1, -1)
                x_input = x_input.reshape((1, 1, n_steps))
                yhat = model.predict(x_input, verbose=0)
                print("{} day output {}".format(i, yhat))
                temp_input.extend(yhat[0].tolist())
                temp_input = temp_input[1:]
                lst_output.extend(yhat.tolist())
                i = i + 1
            else:
                x_input = x_input.reshape((1, 1, n_steps))
                yhat = model.predict(x_input, verbose=0)
                temp_input.extend(yhat[0].tolist())
                lst_output.extend(yhat.tolist())
                i = i + 1

        lst_output = np.array(lst_output)

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

        result_list = []
        # sales_dates = list(df_sales_grouped[-7:].date)
        act_sales = list(df_sales_grouped[-7:].sales)
        for index in range(0, len(pred_test_set_inverted)):
            result_dict = {}
            result_dict['pred_value'] = int(pred_test_set_inverted[index][0] + act_sales[index])
            result_list.append(result_dict)

        df_result = pd.DataFrame(result_list)
        date_array = df_sales_grouped.to_numpy()
        sales_dates = date_array[-1][0]
        date_series = pd.date_range(sales_dates, periods=7, freq='M')
        df = pd.DataFrame(date_series)
        df = df.drop(df.index[[0]])
        after_drop = df.to_numpy()
        df_after = pd.DataFrame(after_drop)
        result = pd.concat([df_result, df_after], axis=1, join='inner')
        Final_Numpy = result.to_numpy()
        print(Final_Numpy)
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
        print("next month predictions : ", nextMonth)
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
        return [self.predictionDates, self.predictionAmounts, self.numpy_prediction, self.dataArray]

    def setAllData(self, data):
        self.predictionDates = data[0]
        self.predictionAmounts = data[1]
        self.numpy_prediction = data[2]
        self.dataArray = data[3]
