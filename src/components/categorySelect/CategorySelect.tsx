/* eslint-disable react/require-default-props */
import { type FC, useEffect } from 'react';
import styled from 'styled-components';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { fetchCategories } from '../../store/slices/categorySlice';
import { type CategoryInListModel } from '../../models/categoryListSchema';
import OpenSelectIcon from '../icons/OpenSelectIcon';

interface CategorySelectProps {
  value: string | null;
  onChange: (categoryId: string | null) => void;
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
  background: #fff;
  border-radius: 8px;
`;

const CategorySelect: FC<CategorySelectProps> = ({
  value, onChange, error, helperText,
}) => {
  const dispatch = useAppDispatch();
  const { categories, isLoading, isError } = useAppSelector((state) => state.categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <>
      {isLoading && <LoadingSkeleton />}
      {isError && <ErrorBox />}
      {
        categories && (
          <Autocomplete
            onChange={(_, newValue: CategoryInListModel | null) => {
              onChange(newValue?.id || null);
            }}
            options={categories}
            value={categories.find((c) => c.id === value) || null}
            getOptionLabel={(option) => option.name}
            renderOption={(props, option) => (
              /* eslint-disable-next-line react/jsx-props-no-spreading */
              <Box key={option.id} component="li" {...props}>
                <span>{option.name}</span>
              </Box>
            )}
            renderInput={(params) => (
              <TextField
                /* eslint-disable-next-line react/jsx-props-no-spreading */
                {...params}
                variant="outlined"
                placeholder="начните вводить или выберите профессию"
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
            noOptionsText="Профессия не найдена"
          />

        )
      }

    </>
  );
};

export default CategorySelect;
