import React from "react";
import {
  FiCloudLightning,
  FiCloudDrizzle,
  FiCloudRain,
  FiCloudSnow,
  FiDroplet,
  FiSun,
  FiCloud,
} from "react-icons/fi";

const TodoWeatherIcon = ({ condition = "Sunny" }) => {
  const weathers = {
    Thunderstorm: <FiCloudLightning />,
    Drizzle: <FiCloudDrizzle />,
    Rain: <FiCloudRain />,
    Snow: <FiCloudSnow />,
    Atmosphere: <FiDroplet />,
    Clear: <FiSun />,
    Clouds: <FiCloud />,
  };
  return <div className="TodoWeatherIcon">{weathers[condition]}</div>;
};

export default TodoWeatherIcon;
