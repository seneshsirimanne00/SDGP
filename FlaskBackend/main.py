import signUp
import database
from monitorSCM import MonitorSCM
import time
from company import Company
from account import Account
from appDatabase import AppDatabase
import pandas as pd

class main:

    activeCompany = None
    appDatabase = AppDatabase()

    def getIntInput(self , message):
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


    #Sign-up Segment <!---

    #Validates and checks if the password matches the required criteria.
    # A password requires 8 plus characters and at least one number.
    def passwordValidate(self , password):

        if(len(password)>8 and any(elem.isdigit()) for elem in password):
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

    #Sign-Up Segment --!>

    #Login Segment <!--

    def getAccount(self):
        return

    def getSignUp(self):
        return

    def authenticate(self):
        return

    # Login Segment --!>




pd.set_option("max_columns", None)
df = pd.read_excel("savedata/BatchCost_Edited.xlsx")
print(df.head(5))
