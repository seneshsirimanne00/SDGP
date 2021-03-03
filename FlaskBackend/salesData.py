class SalesData:

    #Items are sold in batches therefore one item in array is a batch
    __salesAmounts = []
    __salesDates = []
    __profits = []
    __actualCost = []

    def __init__(self, unitCost):
        self.__unitCost = unitCost

    def getSalesAmounts(self):
        return self.__salesAmounts

    def getSalesDates(self):
        return self.__salesDates

    def getProfits(self):
        return self.__profits

    def addSales(self , amount , date , actualCost ):
        """Use when adding a single month of sales data   """
        self.__salesAmounts.append(amount)
        self.__salesDates.append(date)
        self.__actualCost.append(actualCost)
        self.__profits.append( (self.__unitCost*amount) - actualCost )

    def addMultipleSales(self, amount , date , actualCost ):
        """
        Use when adding several months of data
        amount,date,actualCost are arrays
        unit cost is single integer
        """
        for index in range(len(amount)):
            #This can be done because length of amount,data,actualCost must be the same
            self.addSales(amount[index] , date[index] , actualCost[index])


