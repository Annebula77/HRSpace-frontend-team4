import { type FC } from "react";
import dayjs, { Dayjs } from "dayjs";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "dayjs/locale/ru";
import CustomActionBar from "../../utils/MUICustomForCalendar";

interface CalendarInputProps {
  value: Dayjs | null;
  onChange: (date: Dayjs | null) => void;
  error?: boolean;
}

const CalendarInput: FC<CalendarInputProps> = ({ value, onChange, error }) => (
  <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ru">
    <DesktopDatePicker
      format="DD.MM.YYYY"
      value={value ? dayjs(value) : null}
      disablePast
      onChange={(newValue: dayjs.Dayjs | null) => {
        onChange(newValue);
      }}
      slots={{
        actionBar: CustomActionBar,
      }}
      slotProps={{
        textField: {
          inputProps: {
            placeholder: "ДД.ММ.ГГГГ",
          },
          sx: {
            "& .MuiOutlinedInput-root": {
              borderRadius: "8px",
              "& fieldset": {
                borderColor: () => (error ? "rgba(255, 46, 46, 1)" : "rgba(186, 189, 191, 1)"),
              },
              "&:hover fieldset": {
                border: "1px solid rgba(23, 133, 229, 1)",
              },
              "&.Mui-focused fieldset": {
                border: "2px solid rgba(23, 133, 229, 1)",
              },
            },
          },
        },
        actionBar: {
          actions: ["clear", "today"],
        },
      }}
    />

  </LocalizationProvider>
);

export default CalendarInput;
