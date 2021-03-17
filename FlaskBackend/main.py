from appDatabase import AppDatabase
from database import Database
from prediction import Prediction


class Main:
    activeCompany = None
    appDatabase = AppDatabase()

    def __init__(self):
        """self.appDatabase = AppDatabase()
        self.appDatabase.createCompany("inate") # For now a company needs to be created each time becuase references
        # to companies dont have save functionality yet.
        self.activeCompany = self.appDatabase.getCompany("inate")"""
        # Company and their account functionality will be added after base project(SCM System for fixed user) is
        # complete
        companyName = "inate"
        self.database = Database(companyName)

    def login(self):
        return "Empty Login Method"

    def signUp(self):
        return

    def signUpAccount(self):
        return

    # Sign-up Segment <!---

    # Validates and checks if the password matches the required criteria.
    # A password requires 8 plus characters and at least one number.
    def passwordValidate(self, password):

        if (len(password) > 8 and any(elem.isdigit()) for elem in password):
            passwordStatus = "true"

        else:
            passwordStatus = "false"

    # Validates and checks if the email is in the correct format(example@xmail.com)
    """
    def emailvalidate(self):
        text = "venurail.com"
        pattern = r'^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)+$'
        if re.fullmatch(pattern, text):
            print("Valid email")
        else:
            print("Filtered email")

        return

    """

    def username(self):
        return

    # Sign-Up Segment --!>

    # Login Segment <!--

    def getAccount(self):
        return

    def getSignUp(self):
        return

    def authenticate(self):
        return

    # Login Segment --!>

    # Helper Methods <!--

    def prediction(self):
        prd = Prediction()

    def getIntInput(self, message):
        number = input(message)
        try:
            number = int(number)
            return number
        except ValueError:
            print(number + " is not a Number!")
            return False

    def supplierExists(self, supplierName):
        if self.database.getSupplier(supplierName) is None:
            return False
        return True

    def listIsInt(self, arr):
        try:
            converted = []
            for element in arr:
                converted.append(int(element))
        except Exception as e:
            # print("Main Exception " , e)
            # Made to crash whenever ivalid data comes through, For now! till it can be handled withing frontend itself
            raise Exception("Incorrect Datatype Passed!" + str(arr))

    def getLabeledDict(self, labels, data):
        if (len(labels) != len(data)):
            raise Exception("Non-equal quantity of Labels and Data")
        newDict = {}
        for x in range(len(labels)):
            newDict[str(labels[x])] = data[x]
        return newDict

    # Helper Methods --!>

    # Main Methods <!--

    def addPoRequest(self, rawMatName, rawMatQty, supplierName, matPricePerUnit):
        self.listIsInt([rawMatQty, matPricePerUnit])
        if not self.supplierExists(supplierName):
            return "Supplier Does not exist!"
        supObj = self.database.getSupplier(supplierName)
        if not supObj.doesSell(rawMatName):
            return "Supplier Does not Sell " + rawMatName
        # If supplier Exists and Sells a given item, the PO request can be made

        orderDuration = supObj.getDeliveryTime()
        self.database.getStock().placeRawMatOrder(rawMatName, orderDuration, rawMatQty, matPricePerUnit, supplierName)
        self.database.getStock().viewRawMatOrders()  # Displaying to console. Debug
        return "PO Request Added"

    def createSupplier(self, supplierName, matName, orderTime, unitPrice):
        self.listIsInt([orderTime, unitPrice])
        if self.supplierExists(supplierName):
            supObj = self.database.getSupplier(supplierName)
            print("Debug[Main Createsupplier(Existing)] -", str(supObj), supObj.getMaterials())
            supObj.addMaterial(matName, unitPrice)
            return "Supplier Updated"
        else:
            self.database.createSupplier(supplierName, orderTime)
            supplierObj = self.database.getSupplier(supplierName)
            print("Debug[Main Createsupplier(New)] -", str(supplierObj))
            supplierObj.addMaterial(matName, unitPrice)
            return "Supplier Created"

    # All unconfirmed orders stay in PO(PURCHASE ORDER) table while confirmed orders are shown in PR table
    def getPoData(self):
        orderList = self.database.getStock().getRawMatOrders()
        unconfirmed_orderList = []
        for order in orderList:
            if not order.isConfirmed():
                unconfirmed_orderList.append(order)
        return unconfirmed_orderList

    def getPrData(self):
        orderList = self.database.getStock().getRawMatOrders()
        confirmed_orderList = []
        for order in orderList:
            if order.isConfirmed():
                confirmed_orderList.append(order)
        return confirmed_orderList

    def getSuppliersInfo(self):
        return self.database.getAllSuppliers()

    def save(self):
        self.database.save()

    # Main Methods --!>

    # Console Methods <!--

    def displaySuppliers(self):
        supList = self.database.getAllSuppliers()
        for supplier in supList:
            print(str(supplier), end=" ")
        print()

    # Console Methods --!>


"""
df = pd.read_excel("savedata/BatchCost_Edited.xlsx")
print(df.head(5))
"""

"""
db = Database("inate")

db.createProduct("Amrita Jasmine", 30)
item = db.getProduct("Amrita Jasmine")
item.addRawMaterial("Nice smell" , 2)
item_sales = item.getSales()
item_sales.addSales(50400, "15.15.2020", 950000)

db.save()
"""

"""db = Database("inate")

pd.set_option("max_columns", None)


import pandas as pd


df_sales = pd.read_csv('savedata/Original.csv')
df_sales['date'] = pd.to_datetime(df_sales['date'])
print(df_sales.head(5))
print("----------------")

data = df_sales[['date' , 'sales']]
print(data.head(5))"""
