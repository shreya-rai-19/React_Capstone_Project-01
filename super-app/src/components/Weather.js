//api key = https://api.weatherapi.com/v1/current.json?key=f075e5b9f6624fc2b2d70011230810&q=new%20delhi

import React, { useState, useEffect } from "react";
import "../styles/Weather.css";
import pressureimg from "../images/pressure.png";
import windimg from "../images/Wind.png";
import humidityimg from "../images/Humidity.png";
const Weather = () => {
  const [weatherData, setWeatherData] = useState({});
  const apiKey = "f075e5b9f6624fc2b2d70011230810";
  const weatherApiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=india`;

  useEffect(() => {
    fetch(weatherApiUrl)
      .then((response) => response.json())
      .then((data) => setWeatherData(data))
      .catch((error) => console.error("Error fetching weather data:", error));
  }, [weatherApiUrl]);

  return (
    <div className="weather-card">
      <div className="date-time-section">
        <span className="date">
          {weatherData.location && weatherData.location.localtime.split(" ")[0]}
        </span>
        <span className="time">
          {weatherData.location && weatherData.location.localtime.split(" ")[1]}
        </span>
      </div>

      <div className="current-weather">
        <div className="condition">
          <div>
            <img
              src={weatherData.current && weatherData.current.condition.icon}
              alt="Weather Icon"
            />
          </div>
          <div className="condition-text">
            {weatherData.current && weatherData.current.condition.text}
          </div>
        </div>

        <div className="line"></div>

        <div className="temperature-pressure">
          <div className="temp">
            {weatherData.current && weatherData.current.temp_c}°C
          </div>
          <div className="text-and-icon">
            <div className="icon-img">
              <img src={pressureimg} alt="pressure icon" />
            </div>
            <div className="texts">
              {weatherData.current && weatherData.current.pressure_mb} mbar{" "}
              <br />
              Pressure
            </div>
          </div>
        </div>

        <div className="line"></div>

        <div className="wind-humidity">
          <div className="text-and-icon">
            <div className="icon-img">
              <img src={windimg} alt="wind icon" />
            </div>
            <div className="texts">
              {weatherData.current && weatherData.current.wind_kph} km/h <br />
              Wind
            </div>
          </div>

          <div className="text-and-icon">
            <div className="icon-img">
              {" "}
              <img src={humidityimg} alt="humidity icon" />
            </div>
            <div className="texts">
              {weatherData.current && weatherData.current.humidity}% <br />
              Humidity
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
