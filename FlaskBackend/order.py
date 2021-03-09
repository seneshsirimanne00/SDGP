class Order:
    #Each product has an order instance which allows an order to be placed

    #Orders can be RawMatOrders or Product Orders

    orderType = None

    def __init__(self):
        self.vendorName = ""
        self.materialName = ""
        self.vendorId = ""
        self.materialQuantity = 0
        self.orderTime = 0
        self.expectedTime

    def setRawMatOrder(self, materialName , vendorName , vendorId , materialQuantity , orderTime , expectedTime):
        self.orderType = "rawMatOrder"


