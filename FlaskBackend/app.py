from flask import Flask, jsonify, request
from flask_cors import CORS
from main import Main
import time

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
    main.save()
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

    print("RawmatName : ", rawMatNames, " / rawMatQtys : ", matQtys)
    dictArray = []
    for x in range(len(rawMatNames)):
        stockDict = main.getLabeledDict(["mname", "qty"], [rawMatNames[x], matQtys[x]])
        dictArray.append(stockDict)

    print("Stock Data : ", dictArray)
    return jsonify(dictArray)


@app.route("/createNewProduct", methods=["POST"])
def createNewProduct():
    data = request.get_data().decode('utf-8')
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
        productTypeDict = main.getLabeledDict(["pname", "rmaterials", "rmqty", "ptime", "unitCost"],
                                              [type.getName(), type.getRawMatNames(), type.getRawMatQtys(),
                                               type.getProdTime(), type.getCost()])
        dictArr.append(productTypeDict)
    print(dictArr)
    return jsonify(dictArr)


@app.route("/getandsendlinegraphXData", methods=["POST"])
def getLineGraphXData():
    name = request.get_data().decode('utf-8')
    prediction = main.getProductPrediction(name)
    print("Name: ", name)
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
    print("PREDICTION AMOUNts", prediction.getPrediction_amounts())
    return jsonify(prediction.getPrediction_amounts())


@app.route("/sendCsvData", methods=["POST"])
def sendCSV():
    data = request.get_json()
    print("CSV Data Received")
    listOfRecords = []
    for record in data:
        line = []  # Date , store , item , sales
        line.append(record["date"])
        line.append(int(record["store"]))
        line.append(int(record["item"]))
        line.append(int(record["sales"]))
        listOfRecords.append(line)
    main.addCsvData(listOfRecords)
    return jsonify("CSV Sent")


@app.route("/OrderStatuspercentagedata", methods=["POST"])
def getRawOrderStatus():
    data = request.get_data().decode('utf-8')
    orderIndex = int(data)
    time.sleep(0.5)
    return jsonify(main.getRawOrderPercent(orderIndex))


@app.route("/getOrderStatusTableData", methods=["GET"])
def getRawOrderStatusTable():
    orders = main.getIncompleteRawOrders()
    tableData = []
    for order in orders:
        orderCol = main.getLabeledDict(["mname", "oid", "qty"],
                                       [order.getItemName(), order.getId(), order.getQuantity()])
        tableData.append(orderCol)
    return jsonify(tableData)


@app.route("/createNewSalesOrder", methods=["POST"])
def createNewSalesOrder():
    data = request.get_data().decode('utf-8')
    print(data)
    data = data.split(",")

    # customername / productname / deliveryaddress / qty / orderdate
    custName, prodName, address, qty, orderDate = data[0], data[1], data[2], data[3], data[4]

    if main.getStock().hasProduct(prodName):
        print("[DEBUG] - Product Exists , Adding")
    else:
        print("[DEBUG] - Product does not exist , skipping")
        return jsonify("Invalid Product")
    productOBJ = main.getStock().getProduct(prodName)

    main.getStock().placeProductionOrder(productOBJ.getName(), productOBJ.getCost(), int(qty), productOBJ.getProdTime(),
                                         custName.capitalize(), address, orderDate)
    return jsonify("Product Added")


@app.route("/getSalesOrderTableData", methods=["GET"])
def getSalesOrderTableData():
    orders = main.getStock().getProductionOrders()
    allData = []
    for order in orders:
        col = main.getLabeledDict(["cname", "pname", "qty", "daddress", "oid", "odate", "adtime", "totalCost"],
                                  [order.getCustomerName(), order.getItemName(), order.getQuantity(),
                                   order.getAddress(), order.getId(), order.getOrderDate(), order.getDuration(),
                                   order.getTotalCost()])
        allData.append(col)
    return jsonify(allData)


@app.route("/confirmSalesOrder", methods=["POST"])
def confirmSalesOrder():
    data = request.get_data().decode('utf-8')
    data = int(data)

    return jsonify("NOTHING")


@app.route("/predictAll", methods=["GET"])
def predictAllProducts():
    main.getStock().runProductPredictions()
    return jsonify("All product predictions up to date")


@app.route("/getbargraphXData", methods=["POST"])
def getBarGraphXData():
    productName = request.get_data().decode('utf-8')
    if not main.getStock().hasProduct(productName):
        return jsonify([])
    productObj = main.getStock().getProduct(productName)
    print("BarGraphXData : ", productObj.getRawMatNames())
    return jsonify(productObj.getRawMatNames())


@app.route("/getbargraphYData", methods=["POST"])
def getBarGraphYData():
    productName = request.get_data().decode('utf-8')
    if not main.getStock().hasProduct(productName):
        return jsonify([])
    # Product obj has data oh how many materials each item needs
    productQtys = main.getStock().getProduct(productName).getRawMatQtys()
    # ProdPredictions has data of how many items will be sold
    prodPredictions = main.getProductPrediction(productName)

    nextMonthPredictions = prodPredictions.getPrediction_amounts()
    if len(nextMonthPredictions) == 0:
        # Product has not recieved it's initial prediction yet
        return jsonify([])

    nextMonth = int(nextMonthPredictions[0])

    totalQtys = []
    for x in range(len(productQtys)):
        totalQtys.append(int(productQtys[x]) * nextMonth)
    return jsonify(totalQtys)


@app.route("/getIMReportData", methods=["GET"])
def getIMReportData():
    allData = []
    orders = main.getStock().getRawMatOrders()
    for order in orders:
        col = main.getLabeledDict(["mname", "mid", "qty", "vendorName"],
                                  [order.getItemName(), order.getId(), order.getQuantity(),
                                   order.getSupplierName()])
        allData.append(col)
    return jsonify(allData)


@app.route("/getRMSReportData", methods=["GET"])
def getRMSReportData():
    allData = []
    orders = main.getStock().getRawMatOrders()
    for order in orders:
        if (not order.isCompleted()) and order.isConfirmed():
            col = main.getLabeledDict(["mname", "mid", "vname", "mqty"],
                                      [order.getItemName(), order.getId(), order.getSupplierName(),
                                       order.getQuantity()])
            allData.append(col)
    return jsonify(allData)


@app.route("/getSalesForecastReportData", methods=["GET"])
def getSalesForecastReportData():
    main.getStock().displayProductTypes()
    # allData = []
    # prodTypes = main.getStock().getProductTypes()
    # for order in prodTypes:
    #     col = main.getLabeledDict(["pname", "pid", "pqty", "thisMonth", "nextMonthPredicted"],
    #                               [order.getName(), order.getId(), order.getSupplierName(),
    #                                order.getQuantity()])
    #     allData.append(col)
    return jsonify([])


"""
CONTACT SENESH ABOUT THIS CONNECION SEGMENT BECAUSE ILL HAVE TO RETURN ERROR MESSAGES WHICH HE WILL HAVE TO RESPOND TO 
IN THE FRONTEND
"""

if __name__ == '__main__':
    app.run(debug=True)
