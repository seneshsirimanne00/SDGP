from company import Company


class AppDatabase:
    """
    AppDatabase doesnt actually hold the data, neither does the Database class (No serialisation)
    The database class will save and load the data of appropriate company depending on what  comapny called the
    database object
    """

    __companies = []

    def __init__(self):
        pass

    def createCompany(self , companyName , email , password):
        company = Company(companyName , email , password)
        self.__companies.append( company )

    def findAccount(self, id):
        for company in self.__companies:
            account = company.findAccount(id)
            if account is not None:
                return account
        return None

    def getCompany(self, companyName):
        found = False
        for company in self.__companies:
            if company.companyName.lower() == companyName.lower():
                found = True
                return company
        if not found:
            raise Exception("Company Does not exist")