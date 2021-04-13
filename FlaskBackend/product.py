from salesData import SalesData
from prediction import Prediction


class Product(object):

    def __init__(self, name, costPerUnit, materialNames, materialQtys, productionTime):
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

    """
    ====================================================================================================================
    """

    def getAllData(self):
        return [self.name, self.costPerUnit, self.rawMatNames, self.rawMatQtys, self.prediction.getAllData()]

    def setAllData(self, productData):
        self.name = productData[0]
        self.costPerUnit = productData[1]
        self.rawMatNames = productData[2]
        self.rawMatQtys = productData[3]
        print("Loaded prediction data" , productData[4])
        self.prediction.setAllData(productData[4])

    def __str__(self):
        data = "Name: "+ self.name + " / Cost: " + self.costPerUnit + " /rawMatsInProduct : "  + self.rawMatNames + " /prodcution time : " + self.productionTime
        return data
