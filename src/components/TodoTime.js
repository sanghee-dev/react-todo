import React, { useEffect, useState } from "react";

const getTime = () => {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const currentTime = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }`;
  return currentTime;
};
const getDay = () => {
  const date = new Date();
  const currentDay = date.getDay();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return days[currentDay];
};

const TodoTime = () => {
  const [time, setTime] = useState("");
  const [day, setDay] = useState("");
  useEffect(() => {
    setTime(getTime());
    setDay(getDay());
  }, []);
  setInterval(() => {
    setTime(getTime());
    setDay(getDay());
  }, 1000);
  return (
    <div className="TodoTime">
      <h1 className="TodoTime__time">{"12:34"}</h1>
      <h2 className="TodoTime__comment">What is your main focus for {day}?</h2>
    </div>
  );
};

export default TodoTime;
