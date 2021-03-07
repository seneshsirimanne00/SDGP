from product import Product
from stock import Stock
from salesData import SalesData
import pickle


class Database:
    """
    New object created with company name in constructor, this allows database to load and save data belonging to
    that given company
    """
    __products = []
    savePath = "saveData/"

    def __init__(self, companyName):
        self.__stock = Stock()  # Creates empty stock
        self.__companyName = companyName
        self.load()

    def createNewFolder(self):
        return

    def load(self):
        def loadFromFile(filename):
            try:
                with open(filename, "rb") as file:
                    data = pickle.load(file)
                return data
            except FileNotFoundError:
                file = open(filename , "wb")
                file.close()

        self.__stock = Stock()
        loadedStockData = loadFromFile(self.savePath + "stockData.dat")
        if loadedStockData is not None:
            self.__stock.setAllData(loadedStockData)

        self.__products = []
        loadedProductData = loadFromFile(self.savePath + "productData.dat")
        if loadedProductData is not None:
            for productData in loadedProductData:
                emptyProduct = Product("empty", 0)
                emptyProduct.setAllData(productData)
                self.__products.append(emptyProduct)


    def save(self):
        def saveToFile(data,filename):
            with open(filename , "wb") as file:
                pickle.dump(data , file)

        saveToFile(self.__stock.getAllData(),self.savePath + "stockData.dat")

        product_detail_list = []
        if len(self.__products) != 0:
            for prod in self.__products:
                product_detail_list.append(prod.getAllData())

        saveToFile(product_detail_list ,self.savePath + "productData.dat")

    def getStock(self):
        return [self.__stock.getProductList(), self.__stock.getQuantityList()]

    def getProduct(self, prodName):
        for each_product in self.__products:
            if each_product.getName().upper() == prodName.upper():
                return each_product

    def displayProducts(self):
        for prod in self.__products:
            print("Product : ",prod.getAllData())

    def getProducts(self):
        return self.__products

    def addAccount(self, email, username, password):
        return

    def createProduct(self, name, costPerUnit):
        newProd = Product(name, costPerUnit)
        self.__products.append(newProd)
