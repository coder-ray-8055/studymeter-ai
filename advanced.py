from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
import numpy as np
import pickle
import os
from sklearn.linear_model import LinearRegression

app = Flask(__name__)
CORS(app)

if os.path.exists("model.pkl"):
    model = pickle.load(open("model.pkl", "rb"))
    print("Model loaded ✅")
else:
    print("Training model...")

    data = pd.read_csv("studymeter_dataset.csv")

    X = data[["Study_Hours_per_Week"]]
    y = data["Final_Marks"]

    model = LinearRegression()
    model.fit(X, y)

    pickle.dump(model, open("model.pkl", "wb"))
    print("Model trained & saved ✅")

@app.route("/predict", methods=["POST"])
def predict():
    try:
        data = request.json
        hours = float(data["hours"])

        prediction = model.predict(np.array([[hours]]))[0]

        return jsonify({
            "marks": round(float(prediction), 2)
        })

    except Exception as e:
        return jsonify({
            "error": str(e)
        })

if __name__ == "__main__":
    app.run(debug=True)
