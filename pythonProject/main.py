from intersection import Intersection

def loadFile(fileName):
    file = open(fileName, "r")
    data = []
    for line in file:
        data.append(line[0:-1])
    return data

#simTime , intersections , streets , cars , score   <-- Base details
def seperateData(data):
    baseDetails = data.pop(0)

    streetCount = baseDetails.split(" ")[2]
    streets = data[0 : int(streetCount)]

    carCount = baseDetails.split(" ")[3]
    cars = data[int(streetCount) :int(streetCount) + int(carCount)]

    return baseDetails , streets , cars


def createIntersections(basedetails):
    intersectionObjs = []
    for x in range(int(basedetails.split()[1])):
        intersectionObjs.append( Intersection(x) )
    return intersectionObjs


def createStreets(streetData):
    pass


def connectIntersections(intersectionsObj , streets):
    pass


def getAvgRoads(streets , baseDetails):
    total = 0
    for street in streets:
        total += int(street.split()[1])
    average = total / int(baseDetails[3])
    return average


data = seperateData(loadFile("a.txt"))

intersections = createIntersections(data[0])


streetObjs = createStreets(data[1])

print(data[0])
avgRoads =  getAvgRoads(data[1] , data[0])

belowAvgRoads = []
for street in data[2]:
    if(int(street.split(" ")[0])  <= avgRoads):
        for x in street.split(" ")[1:]:
            belowAvgRoads.append(x)

print(belowAvgRoads)




connectIntersections(intersections , data[1])


#Get average roads a car would take
#get the cars that are below average road count along with the names of the roads
#get the cars traveling in those roads
#find end intersection and give it more time


