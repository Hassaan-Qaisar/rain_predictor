from flask import Flask, jsonify, request
from flask_cors import CORS
import joblib

app = Flask(__name__)
CORS(app)
model = joblib.load("catboost.pkl")

@app.route('/', methods=['GET'])
def home():
    return "Homepage"

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    inputs = [
        data['Location'], data['MinTemp'], data['MaxTemp'], data['Rainfall'], data['Evaporation'],
        data['Sunshine'], data['WindGustDir'], data['WindGustSpeed'], data['WindDir9am'], data['WindDir3pm'],
        data['WindSpeed9am'], data['WindSpeed3pm'], data['Humidity9am'], data['Humidity3pm'],
        data['Pressure9am'], data['Pressure3pm'], data['Cloud9am'], data['Cloud3pm'], data['Temp9am'],
        data['Temp3pm'], data['RainToday'], data['Date_month'], data['Date_day']
    ]
    pred = model.predict([inputs])
    return jsonify({'prediction': pred.tolist()})

if __name__ == "__main__":
    app.run()

