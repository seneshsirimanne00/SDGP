from order import Order


class Stock:

    def __init__(self):
        self.rawMatOrderId = 0

        self.__productList = []
        self.__quantityList = []
        self.__rawMatNames = []
        self.__rawMatQuantities = []

        self.rawMatOrderId = 0  # Tracking the last used ID for rawMaterialOrders
        self.rawMatOrders = []  # List of Order objects

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

    def getRawMatOrders(self):
        return self.rawMatOrders

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

    # Figures out if RawMat needs to be added(newly) to stock or Restocked
    def addOrRestock(self, name, amount):
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

    def getRawMatNames(self):
        return self.__rawMatNames

    def getRawMatQtys(self):
        return self.__rawMatQuantities

    # Checks all the orders made and if any order progress==100 but not set to completed, those orders will be used
    # to restock and will then be set to complete because its fully complete when order is collected
    def restockCompletedOrders(self):
        for order in self.rawMatOrders:
            if order.getProgress() >= 100:
                rawMatName, matQty = order.getMaterials()
                if rawMatName is not None:
                    self.addOrRestock(rawMatName, matQty)
                    print("Debug[Restock Completed] - ", rawMatName, matQty)

    # Order is placed but one must use an admin account to confirm it
    def placeRawMatOrder(self, materialName, orderDuration, materialQuantity, price, supplierName):
        newOrder = Order()
        newOrder.setRawMatOrder(materialName, orderDuration, materialQuantity, price, self.rawMatOrderId, supplierName)
        self.rawMatOrderId += 1
        self.rawMatOrders.append(newOrder)

    # View Raw Mat in console
    def viewRawMatOrders(self):
        print("Debug[viewRawMatOrders] : ", self.rawMatOrders)
        for order in self.rawMatOrders:
            print(str(order))

    # Orders should be confirmed only by admin accounts
    def confirmRawMatOrder(self, id):
        for eachOrder in self.rawMatOrders:
            if eachOrder.getId() == int(id):
                eachOrder.confirmOrder()
                print("Debug[Confirm Order]-", id)

    """
    ====================================================================================================================
    """

    def getAllData(self):
        orderDataList = []
        for order in self.rawMatOrders:
            orderDataList.append(order.getAllData())

        return [self.__productList, self.__quantityList, self.__rawMatNames, self.__rawMatQuantities,
                self.rawMatOrderId, orderDataList]

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
