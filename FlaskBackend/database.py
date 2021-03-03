from product import Product
from stock import Stock
import jsonpickle


class Database:
    """
    New object created with company name in constructor, this allows database to load and save data belonging to
    that given company
    """
    __products = []


    def __init__(self , companyName ):
        self.__stock = Stock()  # Creates empty stock
        self.__companyName = companyName
        self.load()

    def createNewFolder(self):
        return

    def load(self):
        def loadSingle(filename):
            file = open(filename , "r")
            file_text = ""
            for line in file:
                file_text += line
            file.close()
            return file_text


        try:
            stockData_text = loadSingle("savedata/" + self.__companyName + "_stock.txt")
            productData_text = loadSingle("savedata/" + self.__companyName + "_products.txt")

            if(stockDat)

            self.__stock = jsonpickle.decode(stockData_text)
            self.__products = jsonpickle.decode(productData_text)
        except FileNotFoundError:
            #Creates empty file if not created
            open("savedata/" + self.__companyName + "_stock.txt" , "w")
            open("savedata/" + self.__companyName + "_products.txt" , "w")
            print("Debug - stock/products file not found")



    def save(self):
        try:
            stock_encoded = jsonpickle.encode(self.__stock)
            products_encoded = jsonpickle.encode(self.__products)
            stock_file = open("savedata/" + self.__companyName + "_stock.txt" , "w")
            products_file = open("savedata/" + self.__companyName + "_products.txt" , "w")
            stock_file.close()
            products_file.close()
        except Exception as error:
            print("debug - " + error)


    def getStock(self):
        return [self.__stock.getProductList() , self.__stock.getQuantityList()]

    def getProduct(self , prodName):
        for each_product in self.__products:
            if each_product.getName().upper() == prodName.upper():
                return each_product

    def getProducts(self):
        return self.__products

    def addAccount(self , email , username , password):
        return


    def createProduct(self, name , costPerUnit):
        newProd = Product(name , costPerUnit)
        self.__products.append(newProd)