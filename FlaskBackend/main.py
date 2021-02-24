import signUp
import database
from monitorSCM import MonitorSCM
import time

class main:

    def _getIntInput(self):
        return 0

    def _getStringInput(self):
        return "-string-"

    def login(self):
        return

    def signUp(self):
        return

    obj = MonitorSCM()
    obj.setRawMatTime(2)
    print(obj.getRawMatProgress())
    time.sleep(5)
    print(obj.getRawMatProgress())

    obj.setProductionTime(2)
    print(obj.getProductionProgress())
    time.sleep(5)
    print(obj.getProductionProgress())

    obj.setDistributionTime(2)
    print(obj.getDistributionProgress())
    time.sleep(5)
    print(obj.getDistributionProgress())

