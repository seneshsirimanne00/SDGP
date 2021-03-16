class Supplier:
    # List of materials a single supplier could provide since some suppliers may provide more than one material
    materials = []
    material_pricePerUnit = []
    description = ""

    def __init__(self, id, supplierName, deliveryTime):
        self.id = id
        self.supplierName = supplierName
        self.deliveryTime = deliveryTime

    def setDescription(self , desc):
        self.description = desc

    def addMaterial(self, name, price):
        self.materials.append(name)
        self.material_pricePerUnit.append(price)

    def getDeliveryTime(self):
        return self.deliveryTime

    def getId(self):
        return self.id

    def getName(self):
        return self.supplierName

    def getMaterials(self):
        return self.materials

    def getMatPrices(self):
        return self.material_pricePerUnit

    def doesSell(self, matName):
        for mat in self.materials:
            if mat.lower() == matName.lower():
                return True
        return False

    """
    ====================================================================================================================
    """

    def getAllData(self):
        return [self.materials, self.material_pricePerUnit, self.id, self.supplierName, self.deliveryTime , self.description]

    def setAllData(self, data):
        self.materials = data[0]
        self.material_pricePerUnit = data[1]
        self.id = data[2]
        self.supplierName = data[3]
        self.deliveryTime = data[4]
        self.description = data[5]

    def __str__(self):
        return "Supplier[ ID:" + self.id + " name:" + self.supplierName + " deliveryTime" + self.deliveryTime + " ]"
