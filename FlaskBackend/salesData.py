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

    def addMultipleSales(self, amount , date , actualCost ):
        """
        Use when adding several months of data
        amount,date,actualCost are arrays
        unit cost is single integer
        """
        for index in range(len(amount)):
            #This can be done because length of amount,data,actualCost must be the same
            self.addSales(amount[index] , date[index] , actualCost[index])

    def getAllData(self):
        return [self.salesAmounts , self.salesDates , self.profits , self.actualCost , self.unitCost]

    def setAllData(self , salesDataArr):
        self.salesAmounts = salesDataArr[0]
        self.salesDates = salesDataArr[1]
        self.profits = salesDataArr[2]
        self.actualCost = salesDataArr[3]
        self.unitCost = salesDataArr[4]
