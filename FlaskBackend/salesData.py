class SalesData(object):

    #Items are sold in batches therefore one item in array is a batch
    salesAmounts = []
    salesDates = []
    profits = []
    actualCost = []

    def __init__(self, unitCost):
        self.unitCost = unitCost

    def getSalesAmounts(self):
        return self.salesAmounts

    def getSalesDates(self):
        return self.salesDates

    def getProfits(self):
        return self.profits

    def addSales(self , amount , date , actualCost ):
        """Use when adding a single month of sales data   """
        self.salesAmounts.append(amount)
        self.salesDates.append(date)
        self.actualCost.append(actualCost)
        self.profits.append( (self.unitCost*amount) - actualCost )

    def addMultipleSales(self, dataframe ):
        """
        Use when adding several months of data
        Pandas dataframe is taken as an argument
        the dataframe must contain date and sales columns
        """


        """for index in range(len(amount)):
            #This can be done because length of amount,data,actualCost must be the same
            self.addSales(amount[index] , date[index] , actualCost[index])"""

    def __str__(self):
        return "SalesData[ salesamounts:" + str(self.salesAmounts) + ",salesDates:" + str(self.salesDates) +",profits:" + str(self.profits) + ",actualCost:" + str(self.actualCost) +",unitCost"+ str(self.unitCost) + " ]"

    def getAllData(self):
        return [self.salesAmounts , self.salesDates , self.profits , self.actualCost , self.unitCost]

    def setAllData(self , salesDataArr):
        self.salesAmounts = salesDataArr[0]
        self.salesDates = salesDataArr[1]
        self.profits = salesDataArr[2]
        self.actualCost = salesDataArr[3]
        self.unitCost = salesDataArr[4]
