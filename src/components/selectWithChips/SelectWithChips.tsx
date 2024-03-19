import { type FC, type ComponentType, type HTMLAttributes } from 'react';
import {
  Autocomplete, Chip, Stack, TextField, Box
} from '@mui/material';
import styled from 'styled-components';
import OpenSelectIcon from '../icons/OpenSelectIcon';
import CloseIcon from '../icons/CloseIcon';




export interface SelectWithChipsProps {
  options: string[];
  selectedValues: string[];
  placeholder: string;
  error?: boolean;
  onChange: (value: string[]) => void;
  ListboxComponent: ComponentType<HTMLAttributes<HTMLElement>>;
}



const StyledLi = styled.li`
  margin: 0 -20px 0 0;
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

const InvisibleButton = styled.button`
    background: transparent;
    padding: 3px 6px 0 0;
    margin: 0;
    border: none;
    cursor: pointer;  
`;

const DynamicMarginBox = styled(Box) <{ hasSelectedValues: boolean }>`
  width: 100%;
  margin: ${({ hasSelectedValues }) => (hasSelectedValues ? '0' : '-26px 0 0')};
  overflow: auto;
`;


const SelectWithChips: FC<SelectWithChipsProps> = ({
  options,
  selectedValues,
  onChange,
  error,
  placeholder,
  ListboxComponent
}) => {

  const handleChange = (_: React.SyntheticEvent, newValue: string[] | string) => {
    onChange(Array.isArray(newValue) ? newValue : [...selectedValues, newValue]);
  };

  return (
    <DynamicMarginBox hasSelectedValues={selectedValues.length > 0}>
      <Stack spacing={3} sx={{ width: '100%' }}>
        <Stack direction="row" spacing={1}>
          {selectedValues.map((option) => (
            <StyledSelectedChip
              key={option}
              label={option}
              deleteIcon={
                <InvisibleButton>
                  <CloseIcon style={{ width: '18px', height: '18px' }} />
                </InvisibleButton>
              }
              onDelete={() => {
                console.log('Deleting:', option);
                const newSelectedValues = selectedValues.filter((chip) => chip !== option);
                onChange(newSelectedValues);
              }}
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
          ListboxComponent={ListboxComponent}
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
      </Stack >
    </DynamicMarginBox>
  );
};

export default SelectWithChips;
