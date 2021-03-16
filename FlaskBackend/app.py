from flask import Flask, jsonify, request
from flask_cors import CORS
from main import Main

app = Flask(__name__)
CORS(app)

main = Main()


@app.route("/")
def helloWorld():
    return jsonify(message="ree")


@app.route("/enter", methods=["POST"])
def sendPoRequest():
    data = request.get_data().decode('utf-8')
    data = data.split(",")
    response = main.addPoRequest(data[0], data[1], data[2], data[3])
    return jsonify(response)

@app.route("/getPoData" , methods=["GET"])
def getPoTableData():
    testRecord = {"mname": "Banana",
                  "vname":"Wickramasinhe",
                  "mqty":"15",
                  "mprice":"2"}
    return jsonify([testRecord])



"""
CONTACT SENESH ABOUT THIS CONNECION SEGMENT BECAUSE ILL HAVE TO RETURN ERROR MESSAGES WHICH HE WILL HAVE TO RESPOND TO 
IN THE FRONTEND
"""

if __name__ == '__main__':
    app.run(debug=True)
