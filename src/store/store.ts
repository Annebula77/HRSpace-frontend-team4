import { configureStore } from '@reduxjs/toolkit';
import regionsReducer from './slices/regionsSlice';
import categoriesReducer from './slices/categorySlice';

export const store = configureStore({
  reducer: {
    regions: regionsReducer,
    categories: categoriesReducer,
  },
});

// NOTE: Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// NOTE: Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
