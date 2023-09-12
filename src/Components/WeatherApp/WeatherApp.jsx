import React from "react";
import "./WeatherApp.css";
import search_icon from "../Assets/search.png";
import clear_icon from "../Assets/clear.png";
import cloud_icon from "../Assets/cloud.png";
import drizzle_icon from "../Assets/drizzle.png";
import rain_icon from "../Assets/rain.png";
import snow_icon from "../Assets/snow.png";
import humidity_icon from "../Assets/humidity.png";
import wind_icon from "../Assets/wind.png";
import RenderIf from "../RenderIf";
import Container from "../Container";

const { REACT_APP_API_KEY } = process.env || "";

const WeatherApp = () => {
  const [data, setData] = React.useState(null);
  const [city, setCity] = React.useState(null);

  const search = async () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&unit=Metric&appid=${REACT_APP_API_KEY}`;
    let response = await fetch(url);
    let data = await response.json();
    setData(data);
  };

  return (
    <div className="container">
      <div className="top-bar">
        <input
          type="text"
          onChange={(e) => {
            setCity(e.target.value);
          }}
          className="cityInput"
          placeholder="Search"
        />
        <div
          className="search-icon"
          onClick={() => {
            search();
          }}
        >
          <img src={search_icon} alt="" />
        </div>
      </div>

       

      <RenderIf condition={data}>
        <React.Fragment>
          <Container className="weather-image">
            <img src={cloud_icon} alt="" />
          </Container>
          <Container className="weather-temp">{data?.wind.deg} </Container>
          <Container className="weather-location">{data?.name}</Container>
          <Container className="data-container">
            <div className="element">
              <img src={humidity_icon} alt="" className="icon" />
              <div className="data">
                <div className="humidity-percent">{data?.main.humidity}</div>
                <div className="text">Humididty</div>
              </div>
            </div>
            <div className="element">
              <img src={wind_icon} alt="" className="icon" />
              <div className="data">
                <div className="humidity-percent">{data?.wind.speed}</div>
                <div className="text">Wind speed</div>
              </div>
            </div>
          </Container>
        </React.Fragment>
      </RenderIf>
    </div>
  );
};

export default WeatherApp;
