import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";

export const useForms = () => {
  const [selectedDate, setSelectedDate] = useState(
    dayjs().format("DD.MM.YYYY")
  );

  const calendarOnChange = (date: Dayjs) => {
    setSelectedDate(date.format("DD.MM.YYYY"));
    console.log(dayjs().toString());
    console.log(selectedDate);
  };

  return {
    selectedDate,
    calendarOnChange,
  };
};
