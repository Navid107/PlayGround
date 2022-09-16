import React, { useState } from "react";
import Clouds from "../../img/cloudy.jpg";
import Rainy from "../../img/rainy.jpg";
import Windy from "../../img/windy.jpg";
import Sunny from "../../img/clear.jpg";
import "./weather.css";

const apiURL = {
  base: "https://api.openweathermap.org/data/2.5/",
  key: "439a30799a27449e2bf30f4645198568",
};

function Weather() {
  const [input, setInput] = useState("");
  const [weather, setWeather] = useState({});

  const todaysDate = (d) => {
    let date = d.getDate();
    let month = d.getMonth() + 1;
    let year = d.getFullYear();
    return `Today Date: ${month}/ ${date}/ ${year}`;
  };
  const search = (event) => {
    if (event.key === "Enter") {
      fetch(`${apiURL.base}weather?q=${input}&units=metric&APPID=${apiURL.key}`)
        .then((res) => res.json())
        .then((result) => {
          setInput("");
          setWeather(result);
          console.log(result);
        });
    }
  };
  const tempKind = () => {
    let weat = weather.weather[0].main;
    if (weat === "Clouds") {
      return Clouds;
    } else if (weat === "Rain") {
      return Rainy;
    } else if (weat === "Windy") {
      return Windy;
    } else if (weat === "Clear") {
      return Sunny;
    }
  };
  const convertToFahrenheit = () => {
    let fahr = (Math.round(weather.main.temp) * 9) / 5 + 32;
    return fahr;
  };
  return (
    <div className="main-container">
      <h1 className="title">Weather</h1>
      <div className="date">{todaysDate(new Date())}</div>
      <div className="input-container">
        <input
          type="text"
          className="input"
          placeholder="Search for weather"
          onChange={(e) => setInput(e.target.value)}
          value={input}
          onKeyPress={search}
        />
      </div>
      {typeof weather.main != "undefined" ? (
        <div>
          <div className="output" style={{background: `url(${tempKind()})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
            }}>
            
            <div className="location">
              {weather.name},{weather.sys.country}
            </div>
            <div>{convertToFahrenheit()}</div>
            <div className="temp-kind">{weather.weather[0].main}</div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
export default Weather;