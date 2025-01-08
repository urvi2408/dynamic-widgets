import { useState } from "react";
import type { Moment } from "moment";
import moment from "moment";

export const useCalendarWidget = () => {
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

  const onSelect = (date: Moment) => {
    setSelectedDate(date);
  };

  return {
    selectedDate,
    getSchedules,
    onSelect,
  };
};
