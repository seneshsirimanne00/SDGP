class AppDatabase:
    __companies = []

    def __init__(self):
        pass

    def createCompany(self):
        pass

    def findAccount(self, id):
        for company in self.__companies:
            account = company.findAccount(id)
            if account is not None:
                return account
        return None
