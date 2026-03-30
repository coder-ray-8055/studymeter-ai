import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_absolute_error, mean_squared_error, r2_score
import matplotlib.pyplot as plt

data = pd.read_csv("studymeter_dataset.csv")

X = data[["Study_Hours_per_Week"]]
y = data[["Final_Marks"]]

model = LinearRegression()
model.fit(X,y)
predicted_score = model.predict(X)


mae = mean_absolute_error(y, predicted_score)
mse = mean_squared_error(y, predicted_score)
rmse = np.sqrt(mse)
r2 = r2_score(y, predicted_score)

print("mean absolute error: ", round(mae, 2))
print("mean squared error: ", round(mse, 2))
print("root mean squared error: ", round(rmse, 2))
print("R^2 score: ", round(r2, 4))

new_pred = float(input("Enter how many hours you stydied: "))
predicted_new_score = round(model.predict([[new_pred]])[0][0], 2)

print(f"Based on your {new_pred} Hours of study, you are like to get {predicted_new_score} marks")
print("This is only a predicted data your efforts can change your results...Hardwork is the key")

X_sorted = X.sort_values(by="Study_Hours_per_Week")
y_pred_sorted = model.predict(X_sorted)
plt.scatter(X, y)  # actual data
plt.plot(X_sorted, y_pred_sorted)

# Highlight user prediction
plt.scatter(new_pred, predicted_new_score, marker='x', s=100)

plt.xlabel("Study Hours per Week")
plt.ylabel("Final Marks")
plt.title("Study Hours vs Final Marks Prediction")

plt.show()