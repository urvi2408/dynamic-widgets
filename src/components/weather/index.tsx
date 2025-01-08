import React, { useEffect } from "react";
import { Card, Typography, List, Spin } from "antd";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { useWeatherWidget } from "./useWeatherWidget";

const WeatherWidget: React.FC = () => {
  const {
    weatherData,
    hourlyData,
    loading,
    error,
    currentDateTime,
    updateDateTime,
    fetchWeatherData,
  } = useWeatherWidget();

  // Fetch weather data
  useEffect(() => {
    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);
    () => clearInterval(interval);
    fetchWeatherData();
  }, []);

  return (
    <Card
      title="Weather Widget"
      bordered
      style={{
        width: 400,
        borderRadius: "6px",
        boxShadow: "0px 0px 24px 0px rgba(0,0,0,0.1)",
      }}
    >
      {loading ? (
        <Spin />
      ) : error || !weatherData ? (
        <Typography.Text type="danger">
          {error || "Error loading data."}
        </Typography.Text>
      ) : (
        <>
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
        </>
      )}
    </Card>
  );
};

export default WeatherWidget;
