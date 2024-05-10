import React, { useState } from "react";
import "./Rain.css";
import { RainTomorrow } from "./RainTomorrow";
import { NoRainTomorrow } from "./NoRainTomorrow";
import { useNavigate } from "react-router-dom";

export const Rain = () => {
  const navigate = useNavigate();

  const [location, setLocation] = useState(0);
  const [minTemp, setMinTemp] = useState(0);
  const [maxTemp, setMaxTemp] = useState(0);
  const [rainfall, setRainfall] = useState(0);
  const [evaporation, setEvaporation] = useState(0);
  const [sunshine, setSunshine] = useState(0);
  const [windGustDir, setWindGustDir] = useState(0.5);
  const [windGustSpeed, setWindGustSpeed] = useState(0);
  const [windDir9am, setWindDir9am] = useState(0.5);
  const [windDir3pm, setWindDir3pm] = useState(0.5);
  const [windSpeed9am, setWindSpeed9am] = useState(0);
  const [windSpeed3pm, setWindSpeed3pm] = useState(0);
  const [humidity9am, setHumidity9am] = useState(0);
  const [humidity3pm, setHumidity3pm] = useState(0);
  const [pressure9am, setPressure9am] = useState(0);
  const [pressure3pm, setPressure3pm] = useState(0);
  const [cloud9am, setCloud9am] = useState(0);
  const [cloud3pm, setCloud3pm] = useState(0);
  const [temp9am, setTemp9am] = useState(0);
  const [temp3pm, setTemp3pm] = useState(0);
  const [rainToday, setRainToday] = useState(1);
  const [date_month, setDate_month] = useState(0);
  const [date_day, setDate_day] = useState(0);
  const [date, setDate] = useState("");
  const [predictionResult, setPredictionResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const [year, month, day] = date.split("-");
    setDate_month(parseInt(month));
    setDate_day(parseInt(day));

    const inputs = {
      Location: parseFloat(location),
      MinTemp: parseFloat(minTemp),
      MaxTemp: parseFloat(maxTemp),
      Rainfall: parseFloat(rainfall),
      Evaporation: parseFloat(evaporation),
      Sunshine: parseFloat(sunshine),
      WindGustDir: parseInt(windGustDir),
      WindGustSpeed: parseFloat(windGustSpeed),
      WindDir9am: parseInt(windDir9am),
      WindDir3pm: parseInt(windDir3pm),
      WindSpeed9am: parseFloat(windSpeed9am),
      WindSpeed3pm: parseFloat(windSpeed3pm),
      Humidity9am: parseFloat(humidity9am),
      Humidity3pm: parseFloat(humidity3pm),
      Pressure9am: parseFloat(pressure9am),
      Pressure3pm: parseFloat(pressure3pm),
      Cloud9am: parseFloat(cloud9am),
      Cloud3pm: parseFloat(cloud3pm),
      Temp9am: parseFloat(temp9am),
      Temp3pm: parseFloat(temp3pm),
      RainToday: parseInt(rainToday),
      Date_month: date_month,
      Date_day: date_day,
    };

    console.log(inputs);

    fetch("http://127.0.0.1:5000/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputs),
    })
      .then((response) => response.json())
      .then((data) => {
        setPredictionResult(data.prediction[0]);
        console.log(data.prediction[0]);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    if (predictionResult === "True") {
      navigate("/rainTomorrow");
      setPredictionResult(null);
    }
    if (predictionResult === "False") {
      navigate("/noRainTomorrow");
      setPredictionResult(null);
    }
  };

  return (
    <div className="container">
      <h2 className="main-heading">Rain Predictor</h2>
      <form onSubmit={handleSubmit} className="rain-form">
        <div className="form-section">
          <label htmlFor="location">Location:</label>
          <select
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option>Select Location</option>
            <option value={1}>Portland</option>
            <option value={2}>Cairns</option>
            <option value={3}>Walpole</option>
            <option value={4}>Dartmoor</option>
            <option value={5}>MountGambier</option>
            <option value={6}>NorfolkIsland</option>
            <option value={7}>Albany</option>
            <option value={8}>Witchcliffe</option>
            <option value={9}>CoffsHarbour</option>
            <option value={10}>Sydney</option>
            <option value={11}>Darwin</option>
            <option value={12}>MountGinini</option>
            <option value={13}>NorahHead</option>
            <option value={14}>Ballarat</option>
            <option value={15}>GoldCoast</option>
            <option value={16}>Sydney Airport</option>
            <option value={17}>Hobart</option>
            <option value={18}>Watsonia</option>
            <option value={19}>Newcastle </option>
            <option value={20}>Wollongong</option>
            <option value={21}>Brisbane</option>
            <option value={22}>William Town</option>
            <option value={23}>Launceston</option>
            <option value={24}>Adelaide</option>
            <option value={25}>Melbourne Airport</option>
            <option value={26}>Perth</option>
            <option value={27}>Sale</option>
            <option value={28}>Melbourne</option>
            <option value={30}>Albury</option>
            <option value={31}>Penrith</option>
            <option value={32}>Nuriootpa</option>
            <option value={33}>BadgerysCreek</option>
            <option value={34}>Tuggeranong</option>
            <option value={35}>Perth Airport</option>
            <option value={36}>Bendigo</option>
            <option value={37}>Richmond</option>
            <option value={38}>WaggaWagga</option>
            <option value={39}>Townsville</option>
            <option value={40}>PearceRAAF</option>
            <option value={41}>Salmon Gums</option>
            <option value={42}>Moree</option>
            <option value={43}>Cobar</option>
            <option value={44}>Mildura</option>
            <option value={45}>Katherine</option>
            <option value={46}>AliceSprings</option>
            <option value={47}>Nhil</option>
            <option value={48}>Woomera</option>
            <option value={49}>Uluru</option>
          </select>
        </div>
        <div className="form-section">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="form-section">
          <label htmlFor="windGustDir">Wind Gust Direction:</label>
          <select
            id="windGustDir"
            value={windGustDir}
            onChange={(e) => setWindGustDir(e.target.value)}
          >
            <option>Select Wind Gust Direction</option>
            <option value={3}>N</option>
            <option value={4}>W</option>
            <option value={7}>S</option>
            <option value={15}>E</option>
            <option value={1}>NW</option>
            <option value={11}>NE</option>
            <option value={9}>SW</option>
            <option value={12}>SE</option>
            <option value={0}>NNW</option>
            <option value={6}>NNE</option>
            <option value={8}>SSW</option>
            <option value={10}>SSE</option>
            <option value={2}>WNW</option>
            <option value={5}>WSW</option>
            <option value={14}>ENE</option>
            <option value={13}>ESE</option>
          </select>
        </div>
        <div className="form-section">
          <label htmlFor="winddir9am">Wind Direction (9 AM)</label>
          <select
            id="winddir9am"
            value={windDir9am}
            onChange={(e) => setWindDir9am(e.target.value)}
          >
            <option>Select Wind Direction</option>
            <option value={1}>N</option>
            <option value={5}>W</option>
            <option value={10}>S</option>
            <option value={15}>E</option>
            <option value={2}>NW</option>
            <option value={9}>NE</option>
            <option value={7}>SW</option>
            <option value={13}>SE</option>
            <option value={0}>NNW</option>
            <option value={3}>NNE</option>
            <option value={8}>SSW</option>
            <option value={11}>SSE</option>
            <option value={4}>WNW</option>
            <option value={6}>WSW</option>
            <option value={12}>ENE</option>
            <option value={14}>ESE</option>
          </select>
        </div>
        <div className="form-section">
          <label htmlFor="windDir3pm">Wind Direction (3 PM)</label>
          <select
            id="windDir3pm"
            value={windDir3pm}
            onChange={(e) => setWindDir3pm(e.target.value)}
          >
            <option>Select Wind Direction</option>
            <option value={2}>N</option>
            <option value={4}>W</option>
            <option value={8}>S</option>
            <option value={14}>E</option>
            <option value={0}>NW</option>
            <option value={11}>NE</option>
            <option value={9}>SW</option>
            <option value={10}>SE</option>
            <option value={1}>NNW</option>
            <option value={5}>NNE</option>
            <option value={7}>SSW</option>
            <option value={12}>SSE</option>
            <option value={3}>WNW</option>
            <option value={6}>WSW</option>
            <option value={13}>ENE</option>
            <option value={15}>ESE</option>
          </select>
        </div>
        <div className="form-section">
          <label htmlFor="minTemp">Min Temp:</label>
          <input
            type="float"
            id="minTemp"
            value={minTemp}
            onChange={(e) => setMinTemp(e.target.value)}
          />
        </div>
        <div className="form-section">
          <label htmlFor="maxTemp">Max Temp:</label>
          <input
            type="float"
            id="maxTemp"
            value={maxTemp}
            onChange={(e) => setMaxTemp(e.target.value)}
          />
        </div>
        <div className="form-section">
          <label htmlFor="windSpeed3pm">Wind Speed (3 PM):</label>
          <input
            type="float"
            id="windSpeed3pm"
            value={windSpeed3pm}
            onChange={(e) => setWindSpeed3pm(e.target.value)}
          />
        </div>
        <div className="form-section">
          <label htmlFor="evaporation">Evaporation:</label>
          <input
            type="float"
            id="evaporation"
            value={evaporation}
            onChange={(e) => setEvaporation(e.target.value)}
          />
        </div>
        <div className="form-section">
          <label htmlFor="sunshine">Sunshine:</label>
          <input
            type="float"
            id="sunshine"
            value={sunshine}
            onChange={(e) => setSunshine(e.target.value)}
          />
        </div>
        <div className="form-section">
          <label htmlFor="humidity9am">humidity (9 AM):</label>
          <input
            type="float"
            id="humidity9am"
            value={humidity9am}
            onChange={(e) => setHumidity9am(e.target.value)}
          />
        </div>
        <div className="form-section">
          <label htmlFor="humidity3pm">humidity (3 PM):</label>
          <input
            type="float"
            id="humidity3pm"
            value={humidity3pm}
            onChange={(e) => setHumidity3pm(e.target.value)}
          />
        </div>
        <div className="form-section">
          <label htmlFor="pressure9am">Pressiure (9 AM):</label>
          <input
            type="float"
            id="pressure9am"
            value={pressure9am}
            onChange={(e) => setPressure9am(e.target.value)}
          />
        </div>
        <div className="form-section">
          <label htmlFor="pressure3pm">Pressiure (3 PM):</label>
          <input
            type="float"
            id="pressure3pm"
            value={pressure3pm}
            onChange={(e) => setPressure3pm(e.target.value)}
          />
        </div>
        <div className="form-section">
          <label htmlFor="cloud9am">Cloud (9 AM):</label>
          <input
            type="float"
            id="cloud9am"
            value={cloud9am}
            onChange={(e) => setCloud9am(e.target.value)}
          />
        </div>
        <div className="form-section">
          <label htmlFor="cloud3pm">Cloud (3 PM):</label>
          <input
            type="float"
            id="cloud3pm"
            value={cloud3pm}
            onChange={(e) => setCloud3pm(e.target.value)}
          />
        </div>
        <div className="form-section">
          <label htmlFor="temp9am">Temperature (9 AM):</label>
          <input
            type="float"
            id="temp9am"
            value={temp9am}
            onChange={(e) => setTemp9am(e.target.value)}
          />
        </div>
        <div className="form-section">
          <label htmlFor="temp3pm">Temperature (3 PM):</label>
          <input
            type="float"
            id="temp3pm"
            value={temp3pm}
            onChange={(e) => setTemp3pm(e.target.value)}
          />
        </div>
        <div className="form-section">
          <label htmlFor="windGustSpeed">Wind Gust Speed:</label>
          <input
            type="float"
            id="windGustSpeed"
            value={windGustSpeed}
            onChange={(e) => setWindGustSpeed(e.target.value)}
          />
        </div>
        <div className="form-section">
          <label htmlFor="windSpeed9am">Wind Speed (9 AM):</label>
          <input
            type="float"
            id="windSpeed9am"
            value={windSpeed9am}
            onChange={(e) => setWindSpeed9am(e.target.value)}
          />
        </div>
        <div className="form-section">
          <label htmlFor="rainfall">Rainfall:</label>
          <input
            type="float"
            id="rainfall"
            value={rainfall}
            onChange={(e) => setRainfall(e.target.value)}
          />
        </div>
        <div className="form-section">
          <label htmlFor="rainToday">Rain Today?</label>
          <select
            id="rainToday"
            value={rainToday}
            onChange={(e) => setRainToday(e.target.value)}
          >
            <option value={1}>Yes</option>
            <option value={0}>No</option>
          </select>
        </div>
        <div className="form-section">
          <button className="buttonClass" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
