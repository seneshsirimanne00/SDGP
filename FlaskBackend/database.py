from product import Product
from stock import Stock
from supplier import Supplier
from salesData import SalesData
import os
import pickle


class Database:
    """
    New object created with company name in constructor, this allows database to load and save data belonging to
    that given company
    """

    savePath = "saveddata/"

    def __init__(self, companyName):
        """
        Database instance is created with the company name, it loads any data related to that company
        """
        self.createSaveDirs()
        self.__stock = Stock()  # Creates empty stock
        self.__companyName = companyName

        # Holds a list of suppliers who provide the company with rawMaterials
        self.suppliers = []
        self.load()

    def createSaveDirs(self):
        # Creates save directories if they do not exist
        if not os.path.exists("saveddata"):
            os.mkdir("saveddata")

    # [Save Load Section]-----------------------------------------------------------------------------------------------

    def load(self):
        def loadFromFile(filename):
            try:
                with open(filename, "rb") as file:
                    data = pickle.load(file)
                return data
            except Exception:
                file = open(filename, "wb")
                file.close()

        self.__stock = Stock()
        loadedStockData = loadFromFile(self.savePath + self.__companyName + "_stockData.dat")
        if loadedStockData is not None:
            self.__stock.setAllData(loadedStockData)

        self.suppliers = []
        loadedSuppliers = loadFromFile(self.savePath + self.__companyName + "_supplierData.dat")
        if loadedSuppliers is not None:
            for supplierData in loadedSuppliers:
                supplierObj = Supplier(0, "PLACEHOLDER_NAME", 0)
                supplierObj.setAllData(supplierData)
                self.suppliers.append(supplierObj)

    def save(self):
        def saveToFile(data, filename):
            with open(filename, "wb") as file:
                pickle.dump(data, file)

        saveToFile(self.__stock.getAllData(), self.savePath + self.__companyName + "_stockData.dat")

        supplierList = []
        if len(self.suppliers) != 0:
            for supplier in self.suppliers:
                supplierList.append(supplier.getAllData())
        saveToFile(supplierList, self.savePath + self.__companyName + "_supplierData.dat")

    # ------------------------------------------------------------------------------------------------------------------

    def addAccount(self, email, username, password):
        # NOT IMPLEMENTED
        return

    def getStock(self):
        return self.__stock

    # [Supplier Segment]------------------------------------------------------------------------------------------------

    def nextSupplierID(self):
        biggest = 0
        for supplier in self.suppliers:
            if supplier.getId() > biggest:
                biggest = supplier.getId()
        return biggest + 1

    def createSupplier(self, supplierName, deliveryTime):
        # ID will be automatically set
        supplier = Supplier(self.nextSupplierID(), supplierName, deliveryTime)
        # This supplier does not have any materials set YET. Add material method must be called to add materials to a
        # supplier . This is done cause one supplier has the ability to sell multiple materials
        print("Empty Supplier Created -", str(supplier))
        self.suppliers.append(supplier)

    def getSupplier(self, supplierName):
        for supplier in self.suppliers:
            if supplierName.lower() == supplier.getName().lower():  # Making sure there checked on the same case
                return supplier
        return None  # Returning none means supplier not found

    def getAllSuppliers(self):
        return self.suppliers

    def addSupplierMat(self, supplierName, materialName, unitCost):
        supplierObj = self.getSupplier(supplierName)
        if supplierObj is None:
            raise Exception("Supplier Not Found!")
        supplierObj.addMaterial(materialName, unitCost)

    def confirmPoOrder(self, orderId):
        self.__stock.confirmRawMatOrder(orderId)

    # ------------------------------------------------------------------------------------------------------------------
