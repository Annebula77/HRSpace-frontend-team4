import { configureStore } from '@reduxjs/toolkit';
import citiesReducer from './slices/citiesSlice';
import categoriesReducer from './slices/categoriesSlice';
import firstPageReducer from './slices/firstPageSlice';
import singleCategorySlice from './slices/singleCategorySlice';

export const store = configureStore({
  reducer: {
    cities: citiesReducer,
    categories: categoriesReducer,
    firstPage: firstPageReducer,
    category: singleCategorySlice,
  },
});

// NOTE: Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// NOTE: Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
