import React, { useEffect, useState } from "react";
import TodoWeatherIcon from "./TodoWeatherIcon";

const TodoWeather = () => {
  const [condition, setCondition] = useState([]);
  const API_KEY = "74c1b09a4aa9908d22544f59592793bc";
  const getWeather = async (latitude, longitude) => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );
    const json = await response.json();
    const {
      weather: [{ main: condition }],
      main: { temp },
    } = json;
    setCondition(condition);
  };
  const handleGeoSuccess = async (position) => {
    const {
      coords: { latitude, longitude },
    } = await position;
    getWeather(latitude, longitude);
  };
  const handleGeoError = (e) => {
    console.log(e.message);
  };
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
  }, []);
  return <TodoWeatherIcon condition={condition} />;
};

export default TodoWeather;
