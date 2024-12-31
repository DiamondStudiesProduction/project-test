import { configureStore } from '@reduxjs/toolkit';
import { CounterSlice } from './counterSlice';

export const store = configureStore({
	reducer: {
		counter: CounterSlice.reducer,
	},
});
