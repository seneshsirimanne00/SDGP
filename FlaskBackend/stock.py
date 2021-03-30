from rawMatOrder import RawMatOrder
from salesOrder import SalesOrder
from product import Product


# Helper Methods <!--

def nextOrderId(orderList):
    biggest = 0
    for order in orderList:
        if order.getId() > biggest:
            biggest = order.getId
    return biggest + 1


def confirmOrder(orderList, orderId, confirmMessage):
    for eachOrder in orderList:
        if eachOrder.getId() == orderId:
            eachOrder.confirm()
            print(confirmMessage)


# Helper Methods --!>

class Stock:

    def __init__(self):
        self.productTypes = []
        self.productQuantities = []
        self.__rawMatNames = []
        self.__rawMatQuantities = []

        self.rawMatOrders = []  # List of Order objects
        self.salesOrders = []  # Product Orders

    # Helper Methods <!--

    # Helper Methods --!>

    # Raw Material Orders <!---

    def addRawMat(self, name, quantity):
        self.__rawMatNames.append(name)
        self.__rawMatQuantities.append(quantity)

    def restockRawMat(self, name, amount):
        self.__rawMatQuantities[self.__rawMatNames.index(name)] += amount
        return

    # Figures out if RawMat needs to be added(newly) to stock or Restocked
    def addOrRestockMat(self, name, amount):
        if name in self.__rawMatNames:
            self.restockRawMat(name, amount)
        else:
            self.addRawMat(name, amount)

    def reduceRawMat(self, name, amount):
        if self.__rawMatQuantities[self.__rawMatNames.index(name)] >= amount:
            self.__rawMatQuantities[self.__rawMatNames.index(name)] -= amount
            return True
        else:
            return False

    # Checks all the orders made and if any order progress==100 but not set to completed, those orders will be used
    # to restock and will then be set to complete because its fully complete when order is collected
    def restockCompletedRawOrders(self):
        for order in self.rawMatOrders:
            orderNotCollected = not order.isCompleted()
            if (order.getProgress()) >= 100 and orderNotCollected:
                rawMatName, matQty = order.collect()
                self.addOrRestockMat(rawMatName, matQty)
                print("Debug[Restock Completed] - ", rawMatName, matQty)

    # Order is placed but one must use an admin account to confirm it
    def placeRawMatOrder(self, materialName, orderDuration, materialQuantity, price, supplierName):
        newOrder = RawMatOrder()
        newOrder.setOrder(materialName, price, materialQuantity, supplierName, orderDuration,
                          nextOrderId(self.rawMatOrders))
        self.rawMatOrders.append(newOrder)

    # View Raw Mat in console
    def viewRawMatOrders(self):
        print("Debug[viewRawMatOrders] : ", self.rawMatOrders)
        for order in self.rawMatOrders:
            print(str(order))

    # Orders should be confirmed only by admin accounts
    def confirmRawMatOrder(self, orderId):
        message = "Debug[Confirm Order] - " + str(orderId)
        confirmOrder(self.rawMatOrders, orderId, message)

    # Raw Material Orders --!>

    # Product/Sales Orders <!--

    def placeProductionOrder(self, productName, cost, quantity, duration, customerName, deliveryAddress, orderDate):
        order = SalesOrder()
        order.setOrder(productName, cost, quantity, nextOrderId(self.salesOrders), duration, customerName,
                       deliveryAddress, orderDate)
        self.salesOrders.append(order)

    def confirmProductionOrder(self, orderId):
        message = "Debug[Production Order Confirmed] - " + str(orderId)
        confirmOrder(self.salesOrders, orderId, message)

    def restockCompletedProductOrders(self):
        for productionOrder in self.salesOrders:
            orderNotCollected = not productionOrder.isCompleted()
            if (productionOrder.getProgress()) >= 100 and orderNotCollected:
                productName, productQty = productionOrder.collect()

    def addProduct(self, name, costPerUnit, materialNames, materialQtys, productionTime):
        product = Product(name, costPerUnit, materialNames, materialQtys, productionTime)
        self.productTypes.append(product)
        self.productQuantities.append(0)

    def hasProduct(self, productName):
        for product in self.productTypes:
            if product.getName().lower() == productName.lower():
                return True
        return False

    # Product/Sales Orders --!>

    # Getter Setter Methods <!--

    def getRawMatNames(self):
        return self.__rawMatNames

    def getRawMatQtys(self):
        return self.__rawMatQuantities

    def getRawMatOrders(self):
        return self.rawMatOrders

    def getProductTypes(self):
        return self.productTypes

    # Getter Setter Methods  --!>

    """
    ====================================================================================================================
    """

    def getDataOfList(self, objList):
        arr = []
        for obj in objList:
            arr.append(obj.getAllData())
        return arr

    def getAllData(self):
        rawOrderData = self.getDataOfList(self.rawMatOrders)
        prodTypeData = self.getDataOfList(self.productTypes)
        salesOrderData = self.getDataOfList(self.salesOrders)

        return [self.productQuantities , self.__rawMatNames , self.__rawMatQuantities , rawOrderData, salesOrderData,prodTypeData]

    def setAllData(self, stockData):
        self.productQuantities = stockData[0]
        self.__rawMatNames = stockData[1]
        self.__rawMatQuantities = stockData[2]

        self.rawMatOrders = []
        for orderData in stockData[3]:
            self.rawMatOrders.append( RawMatOrder().setAllData(orderData) )
        self.salesOrders = []
        for orderData in stockData[4]:
            self.salesOrders.append( SalesOrder().setAllData(orderData) )
        self.productTypes = []
        for orderData in stockData[5]:
            self.productTypes.append( Product(0,0,0,0,0).setAllData(orderData) )

