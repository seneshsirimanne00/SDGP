from flask import Flask, jsonify, request
from flask_cors import CORS
from main import Main
import time
from supplier import Supplier

app = Flask(__name__)
CORS(app)

main = Main()


@app.route("/")
def helloWorld():
    return jsonify(message="ree")


@app.route("/addPoRequest", methods=["POST"])
def addPoRequest():
    data = request.get_data().decode('utf-8')
    data = data.split(",")
    print("Browser Passed PO Data : ", data)
    response = main.addPoRequest(data[0], data[1], data[2])
    return jsonify(response)


@app.route("/getPoData", methods=["GET"])
def getPoTableData():
    dictList = []
    orders = main.getPoData()
    for order in orders:
        orderDict = main.getLabeledDict(["mname", "vname", "mqty", "mprice", "orderid", "totalMatPrice"],
                                        [order.getItemName(), order.getSupplierName(), order.getQuantity(),
                                         order.getUnitCost(), order.getId(), order.getTotalCost()])
        dictList.append(orderDict)
    return jsonify(dictList)


# Product Requisition table holds the data with the CONFIRMED product orders
@app.route("/getPrData", methods=["GET"])
def getPrData():
    dictList = []
    orders = main.getPrData()
    for order in orders:
        orderDict = main.getLabeledDict(["mnamepr", "vnamepr", "mqtypr", "mpricepr", "orderid", "totalMatPrice"],
                                        [order.getItemName(), order.getSupplierName(), order.getQuantity(),
                                         order.getUnitCost(), order.getId(), order.getTotalCost()])
        dictList.append(orderDict)
    return jsonify(dictList)


@app.route("/createSupplier", methods=["POST"])
def createSuppler():
    data = request.get_data().decode('utf-8')
    data = data.split(",")
    print("CREATE SUPPLIER DATA AT FLASK - ", data)
    # Suppliername , matName , orderTime , unitPrice
    returnMsg = main.createSupplier(data[0], data[1], data[2], data[3])
    print("Debug[Flask] - CreateSupplier ", data, returnMsg)
    return jsonify(returnMsg)


@app.route("/getSupplierInfoTableData", methods=["GET"])
def getSupplierInfoTableData():
    suppliers = main.getSuppliersInfo()
    supplierDictArr = []
    for supplier in suppliers:
        supDict = main.getLabeledDict(["sname", "mname", "avgOtime", "mUp"],
                                      [supplier.getName(), str(supplier.getMaterials()), supplier.getDeliveryTime(),
                                       str(supplier.material_pricePerUnit)])
        supplierDictArr.append(supDict)
    return jsonify(supplierDictArr)


@app.route("/saveData", methods=["GET", "POST"])
def saveDb():
    main.save();
    return jsonify("Database Saved")


@app.route("/confirmPO", methods=["POST"])
def confirmPO():
    orderId = request.get_data().decode('utf-8')
    main.confirmPoOrder(int(orderId))
    return jsonify("Confirmed PO")


@app.route("/getMonitorRSMTableData", methods=["GET"])
def getStockData():
    # This is used for stock table which requires only item names and quantities
    stock = main.getStockData()
    rawMatNames = stock.getRawMatNames()
    matQtys = stock.getRawMatQtys()

    dictArray = []
    for x in range(len(rawMatNames)):
        stockDict = main.getLabeledDict(["mname", "qty"], [rawMatNames[x], matQtys[x]])
        dictArray.append(stockDict)

    print("Stock Data : ", dictArray)
    return jsonify(dictArray)


@app.route("/createNewProduct", methods=["POST"])
def createNewProduct():
    data = request.get_data().decode('utf-8')
    print("newProductData",data)
    data = data.split(",")
    # prodName  , rawMatNames , productionTime , rawMatQuantities
    matNames = data[1].split("!")
    matQtys = data[3].split("!")
    if len(matNames) != len(matQtys):
        print("For each mat a quantity must be provided!")
        return jsonify("For each mat a quantity must be provided!")
    main.addProduct(data[0], matNames, matQtys, data[2])
    return jsonify("Product Created : " + str(data[0]))


@app.route("/getProductInfoTableData", methods=["GET"])
def getProductInfoTable():
    productTypes = main.getStock().getProductTypes()
    dictArr = []
    for type in productTypes:
        productTypeDict = main.getLabeledDict(["pname", "rmaterials", "rmqty", "ptime","unitCost"],
                                              [type.getName(), type.getRawMatNames(), type.getRawMatQtys(),
                                               type.getProdTime() , type.getCost()])
        dictArr.append(productTypeDict)
    print(dictArr)
    return jsonify(dictArr)


@app.route("/getandsendlinegraphXData", methods=["POST"])
def getLineGraphXData():
    name = request.get_data().decode('utf-8')
    prediction = main.getProductPrediction(name)
    print("Name: ",name)
    if prediction is None:
        return jsonify([])  # Returns Empty Arrray
    return jsonify(prediction.getPredictionDates())


@app.route("/getandsendlinegraphyData", methods=["POST"])
def getlinegraphYData():
    name = request.get_data().decode('utf-8')
    prediction = main.getProductPrediction(name)
    print("PREDICION : ", prediction)
    if prediction is None:
        return jsonify([])  # Returns Empty Arrray
    print("PREDICTION AMOUNts",prediction.getPrediction_amounts())
    return jsonify(prediction.getPrediction_amounts())


@app.route("/runProductPrediction")
def runProductPrediction():
    main.getStock().runProductPredictions()
    return jsonify("Prediction Run")

@app.route("/sendCsvData" , methods=["POST"])
def sendCSV():
    data = request.get_json()
    print(data)
    listOfRecords = []
    for record in data:
        line = [] #Date , store , item , sales
        line.append(record["date"])
        line.append(int(record["store"]))
        line.append(int(record["item"]))
        line.append(int(record["sales"]))
        listOfRecords.append(line)
    main.addCsvData(listOfRecords)
    return jsonify("yeetus")


@app.route("/OrderStatuspercentagedata" , methods=["POST"])
def getRawOrderStatus():
    data = request.get_data().decode('utf-8')
    orderIndex = int(data)
    time.sleep(0.5)
    return jsonify(main.getRawOrderPercent(orderIndex))

@app.route("/getOrderStatusTableData" , methods=["GET"])
def getRawOrderStatusTable():
    orders = main.getIncompleteRawOrders()
    tableData = []
    for order in orders:
        orderCol = main.getLabeledDict(["mname", "oid", "qty"],[order.getItemName(), order.getId(), order.getQuantity()])
        tableData.append(orderCol)
    return jsonify(tableData)



"""
CONTACT SENESH ABOUT THIS CONNECION SEGMENT BECAUSE ILL HAVE TO RETURN ERROR MESSAGES WHICH HE WILL HAVE TO RESPOND TO 
IN THE FRONTEND
"""

if __name__ == '__main__':
    app.run(debug=True)
