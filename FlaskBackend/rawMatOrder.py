import time
from order import Order


class RawMatOrder(Order):

    def __init__(self):
        super().__init__()
        self.supplierName = ""

    def collect(self):
        if super()._orderCollectable():
            return super().getItemName(), super().getQuantity()
        raise Exception("Cannot collect Order! Progress :" + str(super().getProgress()) + "Completed : " + str(
            super().isCompleted()))

    def getSupplierName(self):
        return self.supplierName

    def setOrder(self, rawMatName, unitCost, quantity, supplierName, orderDuration, orderId):
        super()._setOrder(rawMatName, unitCost, quantity, orderId, orderDuration)
        self.supplierName = supplierName

    """
    ====================================================================================================================
    """

    def getAllData(self):
        return [self.supplierName, super().getAllData_parent()]

    def setAllData(self, data):
        self.supplierName = data[0]
        super().setAllData_parent(data[1])
