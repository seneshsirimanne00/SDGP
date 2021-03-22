from order import Order


class ProductOrder(Order):

    def __init__(self):
        super().__init__()
        self.customerName = ""
        self.deliveryAddress = ""
        self.orderDate = ""

    def collect(self):
        if super()._orderCollectable():
            return super().getItemName(), super().getQuantity()
        raise Exception("Cannot collect Order! Progress :" + str(super().getProgress()) + "Completed : " + str(
            super().isCompleted()))

    def setOrder(self, productName, unitCost, quantity, orderId, duration, customerName, deliveryAddress, orderDate):
        super()._setOrder(productName, unitCost, quantity, orderId, duration)
        self.customerName = customerName
        self.deliveryAddress = deliveryAddress
        self.orderDate = orderDate

    def getCustomerName(self):
        return self.customerName

    def getAddress(self):
        return self.deliveryAddress

    def getOrderDate(self):
        return self.orderDate


    """
    ====================================================================================================================
    """

    def getAllData(self):
        return [self.customerName , self.deliveryAddress , self.orderDate , super().getAllData_parent()]

    def setAllData(self , data):
        self.customerName = data[0]
        self.deliveryAddress = data[1]
        self.orderDate = data[2]
        super().setAllData_parent(data[3])