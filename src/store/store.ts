import { configureStore } from '@reduxjs/toolkit';
import citiesReducer from './slices/citiesSlice';
import categoriesReducer from './slices/categoriesSlice';
import singleCategoryReducer from './slices/singleCategorySlice';
import firstPageReducer from './slices/firstPageSlice';
import secondPageReducer from './slices/secondPageSlice';
import thirdPageReducer from './slices/thirdPageSlice';
import forthPageReducer from './slices/forthPageSlice';
import fileUploadReducer from './slices/fileUploadSlice';

export const store = configureStore({
  reducer: {
    cities: citiesReducer,
    categories: categoriesReducer,
    category: singleCategoryReducer,
    file: fileUploadReducer,
    firstPage: firstPageReducer,
    secondPage: secondPageReducer,
    thirdPage: thirdPageReducer,
    forthPage: forthPageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
