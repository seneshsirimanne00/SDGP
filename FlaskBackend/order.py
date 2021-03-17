import time


class Order:

    def __init__(self):
        self.supplierName = ""
        self.materialName = ""
        self.materialQuantity = 0
        self.unitPrice = 0
        self.orderId = 0

        self.orderStartTime = 0
        self.orderDuration = 0
        self.orderEndTime = 0

        # Orders can be RawMatOrders or Product Orders
        self.orderType = None

        self.confirmed = False
        self.completed = False

    def setRawMatOrder(self, materialName, orderDuration, materialQuantity, unitPrice, orderId, supplierName):
        # Raw Material Order Must be accepted by an admin
        self.orderType = "rawMatOrder"
        self.materialName = materialName
        self.orderDuration = orderDuration
        self.materialQuantity = int(materialQuantity)
        self.unitPrice = float(unitPrice)
        self.orderId = orderId
        self.supplierName = supplierName

    def confirmOrder(self):
        # Start the timer for how long the order takes to complete
        self.confirmed = True
        self.orderStartTime = time.time()
        self.orderEndTime = self.orderStartTime + self.orderDuration

    def getProgress(self):
        percent = (time.time()) / (self.orderEndTime - self.orderStartTime)
        if percent > 1:
            percent = 1
        return percent * 100

    def getId(self):
        return self.orderId

    def isConfirmed(self):
        return self.confirmed

    def getMatName(self):
        return self.materialName

    def getMatQty(self):
        return self.materialQuantity

    def getTotalCost(self):
        total = self.unitPrice * self.materialQuantity
        return total

    def getSupplierName(self):
        return self.supplierName

    def getUnitCost(self):
        return self.unitPrice

    """
    ====================================================================================================================
    """

    def getAllData(self):
        return [self.orderType, self.confirmed, self.completed, self.supplierName, self.materialName,
                self.materialQuantity, self.unitPrice, self.orderId, self.orderStartTime, self.orderDuration,
                self.orderEndTime]

    def setAllData(self, orderData):
        self.orderType = orderData[0]
        self.confirmed = orderData[1]
        self.completed = orderData[2]
        self.supplierName = orderData[3]
        self.materialName = orderData[4]
        self.materialQuantity = orderData[5]
        self.unitPrice = orderData[6]
        self.orderId = orderData[7]
        self.orderStartTime = orderData[8]
        self.orderDuration = orderData[9]
        self.orderEndTime = orderData[10]

    def __str__(self):
        return "Order[ " + self.supplierName + " matName :" + self.materialName + " matQuantity :" + str(
            self.materialQuantity) + " unitPrice :" + str(self.unitPrice) + " OrderId :" + str(
            self.orderId) + " Confirmed :" + str(self.confirmed) + " completed :" + str(self.completed) + " ]"
