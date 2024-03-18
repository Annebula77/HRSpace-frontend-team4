import { type FC } from 'react';
import {
  Autocomplete, Chip, Stack, TextField, ListSubheader,
} from '@mui/material';
import styled from 'styled-components';
import OpenSelectIcon from '../icons/OpenSelectIcon';
import CloseIcon from '../icons/CloseIcon';

interface SelectWithChipsProps {
  options: string[];
  selectedValues: string[];
  label: string;
  placeholder: string;
  error?: boolean;
  onChange: (value: string[]) => void;
}

const StyledList = styled.ul`
  margin: 0;
  padding: 12px 0 0 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const StyledLi = styled.li`
  margin: 0 0 0 -20px;
  padding: 0;
  `;

const StyledNonSelectedChip = styled(Chip)`
  && {
    border-radius: 8px;
    border-color: rgba(186, 189, 191, 1);
    color: rgba(48, 50, 51, 1); 
  }
`;

const StyledSelectedChip = styled(Chip)`
  && {
    border-radius: 8px;
    border-color: rgba(217, 224, 240, 1);
    background-color: rgba(217, 224, 240, 1);
    color: rgba(48, 50, 51, 1);
  }
`;

const StyledListSubheader = styled(ListSubheader)`
  && {  
    margin: 0;
    padding: 12px 0 0 20px;
    color: rgba(48, 50, 51, 1);
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 1.4;
  }
`;

const SelectWithChips: FC<SelectWithChipsProps> = ({
  options,
  selectedValues,
  label,
  onChange,
  error,
  placeholder,
}) => {
  const handleDelete = (chipToDelete: string) => () => {
    onChange(selectedValues.filter((chip) => chip !== chipToDelete));
  };

  const handleChange = (_: React.SyntheticEvent, newValue: string[] | string) => {
    onChange(Array.isArray(newValue) ? newValue : [...selectedValues, newValue]);
  };

  return (
    <Stack spacing={3}>
      <Stack direction="row" spacing={1}>
        {selectedValues.map((option) => (
          <StyledSelectedChip
            key={option}
            label={option}
            onDelete={() => handleDelete(option)}
            deleteIcon={<CloseIcon style={{ width: '18px', height: '18px', marginRight: '12px' }} />}
          />
        ))}
      </Stack>
      <Autocomplete
        multiple
        id="tags-outlined"
        options={options.filter((option) => !selectedValues.includes(option))}
        getOptionLabel={(option) => option}
        value={selectedValues}
        disableCloseOnSelect
        filterSelectedOptions
        openOnFocus
        onChange={handleChange}
        freeSolo
        renderTags={() => null}
        ListboxComponent={({ children, ...listboxProps }) => (
          <>
            <StyledListSubheader>{label}</StyledListSubheader>
            <StyledList {...listboxProps}>{children}</StyledList>
          </>
        )}
        renderOption={(optionProps, option) => (
          <StyledLi {...optionProps}>
            <StyledNonSelectedChip label={option} variant="outlined" />
          </StyledLi>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            placeholder={placeholder}
            error={!!error}
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
      />
    </Stack>
  );
};

export default SelectWithChips;
