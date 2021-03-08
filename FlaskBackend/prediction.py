class Prediction:
    __predictedSales = 0

    def __init__(self, salesData):
        self.salesData = salesData

    def getSalesData(self):
        return

    def train(self):
        return

    def predictNextMonth(self):
        return

    def __str__(self):
        return "Prediction[ predictedSales:" + str(self.__predictedSales) + " ]"

    def getAllData(self):
        return self.__predictedSales

    def setAllData(self, predictedSales):
        self.__predictedSales = predictedSales
