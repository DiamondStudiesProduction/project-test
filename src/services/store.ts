import { configureStore } from '@reduxjs/toolkit';
import seminarsReducer from './seminarsSlice';
import modalReducer from './modalSlice';

export const store = configureStore({
  reducer: {
    seminars: seminarsReducer,
    modal: modalReducer 
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;