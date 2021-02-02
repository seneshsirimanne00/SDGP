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

    def getRawMatProgress(self):
        return

    def getProductionProgress(self):
        return

    def getDistributionProgress(self):
        return

    def getAutoInventoryLis(self):
        return

    def getRawMatInventoryList(self):
        return

    def getSalesForecast(self):
        return