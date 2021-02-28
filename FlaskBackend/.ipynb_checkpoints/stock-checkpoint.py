import product


class Stock:
    __productList = []
    __quantityList = []
    __rawMatNames = []
    __rawMatQuantities = []

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
