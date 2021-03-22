import time


class Order:

    def __init__(self):
        self.startTime = 0
        self.endTime = 0
        self.duration = 0

        self.itemName = ""
        self.unitCost = 0
        self.quantity = 0
        self.orderId = 0

        self.confirmed = False
        self.completed = False

    def confirm(self):
        self.confirmed = True
        self.startTime = time.time()
        self.endTime = self.startTime + self.duration

    def getProgress(self):
        if not self.confirmed:
            return 0
        if self.completed:
            return 100
        percent = (time.time()) / (self.endTime - self.startTime)
        if percent > 1:
            percent = 1
        return percent * 100

    # Can run ONCE, AFTER order has been set to complete
    def _orderCollectable(self):
        print("Collecting order REEEEEEEEEE")
        if self.getProgress() < 100:
            return False
        if not self.completed:
            self.completed = True
            return True
        return False

    def _setOrder(self, itemName, unitCost, quantity, orderId, duration):
        self.itemName = itemName
        self.unitCost = float(unitCost)
        self.quantity = int(quantity)
        self.orderId = int(orderId)
        self.duration = float(duration)

    # Getters Setters <!--

    def getId(self):
        return self.orderId

    def isCompleted(self):
        return self.completed

    def isConfirmed(self):
        return self.confirmed

    def getItemName(self):
        return self.itemName

    def getQuantity(self):
        return self.quantity

    def getUnitCost(self):
        return self.unitCost

    def getTotalCost(self):
        return self.quantity * self.unitCost

    # Getters Setters --!>

    """
    ====================================================================================================================
    """

    # Get set method names are different here to prevent child classes from overriding them
    def getAllData_parent(self):
        return [self.startTime, self.endTime, self.duration, self.itemName, self.unitCost, self.quantity, self.orderId,
                self.confirmed, self.completed]

    def setAllData_parent(self, data):
        self.startTime = data[0]
        self.endTime = data[1]
        self.duration = data[2]
        self.itemName = data[3]
        self.unitCost = data[4]
        self.quantity = data[5]
        self.orderId = data[6]
        self.confirmed = data[7]
        self.completed = data[8]
