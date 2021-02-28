from database import  Database
from account import Account

class Company:

    __accounts = [] #Holds a list of accounts that belong to the company

    def __init__(self):
        self.__database = Database()

    def createAccount(self, accountId, firstName, lastName, accountType, email , password):
        #The Account details must be validated at Sign Up class, before entering this point.
        newUser = Account(accountId, firstName, lastName, accountType, email , password)
        self.__accounts.append(newUser)
        
    def displayAccounts(self):
        for account in self.__accounts:
            print(account.toString())




