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
    return jsonify("HELLO")


if __name__ == '__main__':
    app.run(debug=True)

