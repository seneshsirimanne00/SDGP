from database import  Database

class Company:

    __accounts = [] #Holds a list of accounts that belong to the company

    def __init__(self):
        self.__database = Database()

    def createAccount(self, username , password):
        newUser = Account()
        self.__accounts.append()




