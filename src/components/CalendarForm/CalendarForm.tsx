import { Stack } from "@mui/material";
import { DateCalendar, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useForms } from "../../hooks/use-forms.hook";
import dayjs from "dayjs";

export const CalendarForm = () => {
  const { selectedDate, calendarOnChange } = useForms();

  return (
    <Stack
      width={"75%"}
      height={"35%"}
      padding={"0.5rem"}
      justifyContent={"center"}
      alignItems={"center"}
      sx={{ backgroundColor: "white" }}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar
          onChange={calendarOnChange}
          value={dayjs(selectedDate, "DD.MM.YYYY")}
        />
      </LocalizationProvider>
    </Stack>
  );
};
