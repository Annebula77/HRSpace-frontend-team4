import { type FC } from 'react';
import Autocomplete, { AutocompleteProps } from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import OpenSelectIcon from '../icons/OpenSelectIcon';
import styled from 'styled-components';

export interface OptionType {
  id: string;
  name: string;
}

export interface SelectWithAutoCompleteProps<T extends OptionType> {
  value: T | null;
  options: T[];
  getOptionLabel: (option: T) => string;
  onChange: (value: T | null) => void;
  // renderOption?: (
  //   optionProps: HTMLAttributes<HTMLLIElement>,
  //   option: T,
  //   state: AutocompleteRenderOptionState) => ReactNode;
  error?: boolean;
  helperText?: string;
  placeholder?: string;
}

const StyledAutocomplete = styled(Autocomplete) <AutocompleteProps<OptionType, false, false, false>>`
  && {
    width: 100%;
  }
`;
const SelectWithAutoComplete: FC<SelectWithAutoCompleteProps<OptionType>> = ({
  value,
  options,
  getOptionLabel,
  onChange,
  // renderOption,
  error,
  helperText,
  placeholder,
}) => (
  <StyledAutocomplete
    onChange={(_, newValue) => onChange(newValue)}
    options={options}
    value={value}
    getOptionLabel={getOptionLabel}
    renderOption={(props, option) => (
      <Box key={option.id} component="li" {...props}>
        <span>{option.name}</span>
      </Box>
    )}
    renderInput={(params) => (
      <TextField
        {...params}
        variant="outlined"
        placeholder={placeholder}
        error={!!error}
        helperText={helperText || ''}
        sx={{
          '& .MuiOutlinedInput-root': {
            borderRadius: '8px',
            '& fieldset': {
              borderColor: () => (error ? 'rgba(255, 46, 46, 1)' : 'rgba(186, 189, 191, 1)'),
            },
            '&:hover fieldset': {
              borderColor: 'rgba(23, 133, 229, 1)',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'rgba(23, 133, 229, 1)',
            },
          },
          '& .MuiFormLabel-root': {
            color: 'rgb(255, 255, 255, 1)',
          },
          '& .MuiInput-underline:after': {
            borderBottom: 'none',
          },
          '& .MuiInput-underline:before': {
            borderBottom: 'none',
          },
        }}
      />
    )}
    popupIcon={<OpenSelectIcon style={{ width: '20px', height: '20px', marginRight: '16px' }} />}
    noOptionsText="значение не найдено"
  />
);

export default SelectWithAutoComplete;
