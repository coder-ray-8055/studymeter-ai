# 📚 StudyMeter AI

> Predict your exam performance based on your weekly study hours using Machine Learning.

**StudyMeter AI** is a beginner-friendly Machine Learning project that predicts a student's **final exam marks** based on their **weekly study hours** using **Linear Regression**.

It demonstrates how real-world data can be used to uncover patterns and make meaningful predictions.

---

## 🚀 Project Overview

Many students often ask:

> *“If I study more, will my marks improve?”*

This project answers that question using **data-driven insights**.

The model is trained on a dataset containing students' study hours and their corresponding exam scores. It learns the relationship between effort and performance, allowing users to input their own study hours and get a predicted result.

---

## 🧠 Machine Learning Approach

**Algorithm Used:** Linear Regression  

### 📌 Variables

- **Independent Variable (X):** Study Hours per Week  
- **Dependent Variable (y):** Final Exam Marks  

The model fits a best-fit line to the data and uses it to make predictions.

---

## 📊 Key Features

- 📈 Train a Linear Regression model  
- 🔍 Predict marks based on study hours  
- 📊 Evaluate performance using standard ML metrics  
- 🖥️ Visualize data with regression graph  
- 🎯 Highlight user prediction on the chart  

---

## 📈 Model Evaluation Metrics

The model is evaluated using:

- **MAE (Mean Absolute Error)** – Average prediction error  
- **MSE (Mean Squared Error)** – Penalizes larger errors  
- **RMSE (Root Mean Squared Error)** – Standard deviation of errors  
- **R² Score** – Measures how well the model fits the data  

> The model achieves a strong R² score (~0.93), indicating a good fit.

---

## 📊 Visualization

The generated graph includes:

- 🔵 Actual student data points  
- 📈 Regression line (model prediction)  
- ❌ Highlighted user prediction  

This helps in understanding how study hours impact performance.

---

## ⚙️ Installation & Setup

```bash
git clone https://github.com/your-username/studymeter-ai.git
cd studymeter-ai
pip install pandas numpy matplotlib scikit-learn
