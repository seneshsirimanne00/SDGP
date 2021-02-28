from monitorSCM import MonitorSCM
from database import Database

class Account:

    __email = ""
    __password = ""
    #__monitorSCM = MonitorSCM()

    def __init__(self, accountId, firstName, lastName, accountType, email , password):
        self.__accountId = accountId
        self.__firstName = firstName
        self.__lastName = lastName
        self.__accountType = accountType
        self.__email = email
        self.__password = password
        
    def getCredentials(self):
        #Gets credentials needed for authorising a login
        return [self.__accountId, self.__email , self.__spassword]

    def addData(self):
        return

    def manipulateData(self):
        return

    def monitorProcess(self):
        return

    def getMonitorSCM(self):
        return
    
    def toString(self):
        return "Accoount [account id : %s , firstName : %s , lastName : %s , accountType : %s , email : %s , password : %s]" % (self.__accountId, self.__firstName, self.__lastName, self.__accountType, self.__email , self.__password)

