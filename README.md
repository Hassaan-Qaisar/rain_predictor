# Rain Predictor

## Table of Contents

- [Introduction](#introduction)
- [Project Structure](#project-structure)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributors](#contributors)

## Introduction

The Rain Predictor project consists of two machine learning models: one for binary classification to predict if it will rain tomorrow, and another for time series analysis on a weather dataset. This project also includes a Flask API server and a React frontend for user interaction.

## Project Structure

The repository is organized into the following folders:

- `codes-plus-dataset`: Contains the Jupyter notebook for the rain predictor and the dataset in CSV format.
- `server`: Contains the Flask API server for the rain predictor model.
- `time-series-analysis`: Contains the Jupyter notebook for weather forecasting using time series analysis and the dataset in CSV format.
- `weather-forecast`: Contains the React frontend where users can enter inputs to get the rain prediction for tomorrow.

## Features

- Binary classification model to predict if it will rain tomorrow.
- Time series analysis for weather forecasting.
- Flask API server to serve the rain prediction model.
- React frontend for user interaction.

## Installation

To get started with the project, follow these steps:

### Backend Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/Hassaan-Qaisar/rain_predictor
    cd rain_predictor
    ```

2. Setup the Flask API server:
    ```bash
    cd server
    python3 -m venv venv
    source venv/bin/activate  # On Windows use `venv\Scripts\activate`
    pip install -r requirements.txt
    python app.py
    ```

### Frontend Setup

1. Install dependencies and start the React frontend:
    ```bash
    cd ../weather-forecast
    npm install
    npm start
    ```

## Usage

### Rain Predictor Model

To explore the rain predictor model, open the Jupyter notebook in the `codes-plus-dataset` directory:

```bash
cd codes-plus-dataset
jupyter notebook rain_prediction_with_feature_scaling.ipynb
```

### Time Series Analysis

To explore the time series analysis, open the Jupyter notebook in the `time-series-analysis` directory:

```bash
cd time-series-analysis
jupyter notebook weather_forecast.ipynb
```

## Contributors
Hassaan Qaisar
Jamal Ahmed Khan
