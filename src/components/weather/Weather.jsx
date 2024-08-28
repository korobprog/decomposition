// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = () => {
  const [weatherData, setWeatherData] = useState([]);
  console.log('🚀 ~ Weather ~ weatherData:', weatherData);
  const API_KEY = 'd2ca8dfacc8e86bba18af447e466db77';
  const LAT = '40.730610';
  const LON = '-73.935242';
  const CITY = 'New York';

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${LAT}&lon=${LON}&appid=${API_KEY}&units=metric`
        );
        const dailyData = response.data.list.filter(
          (reading, index) => index % 8 === 0
        );
        setWeatherData(dailyData);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeatherData();
  }, [API_KEY, LAT, LON]);

  return (
    <div className="flex-news">
      <p>{CITY}:</p>
      {weatherData.slice(0, 5).map((day, index) => (
        <div key={index} className="menu">
          <p>{day.dt_txt.split(' ')[0]}</p>
          <img
            src={`http://openweathermap.org/img/w/${day.weather[0].icon}.png`}
          />
          <p>{Math.round(day.main.temp)}</p>
          <p>{day.weather[0].description}</p>
        </div>
      ))}
    </div>
  );
};

export default Weather;
