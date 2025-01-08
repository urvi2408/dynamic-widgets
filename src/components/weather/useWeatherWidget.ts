import { useState } from "react";
import { message } from "antd";
import axios from "axios";
import moment from "moment";

export const useWeatherWidget = () => {
  const [weatherData, setWeatherData] = useState<any>(null);
  const [hourlyData, setHourlyData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentDateTime, setCurrentDateTime] = useState<string>("");

  const API_KEY = "aa581b742bc8a5764fa1e0fa6d6327ed";
  const CITY = "Vadodara";
  const API_URL = `https://api.openweathermap.org/data/2.5/forecast?q=${CITY}&appid=${API_KEY}&units=metric`;

  const updateDateTime = () => {
    setCurrentDateTime(moment().format("dddd, MMMM Do YYYY, h:mm:ss A"));
  };

  const fetchWeatherData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(API_URL);
      const { list } = response.data;

      // Process hourly data for the next 24 hours
      const hourly = list.slice(0, 8).map((item: any) => ({
        time: moment(item.dt_txt).format("h:mm A"),
        temperature: item.main.temp,
        condition: item.weather[0].main,
      }));

      // Process 5-day forecast
      const forecast = list
        .filter((_: any, index: number) => index % 8 === 0)
        .map((item: any) => ({
          day: moment(item.dt_txt).format("dddd"),
          condition: item.weather[0].main,
          temperature: item.main.temp,
        }));
      setWeatherData({
        city: response.data.city.name,
        current: {
          temperature: hourly[0].temperature,
          condition: hourly[0].condition,
        },
        forecast,
      });
      setHourlyData(hourly);
      setError(null);
    } catch (err: any) {
      console.error(err);
      setError("Failed to fetch weather data.");
      message.error("Unable to fetch weather data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return {
    weatherData,
    hourlyData,
    loading,
    error,
    currentDateTime,
    updateDateTime,
    fetchWeatherData,
  };
};
