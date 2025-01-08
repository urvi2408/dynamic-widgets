import React, { useState } from "react";
import { Calendar, Card, Badge, List, Typography } from "antd";
import type { Moment } from "moment";
import moment from "moment";

const CalendarWidget: React.FC = () => {
  const today = moment(new Date());
  const [selectedDate, setSelectedDate] = useState<Moment>(today);

  const staticSchedules = [
    {
      date: today.format("YYYY-MM-DD"),
      events: ["Meeting with team at 10:00 AM", "Lunch with client at 1:00 PM"],
    },
    {
      date: today.clone().add(1, "day").format("YYYY-MM-DD"),
      events: ["Submit report by 5:00 PM", "Call supplier"],
    },
    {
      date: today.clone().add(2, "day").format("YYYY-MM-DD"),
      events: ["Project review meeting", "Dinner with family"],
    },
  ];

  const getSchedules = (date: Moment) => {
    const schedule = staticSchedules.find(
      (schedule) => schedule.date === date.format("YYYY-MM-DD")
    );
    return schedule ? schedule.events : [];
  };

  const dateCellRender = (value: Moment) => {
    const schedules = getSchedules(value);
    return schedules.length ? (
      <ul style={{ padding: 0, listStyle: "none" }}>
        {schedules.map((item, index) => (
          <li key={index}>
            <Badge status="success" text={item} />
          </li>
        ))}
      </ul>
    ) : null;
  };

  const onSelect = (date: Moment) => {
    setSelectedDate(date);
  };

  return (
    <div className="calendarWidget" onClick={(e) => e.stopPropagation()}>
      <Card
        title="Calendar Widget"
        bordered={true}
        onClick={(e) => e.stopPropagation()}
        style={{
          width: 400,
          borderRadius: "6px",
          boxShadow: "0px 0px 24px 0px rgba(0,0,0,0.1)",
        }}
      >
        <Calendar
          fullscreen={false}
          value={selectedDate}
          onSelect={onSelect}
          dateCellRender={dateCellRender}
        />
        <Typography.Title level={5} style={{ marginTop: 20 }}>
          Schedule for {selectedDate.format("DD MMM YYYY")}
        </Typography.Title>
        <List
          bordered
          dataSource={getSchedules(selectedDate)}
          renderItem={(item) => <List.Item>{item}</List.Item>}
        />
      </Card>
    </div>
  );
};

export default CalendarWidget;
