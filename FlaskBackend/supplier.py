class Supplier:
    # List of materials a single supplier could provide since some suppliers may provide more than one material
    materials = []
    material_pricePerUnit = []

    def __init__(self, id, supplierName, deliveryTime):
        self.id = id
        self.supplierName = supplierName
        self.deliveryTime = deliveryTime

    def addMaterial(self, name, price):
        self.materials.append(name)
        self.material_pricePerUnit.append(price)

    def getId(self):
        return self.id

    def getName(self):
        return self.supplierName

    def getMaterials(self):
        return self.materials

    def getMatPrices(self):
        return self.material_pricePerUnit

    """
    ====================================================================================================================
    """

    def getAllData(self):
        return [self.materials, self.material_pricePerUnit, self.id, self.supplierName, self.deliveryTime]

    def setAllData(self, data):
        self.materials = data[0]
        self.material_pricePerUnit = data[1]
        self.id = data[2]
        self.supplierName = data[3]
        self.deliveryTime = data[4]

    def __str__(self):
        return "Supplier[ ID:" + self.id + " name:" + self.supplierName + " deliveryTime" + self.deliveryTime + " ]"
