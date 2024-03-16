import { type FC, useEffect } from 'react';
import styled from 'styled-components';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { fetchRegions } from '../../store/slices/regionsSlice';
import { type RegionModel } from '../../models/regionSchema';
import OpenSelectIcon from '../icons/OpenSelectIcon';

interface RegionSelectProps {
  value: number | null;
  onChange: (regionId: number | null) => void;
  error?: boolean;
  helperText?: string;
}
// TODO: fix loading and Error processing implementation after integration
const LoadingSkeleton = styled.div`
  height: 48px;
  background: #f3f3f3;
  border-radius: 8px;
  animation: skeleton 1.5s infinite;
`;

const ErrorBox = styled.div`
  height: 48px;
  background: #ff6b6b;
  border-radius: 8px;
`;

const RegionSelect: FC<RegionSelectProps> = ({
  value, onChange, error, helperText,
}) => {
  const dispatch = useAppDispatch();
  const { regions, isLoading, isError } = useAppSelector((state) => state.regions);

  useEffect(() => {
    dispatch(fetchRegions());
  }, [dispatch]);

  return (
    <>
      {isLoading && <LoadingSkeleton />}
      {isError && <ErrorBox />}
      {
        regions && (
          <Autocomplete
            onChange={(event, newValue: RegionModel | null) => {
              onChange(newValue?.id || null);
            }}
            options={regions}
            value={regions.find((c) => c.id === value) || null}
            getOptionLabel={(option) => option.name}
            renderOption={(props, option) => (
              <Box key={option.id} component="li" {...props}>
                <span>{option.name}</span>
              </Box>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                placeholder="начните вводить название вашего города"
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
            popupIcon={<OpenSelectIcon style={{ width: '20px', height: '20px' }} />}
            noOptionsText="Город не найден"
          />

        )
      }

    </>
  );
};

export default RegionSelect;
