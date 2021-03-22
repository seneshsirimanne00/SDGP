from rawMatOrder import RawMatOrder


class Stock:

    def __init__(self):
        self.__productList = []
        self.__quantityList = []
        self.__rawMatNames = []
        self.__rawMatQuantities = []

        self.rawMatOrders = []  # List of Order objects
        self.productionOrders = []  # Product Orders

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

    # Helper Methods <!--

    def nextRawMatId(self):
        biggest = 0
        for order in self.rawMatOrders:
            if order.getId() > biggest:
                biggest = order.getId
        return biggest + 1

    # Helper Methods --!>

    # Raw Material Orders <!---

    # Checks all the orders made and if any order progress==100 but not set to completed, those orders will be used
    # to restock and will then be set to complete because its fully complete when order is collected
    def restockCompletedOrders(self):
        for order in self.rawMatOrders:
            orderNotCollected = not order.isCompleted()
            if (order.getProgress()) >= 100 and orderNotCollected:
                rawMatName, matQty = order.collect()
                self.addOrRestock(rawMatName, matQty)
                print("Debug[Restock Completed] - ", rawMatName, matQty)

    # Order is placed but one must use an admin account to confirm it
    def placeRawMatOrder(self, materialName, orderDuration, materialQuantity, price, supplierName):
        newOrder = RawMatOrder()
        newOrder.setOrder(materialName, price, materialQuantity, supplierName, orderDuration, self.nextRawMatId())
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
                eachOrder.confirm()
                print("Debug[Confirm Order]-", id)

    # Raw Material Orders --!>

    # Product Orders <!--



    # Product Orders --!>

    # Getter Setter Methods <!--

    def getRawMatNames(self):
        return self.__rawMatNames

    def getRawMatQtys(self):
        return self.__rawMatQuantities

    def getRawMatOrders(self):
        return self.rawMatOrders

    def getProductList(self):
        return self.__productList

    def getQuantityList(self):
        return self.__quantityList

    # Getter Setter Methods  --!>

    """
    ====================================================================================================================
    """

    def getAllData(self):
        orderDataList = []
        for order in self.rawMatOrders:
            orderDataList.append(order.getAllData())

        return [self.__productList, self.__quantityList, self.__rawMatNames, self.__rawMatQuantities, orderDataList]

    def setAllData(self, stockData):
        self.__productList = stockData[0]
        self.__quantityList = stockData[1]
        self.__rawMatNames = stockData[2]
        self.__rawMatQuantities = stockData[3]

        self.rawMatOrders = []
        for orderData in stockData[4]:
            order = RawMatOrder()
            order.setAllData(orderData)
            self.rawMatOrders.append(order)
