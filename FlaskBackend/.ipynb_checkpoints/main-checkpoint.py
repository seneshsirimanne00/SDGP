import signUp
import database
from monitorSCM import MonitorSCM
import time
from company import Company
from account import Account

class main:

    def _getIntInput(self):
        return 0

    def _getStringInput(self):
        return "-string-"

    def login(self):
        return

    def signUp(self):
        return

    
comp = Company()
#comp.createAccount("6969", "joe", "mama", "Admin", "joeMama69@goomail.com" , "passwordd")
#comp.displayAccounts()

acc = Account("6969", "joe", "mama", "Admin", "joeMama69@goomail.com" , "passwordd")
print(acc.getCredentials())
