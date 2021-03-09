from prediction import Prediction
from salesData import SalesData


class Product(object):
    rawMaterialsPer = []  # 2D array where each new element of array contains [rawMatName , quantity]
    

    def __init__(self, name, costPerUnit):
        """Raw materials can be set after creating product object"""
        self.name = name
        self.costPerUnit = costPerUnit
        self.salesData = SalesData(costPerUnit)
        self.prediction = Prediction(self.salesData)

    def addRawMaterial(self, materialName, materialQuantity):
        self.rawMaterialsPer.append([materialName, materialQuantity])

    def getRawMaterials(self):
        return self.rawMaterialsPer

    def getSales(self):
        return self.salesData

    def getPredictions(self):
        return self.prediction

    def getName(self):
        return self.name

    def __str__(self):
        return "Product[ rawMaterialsPer:" + str(self.rawMaterialsPer) + ",name:" + self.name + ",costPerUnit:"+ str(self.costPerUnit) + "," + str(self.salesData) + "," + str(self.prediction) + " ]"


    def getAllData(self):
        return [self.rawMaterialsPer, self.name, self.costPerUnit, self.salesData.getAllData(),
                self.prediction]

    def setAllData(self, productData):
        self.rawMaterialsPer = productData[0]
        self.name = productData[1]
        self.costPerUnit = productData[2]

        self.salesData = SalesData(self.costPerUnit)
        self.salesData.setAllData(productData[3])

        self.prediction = Prediction(self.salesData)
        self.prediction = productData[4]
