from flask import Flask, jsonify, request
from flask_cors import CORS
from main import Main
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
    response = main.addPoRequest(data[0], data[1], data[2])
    return jsonify(response)


@app.route("/getPoData", methods=["GET"])
def getPoTableData():
    dictList = []
    orders = main.getPoData()
    for order in orders:
        orderDict = main.getLabeledDict(["mname", "vname", "mqty", "mprice" , "orderid" , "totalMatPrice"],
                                        [order.getMatName(), order.getSupplierName(), order.getMatQty(),
                                         order.getUnitCost() , order.getId() , order.getTotalCost() ])
        dictList.append(orderDict)
    return jsonify(dictList)


# Product Requisition table holds the data with the CONFIRMED product orders
@app.route("/getPrData", methods=["GET"])
def getPrData():
    dictList = []
    orders = main.getPrData()
    for order in orders:
        orderDict = main.getLabeledDict(["mnamepr", "vnamepr", "mqtypr", "mpricepr" , "orderid" , "totalMatPrice"],
                                        [order.getMatName(), order.getSupplierName(), order.getMatQty(),
                                         order.getUnitCost()  , order.getId() , order.getTotalCost() ])
        dictList.append(orderDict)
    return jsonify(dictList)


@app.route("/createSupplier", methods=["POST"])
def createSuppler():
    data = request.get_data().decode('utf-8')
    data = data.split(",")
    print("CREATE SUPPLIER DATA AT FLASK - " , data)
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


"""
CONTACT SENESH ABOUT THIS CONNECION SEGMENT BECAUSE ILL HAVE TO RETURN ERROR MESSAGES WHICH HE WILL HAVE TO RESPOND TO 
IN THE FRONTEND
"""

if __name__ == '__main__':
    app.run(debug=True)
