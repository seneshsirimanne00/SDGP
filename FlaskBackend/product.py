from prediction import Prediction
from salesData import SalesData

class Product:

    __rawMaterialsPer = [] #2D array where each new element of array contains [rawMatName , quantity]

    def __init__(self , name , costPerUnit , rawMatPer):
        self.__name = name
        self.__costPerUnit = costPerUnit
        self.__rawMaterialsPer = rawMatPer
        self.__salesData = SalesData()
        self.__prediction = Prediction(self.__salesData)

    def getSales(self):
        return self.__salesData

    def getPredictions(self):
        return self.__prediction