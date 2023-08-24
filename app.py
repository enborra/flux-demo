from flask import Flask
from flask import send_from_directory


app = Flask(__name__)


@app.route('/')
def index():
	return 'tada.'

@app.route('/widgets/<path:path>')
def send_static(path):
	return send_from_directory('static', path)