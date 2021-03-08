from appDatabase import AppDatabase
import pandas as pd
from product import Product
from database import Database
from salesData import SalesData


class Main:
    activeCompany = None
    appDatabase = AppDatabase()

    def getIntInput(self, message):
        number = input(message)
        try:
            number = int(number)
            return number
        except ValueError:
            print(number + " is not a Number!")
            return False

    def login(self):
        return

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
        pattern = r'^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$'
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

db = Database("inate")

pd.set_option("max_columns", None)


import pandas as pd


df_sales = pd.read_csv('savedata/Original.csv')
df_sales['date'] = pd.to_datetime(df_sales['date'])
print(df_sales.head(5))
print("----------------")

data = df_sales[['date' , 'sales']]
print(data.head(5))