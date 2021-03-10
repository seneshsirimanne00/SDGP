from database import Database
from account import Account


class Company:
    __accounts = []  # Holds a list of accounts that belong to the company


    def __init__(self , companyName , email , password):
        # When a company is created a main ACCOUNT is also created with ADMIN status. This admin account can add and
        # create other admin and user accounts to the company
        self.__database = Database(companyName)
        self.companyName = companyName

    def createAccount(self, accountId, firstName, lastName, accountType, email, password):
        # The Account details must be validated at Sign Up class, before entering this point.
        newUser = Account(accountId, firstName, lastName, accountType, email, password)
        self.__accounts.append(newUser)

    def displayAccounts(self):
        # for console
        for account in self.__accounts:
            print(account.toString())

    def findAccount(self, id):
        for account in self.__accounts:
            if account.getCredentials()[0] == id:
                return account
        return None
