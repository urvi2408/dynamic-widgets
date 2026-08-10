import { useState } from "react";
import type { Dayjs } from "dayjs";
import dayjs from "dayjs";

export const useCalendarWidget = () => {
  const today = dayjs();
  const [selectedDate, setSelectedDate] = useState<Dayjs>(today);

  const staticSchedules = [
    {
      date: today.format("YYYY-MM-DD"),
      events: ["Meeting with team at 10:00 AM", "Lunch with client at 1:00 PM"],
    },
    {
      date: today.add(1, "day").format("YYYY-MM-DD"),
      events: ["Submit report by 5:00 PM", "Call supplier"],
    },
    {
      date: today.add(2, "day").format("YYYY-MM-DD"),
      events: ["Project review meeting", "Dinner with family"],
    },
  ];

  const getSchedules = (date: Dayjs) => {
    const schedule = staticSchedules.find(
      (schedule) => schedule.date === date.format("YYYY-MM-DD")
    );
    return schedule ? schedule.events : [];
  };

  const onSelect = (date: Dayjs) => {
    setSelectedDate(date);
  };

  return {
    selectedDate,
    getSchedules,
    onSelect,
  };
};
