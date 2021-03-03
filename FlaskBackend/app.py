from flask import Flask

app = Flask(__name__)


@app.route('/hello', methods=["GET"])
def hello_world():
    return {
        'Status': 'Accessed'
    }


@app.route('/send <data>')
def display(data):
    print(data)
    return "Recieved data : " + data




if __name__ == '__main__':
    app.run()
