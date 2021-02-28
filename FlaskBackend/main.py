import signUp
import database
from monitorSCM import MonitorSCM
import time
from company import Company
from account import Account
from appDatabase import AppDatabase

class main:

    activeCompany = None

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

    
comp = Company()
comp.createAccount("6969", "joe", "mama", "Admin", "joeMama69@goomail.com" , "passwordd")
comp.displayAccounts()
