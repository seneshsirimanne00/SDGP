from salesData import SalesData
from prediction import Prediction


class Product(object):

    globalProductId = 1

    def __init__(self, name, costPerUnit, materialNames, materialQtys, productionTime):
        self.productId = self.__class__.globalProductId
        self.__class__.globalProductId += 1

        self.name = name
        self.costPerUnit = costPerUnit

        self.rawMatNames = materialNames
        self.rawMatQtys = materialQtys

        self.productionTime = productionTime

        # self.salesData = SalesData(costPerUnit)

        self.prediction = Prediction()

    def runPrediction(self):
        self.prediction.learn()

    def addRawMaterial(self, materialName, materialQuantity):
        self.rawMatNames.append(materialName)
        self.rawMatQtys.append(materialQuantity)

    def getName(self):
        return self.name

    def getRawMatNames(self):
        return self.rawMatNames

    def getRawMatQtys(self):
        return self.rawMatQtys

    def getPrediction(self):
        return self.prediction

    def getProdTime(self):
        return self.productionTime

    def getCost(self):
        return self.costPerUnit

    def getId(self):
        return self.productId

    """
    ====================================================================================================================
    """

    def getAllData(self):
        return [self.name, self.costPerUnit, self.rawMatNames, self.rawMatQtys, self.prediction.getAllData() , self.globalProductId , self.productId]

    def setAllData(self, productData):
        self.name = productData[0]
        self.costPerUnit = productData[1]
        self.rawMatNames = productData[2]
        self.rawMatQtys = productData[3]
        self.prediction.setAllData(productData[4])
        self.globalProductId = productData[5]
        self.productId = productData[6]

    def __str__(self):
        data = "Name: "+ self.name + " / Cost: " + str(self.costPerUnit) + " /rawMatsInProduct : "  + str(self.rawMatNames) + " /prodcution time : " + str(self.productionTime) + " /Product ID : " + str(self.productId)
        return data
