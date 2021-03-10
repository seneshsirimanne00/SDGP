from order import Order


class Stock:
    __productList = []
    __quantityList = []
    __rawMatNames = []
    __rawMatQuantities = []

    rawMatOrderId = 0 #Tracking the last used ID for rawMaterialOrders
    rawMatOrders = []  # List of Order objects

    def __init__(self):
        self.rawMatOrderId = 0

    def addProduct(self, name, amount):
        self.__productList.append(name)
        self.__quantityList.append(amount)
        print("Debug AddProduct :" + name + " Amount :" + str(amount))
        return

    def removeProduct(self, name):
        if name in self.__productList:
            targetIndex = self.__productList.index(name)
            print("Deubg - productList " + self.__productList[targetIndex] + " Removed")
            print("Deubg - quantityList " + str(self.__quantityList[targetIndex]) + " Removed")
            self.__productList.remove(targetIndex)
            self.__quantityList.remove(targetIndex)

    def restockProduct(self, name, amount):
        # Returns True if item is found and updated , else False

        if name in self.__productList:
            targetIndex = self.__productList.index(name)
            self.__quantityList[targetIndex] += amount
            print("Debug - Restocked " + name + " by " + str(amount))
            return True
        else:
            return False

    def getProductList(self):
        return self.__productList

    def getQuantityList(self):
        return self.__quantityList

    def addRawMat(self, name, quantity):
        self.__rawMatNames.append(name)
        self.__rawMatQuantities.append(quantity)

    def restockRawMat(self, name, amount):
        self.__rawMatQuantities[self.__rawMatNames.index(name)] += amount
        return

    def reduceRawMat(self, name, amount):
        if self.__rawMatQuantities[self.__rawMatNames.index(name)] >= amount:
            self.__rawMatQuantities[self.__rawMatNames.index(name)] -= amount
            return True
        else:
            return False

    # Order is placed but one must use an admin account to confirm it
    def placeRawMatOrder(self, materialName, orderDuration, materialQuantity, price, supplierName):
        newOrder = Order()
        newOrder.setRawMatOrder(materialName, orderDuration, materialQuantity, price, self.rawMatOrderId, supplierName)
        self.rawMatOrderId += 1
        self.rawMatOrders.append(newOrder)

    # View Raw Mat in console
    def viewRawMatOrders(self):
        for order in self.rawMatOrders:
            print(str(order))

    # Orders should be confirmed only by admin accounts
    def confirmRawMatOrder(self, id):
        for eachOrder in self.rawMatOrders:
            if eachOrder.getId() == int(id):
                eachOrder.confirmOrder()
                return

    """
    ====================================================================================================================
    """

    def getAllData(self):
        orderDataList = []
        for order in self.rawMatOrders:
            orderDataList.append(order.getAllData())

        return [self.__productList, self.__quantityList, self.__rawMatNames, self.__rawMatQuantities,
                self.rawMatOrderId , orderDataList]

    def setAllData(self, stockData):
        self.__productList = stockData[0]
        self.__quantityList = stockData[1]
        self.__rawMatNames = stockData[2]
        self.__rawMatQuantities = stockData[3]
        self.rawMatOrderId = stockData[4]

        self.rawMatOrders = []
        for orderData in stockData[5]:
            order = Order()
            order.setAllData(orderData)
            self.rawMatOrders.append(order)
