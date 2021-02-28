class Intersection:

    __inputRoads = []
    __outputRoads = []

    def __init__(self , id):
        self.__ID = id

    def addInputRoad(self , street):
        self.__inputRoads.append(street)

    def addOutputRoad(self , street):
        self.__outputRoads.append(street)

    def toString(self):
        return [self.__ID ,self.__inputRoads , self.__outputRoads]




