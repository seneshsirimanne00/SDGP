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

    # Helper Methods --!>

    # Main Methods <!--

    def addPoRequest(self, rawMatName, rawMatQty, supplierName, matPricePerUnit):
        if not self.supplierExists(supplierName):
            return "Supplier Does not exist!"
        supObj = self.database.getSupplier(supplierName)
        if not supObj.doesSell(rawMatName):
            return "Supplier Does not Sell " + rawMatName
        # If supplier Exists and Sells a given item, the PO request can be made

        orderDuration = supObj.getDeliveryTime()
        self.database.getStock().placeRawMatOrder(rawMatName, orderDuration, rawMatQty, matPricePerUnit, supplierName)
        print("This Print works?")
        self.database.getStock().viewRawMatOrders()  # Displaying to console. Debug

    # SENEEEEEEEEEEEEEEEEEEEEEEEESh - We decided that one supplier may sell mutiple materials (Adjust GUI for this)
    def createSupplier(self, supplierName, matName, orderTime, supDescription):
        self.database.createSupplier(supplierName, orderTime, supDescription)
        supplierObj = self.database.getSupplier(supplierName)
        supplierObj.addMaterial(matName , price) #

    # Main Methods --!>


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
