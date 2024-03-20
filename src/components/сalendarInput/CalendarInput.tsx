import { type FC } from 'react';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import 'dayjs/locale/ru';
import CustomActionBar from '../../utils/MUICustomForCalendar';

interface CalendarInputProps {
  value: Date | null;
  onChange: (date: Date | null) => void;
}

const CalendarInput: FC<CalendarInputProps> = ({ value, onChange }) => (
  <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ru">
    <DatePicker
      format="DD.MM.YY"
      value={value}
      disablePast={true}
      onChange={(newValue) => {
        if (newValue instanceof Date && !Number.isNaN(newValue.valueOf())) {
          onChange(newValue);
        } else {
          onChange(null);
        }
      }}
      slots={{
        actionBar: CustomActionBar,
      }}
      slotProps={{
        textField: {
          inputProps: {
            placeholder: 'ДД.ММ.ГГ',
          },
          sx: {
            '& .MuiOutlinedInput-root': {
              borderRadius: '8px',
              '& fieldset': {
                borderColor: 'rgba(186, 189, 191, 1)',
              },
              '&:hover fieldset': {
                border: '1px solid rgba(23, 133, 229, 1)',
              },
              '&.Mui-focused fieldset': {
                border: '2px solid rgba(23, 133, 229, 1)',
              },
            },
          },
        },
        actionBar: {
          actions: ['clear', 'today'],
        },
      }}
    />

  </LocalizationProvider>
);

export default CalendarInput;
