import React from "react";
import { useNavigate } from "react-router-dom";

export const Display = () => {
  const navigate = useNavigate();

  const goToRainPredictor = () => {
    navigate("/rain");
  };

  const goToWeatherForecasting = () => {
    navigate("/weather");
  };
  
  return (
    <div className="App">
      <section className="section">
        <img src="/rain.jpg" alt="Rain Predictor" />
        <h2>Rain Predictor</h2>
        <p>Click here to predict if it will rain tomorrow.</p>
        <button onClick={goToRainPredictor}>Go to Rain Predictor</button>
      </section>
      <section className="section">
        <img
          src="./weather.png"
          alt="Weather Forecasting"
          width="540"
          height="360"
        />
        <h2>Weather Forecasting</h2>
        <p>Click here to get weather forecasts for the upcoming days.</p>
        <button onClick={goToWeatherForecasting}>
          Go to Weather Forecasting
        </button>
      </section>
    </div>
  );
};
