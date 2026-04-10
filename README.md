# 📚 StudyMeter AI

> Predict your exam performance based on your weekly study hours using Machine Learning.

**StudyMeter AI** is a beginner-friendly yet practical Machine Learning project that predicts a student's **final exam marks** based on their **weekly study hours** using **Linear Regression**.

It showcases how real-world data can be transformed into meaningful insights and predictions using simple ML techniques.

---

## 🚀 Project Overview

Many students often wonder:

> *“If I study more, will my marks actually improve?”*

This project answers that question using **data-driven analysis**.

The model is trained on a dataset containing students' study hours and their corresponding exam scores. It learns the relationship between effort and performance, allowing users to input their own study hours and receive an estimated score.

---

## 🧠 Machine Learning Approach

**Algorithm Used:** Linear Regression  

### 📌 Variables

- **Independent Variable (X):** Study Hours per Week  
- **Dependent Variable (y):** Final Exam Marks  

The model fits a **best-fit regression line** to the dataset and uses it to predict outcomes for new inputs.

---

## 📊 Key Features

- 📈 Train a Linear Regression model  
- 🔍 Predict marks based on study hours  
- 📊 Evaluate model using standard ML metrics  
- 🖥️ Visualize data with regression graph  
- 🎯 Highlight user prediction on the chart  
- ⚡ Fast and simple prediction logic  

---

## 📈 Model Evaluation Metrics

The model is evaluated using:

- **MAE (Mean Absolute Error)** – Measures average prediction error  
- **MSE (Mean Squared Error)** – Penalizes larger errors more heavily  
- **RMSE (Root Mean Squared Error)** – Standard deviation of prediction errors  
- **R² Score** – Indicates how well the model fits the data  

> ✅ The model achieves an **R² score of ~0.93**, indicating a strong correlation between study hours and exam performance.

---

## 📊 Visualization

The generated graph includes:

- 🔵 Actual student data points  
- 📈 Regression line (model prediction)  
- ❌ Highlighted user prediction  

This visualization helps users clearly understand how study time impacts performance.

---

## ⚙️ Installation & Setup

```bash
git clone https://github.com/your-username/studymeter-ai.git
cd studymeter-ai
pip install pandas numpy matplotlib scikit-learn
