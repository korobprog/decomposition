// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WeatherCard from './WeatherCard';

const Weather = () => {
  const [weatherData, setWeatherData] = useState([]);
  const API_KEY = 'd2ca8dfacc8e86bba18af447e466db77';
  const LAT = '-90; 90';
  const LON = '-180; 180';

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/3.0/onecall/timemachine?lat=${LAT}&lon=${LON}&dt={time}&appid=${API_KEY}`
        );
        const dailyData = response.data.list.filter((reading) =>
          reading.dt_txt.includes('18:00:00')
        );
        setWeatherData(dailyData);
      } catch (error) {
        console.error('Ошибка при получении данных о погоде:', error);
      }
    };

    fetchWeatherData();
  }, [API_KEY, CITY]);

  return (
    <div className="weather-container">
      <h2>Прогноз погоды на 5 дней в {CITY}</h2>
      <div className="weather-cards">
        {weatherData.map((day, index) => (
          <WeatherCard
            key={index}
            date={day.dt_txt.split(' ')[0]}
            icon={`http://openweathermap.org/img/w/${day.weather[0].icon}.png`}
            temperature={Math.round(day.main.temp)}
            description={day.weather[0].description}
          />
        ))}
      </div>
    </div>
  );
};

export default Weather;
