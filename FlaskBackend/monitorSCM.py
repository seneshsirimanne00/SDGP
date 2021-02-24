import time


class MonitorSCM:
    # The underscore _ before a variable sets it's access level to protected in python
    # Double underscore __ sets a variable or class to private
    
    _rawMatSupply_startTime = 0.0
    _rawMatSupply_endTime = 0.0
    _production_startTime = 0.0
    _production_endTime = 0.0
    _distribution_startTime = 0.0
    _distribution_endTime = 0.0

    def __init__(self, database):
        self.database = database
        return

    def getRawMatProgress(self):
        secondsRemaining = self._rawMatSupply_endTime - time.time()

        percentage = secondsRemaining / (self._rawMatSupply_endTime - self._rawMatSupply_startTime)
        percentage = percentage*100
        if secondsRemaining <0:
            percentage = 100
        return percentage

    def getProductionProgress(self):
        secondsRemaining = self._production_endTime - time.time()

        percentage = secondsRemaining / (self._production_endTime - self._production_startTime)
        percentage = percentage*100
        if secondsRemaining<0:
            percentage = 100
        return percentage

    def getDistributionProgress(self):
        secondsRemaining = self._distribution_endTime - time.time()

        percentage = secondsRemaining / (self._distribution_endTime - self._distribution_startTime)
        percentage = percentage*100
        if secondsRemaining<0:
            percentage = 100
        return percentage

    def getAutoInventoryList(self):
        return

    def getRawMatInventoryList(self):
        return

    def getSalesForecast(self):
        return

    def setRawMatTime(self , timeInMins):
        self._rawMatSupply_startTime = time.time()
        self._rawMatSupply_endTime = time.time() + (timeInMins*60)

    def setProductionTime(self , timeInMins):
        self._production_startTime = time.time()
        self._production_endTime = time.time() + (timeInMins*60)

    def setDistributionTime(self, timeInMins):
        self._distribution_startTime = time.time()
        self._distribution_endTime = time.time() + (timeInMins*60)