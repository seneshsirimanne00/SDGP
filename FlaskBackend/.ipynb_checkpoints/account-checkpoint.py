import monitorSCM
class Account:

    __email = ""
    __password = ""
    __monitorSCM = monitorSCM.MonitorSCM()

    def __init__(self, accountId, firstName, lastName, accountType, email , password):
        self.accountId = accountId
        self.firstName = firstName
        self.lastName = lastName
        self.accountType = accountType
        self.__email = email
        self.__password = password

    def addData(self):
        return

    def manipulateData(self):
        return

    def monitorProcess(self):
        return

    def getMonitorSCM(self):
        return

