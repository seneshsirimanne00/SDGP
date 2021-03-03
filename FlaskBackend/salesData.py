class SalesData:

    #Items are sold in batches therefore one item in array is a batch
    __salesAmounts = []
    __salesDates = []
    __profits = []

    def getSalesAmounts(self):
        return self.__salesAmounts

    def getSalesDates(self):
        return self.__salesDates

    def getProfits(self):
        return self.__profits

    def addSales(self , amount , date , profit):
        self.__salesAmounts.append(amount)
        self.__salesDates.append(date)
        self.__profits.append(profit)

