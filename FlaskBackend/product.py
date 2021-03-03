from prediction import Prediction
from salesData import SalesData


class Product:
    __rawMaterialsPer = []  # 2D array where each new element of array contains [rawMatName , quantity]

    def __init__(self, name, costPerUnit):
        """Raw materials can be set after creating product object"""
        self.__name = name
        self.__costPerUnit = costPerUnit
        self.__salesData = SalesData(costPerUnit)
        self.__prediction = Prediction(self.__salesData)

    def addRawMaterial(self, materialName , materialQuantity):
        self.__rawMaterialsPer.append(  [materialName,materialQuantity]  )

    def getSales(self):
        return self.__salesData

    def getPredictions(self):
        return self.__prediction

    def getName(self):
        return self.__name
