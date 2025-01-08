import React, { useState, useEffect } from "react";
import { Card, Typography, List, Spin, message } from "antd";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import axios from "axios";
import moment from "moment";

const WeatherWidget: React.FC = () => {
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

  // Fetch weather data
  useEffect(() => {
    updateDateTime();

    const interval = setInterval(updateDateTime, 1000);
    () => clearInterval(interval);

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

    fetchWeatherData();
  }, []);

  if (loading) {
    return (
      <Card
        title="Weather Widget"
        bordered
        style={{
          width: 400,
          border: "1px solid #d9d9d9",
          borderRadius: "4px",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Spin />
      </Card>
    );
  }

  if (error || !weatherData) {
    return (
      <Card
        title="Weather Widget"
        bordered
        style={{
          width: 400,
          border: "1px solid #d9d9d9",
          borderRadius: "4px",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography.Text type="danger">
          {error || "Error loading data."}
        </Typography.Text>
      </Card>
    );
  }

  return (
    <Card
      title="Weather Widget"
      bordered
      style={{
        width: 400,
        border: "1px solid #d9d9d9",
        borderRadius: "4px",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Typography.Title level={4}>{weatherData.city}</Typography.Title>
      <Typography.Paragraph>
        <b>{currentDateTime}</b>
      </Typography.Paragraph>
      <Typography.Paragraph>
        Current Temperature: <b>{weatherData.current.temperature}°C</b>
      </Typography.Paragraph>
      <Typography.Paragraph>
        Weather Condition: <b>{weatherData.current.condition}</b>
      </Typography.Paragraph>

      <Typography.Title level={5} style={{ marginTop: 20 }}>
        Hourly Temperature
      </Typography.Title>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={hourlyData}>
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="time" />
          <YAxis unit="°C" />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="temperature"
            stroke="#1890ff"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>

      <Typography.Title level={5} style={{ marginTop: 20 }}>
        5-Day Forecast
      </Typography.Title>
      <List
        bordered
        dataSource={weatherData.forecast}
        renderItem={(item: {
          day: string;
          temperature: string;
          condition: string;
        }) => (
          <List.Item>
            {item.day} - {item.temperature}°C ({item.condition})
          </List.Item>
        )}
      />
    </Card>
  );
};

export default WeatherWidget;
