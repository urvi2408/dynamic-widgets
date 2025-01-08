import React from "react";
import { Calendar, Card, Badge, List, Typography } from "antd";
import type { Moment } from "moment";
import { useCalendarWidget } from "./useCalendarWidget";

const CalendarWidget: React.FC = () => {
  const { selectedDate, getSchedules, onSelect } = useCalendarWidget();

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
