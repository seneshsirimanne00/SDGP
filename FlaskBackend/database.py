from product import Product
from stock import Stock
from supplier import Supplier
from salesData import SalesData
import pickle


class Database:
    """
    New object created with company name in constructor, this allows database to load and save data belonging to
    that given company
    """
    __products = []
    savePath = "saveData/"

    # Holds a list of suppliers who provide the company with rawMaterials
    suppliers = []

    def __init__(self, companyName):
        """
        Database instance is created with the company name, it loads any data related to that company
        """
        self.__stock = Stock()  # Creates empty stock
        self.__companyName = companyName
        self.load()

    # [Save Load Section]-----------------------------------------------------------------------------------------------

    def load(self):
        def loadFromFile(filename):
            try:
                with open(filename, "rb") as file:
                    data = pickle.load(file)
                return data
            except FileNotFoundError:
                file = open(filename, "wb")
                file.close()

        self.__stock = Stock()
        loadedStockData = loadFromFile(self.savePath + self.__companyName + "_stockData.dat")
        if loadedStockData is not None:
            self.__stock.setAllData(loadedStockData)

        self.__products = []
        loadedProductData = loadFromFile(self.savePath + self.__companyName + "_productData.dat")
        if loadedProductData is not None:
            for productData in loadedProductData:
                emptyProduct = Product("empty", 0)
                emptyProduct.setAllData(productData)
                self.__products.append(emptyProduct)

    def save(self):
        def saveToFile(data, filename):
            with open(filename, "wb") as file:
                pickle.dump(data, file)

        saveToFile(self.__stock.getAllData(), self.savePath + self.__companyName + "_stockData.dat")

        product_detail_list = []
        if len(self.__products) != 0:
            for prod in self.__products:
                product_detail_list.append(prod.getAllData())

        saveToFile(product_detail_list, self.savePath + self.__companyName + "_productData.dat")

    # ------------------------------------------------------------------------------------------------------------------

    def addAccount(self, email, username, password):
        # NOT IMPLEMENTED
        return

    # [Product Section]-------------------------------------------------------------------------------------------------

    def getProduct(self, prodName):
        found = False
        for each_product in self.__products:
            if each_product.getName().upper() == prodName.upper():
                found = True
                return each_product
        if not found:
            raise Exception("Product Not found!")

    def getStock(self):
        return [self.__stock.getProductList(), self.__stock.getQuantityList()]

    def displayProducts(self):
        for prod in self.__products:
            print("Product : ", str(prod))

    def addSales(self, prodName, dataframe):
        """This dataframe should consist of only two columns , date and sales"""
        prod = self.getProduct(prodName)
        prod.getSales().addMultipleSales(dataframe)

    def getProducts(self):
        return self.__products

    def createProduct(self, name, costPerUnit):
        newProd = Product(name, costPerUnit)
        self.__products.append(newProd)

    # ------------------------------------------------------------------------------------------------------------------

    # [Supplier Segment]------------------------------------------------------------------------------------------------

    def nextSupplierID(self):
        biggest = 0
        for supplier in self.suppliers:
            if supplier.getId() > biggest:
                biggest = supplier.getId()
        return biggest

    def createSupplier(self, supplierName, deliveryTime):
        # ID will be automatically set
        supplier = Supplier(self.nextSupplierID(), supplierName, deliveryTime)
        # This supplier does not have any materials set YET. Add material method must be called to add materials to a
        # supplier . This is done cause one supplier has the ability to sell multiple materials
        self.suppliers.append(supplier)

    def getSupplier(self, supplierName):
        for supplier in self.suppliers:
            if (supplierName.lower() == supplier.getName().lower()):  # Making sure there checked on the same case
                return supplier
        return None  # Returning none means supplier not found

    def addSupplierMat(self, supplierName, materialName, unitCost):
        supplierObj = self.getSupplier(supplierName)
        if supplierObj is None:
            raise Exception("Supplier Not Found!")
        supplierObj.addMaterial(materialName, unitCost)


    # ------------------------------------------------------------------------------------------------------------------
