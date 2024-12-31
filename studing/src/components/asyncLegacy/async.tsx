import { configureStore, createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Slice для данных
const dataSlice = createSlice({
  name: 'data',
  initialState: {
    loading: false,
    data: null,
    error: null,
  },
  reducers: {
    // Здесь reducers не нужны для асинхронной операции.  
    // Все изменения состояния будут происходить через extraReducers
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state: any, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});


// Async Thunk (функция, возвращающая Promise)
export const fetchData: any = createAsyncThunk('data/fetchData', async () => {
  try {
    const response = await fetch('/api/data'); // Запрос к API
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error; // Передаем ошибку дальше
  }
});

export const { } = dataSlice.actions; // Экспортируем actions (хотя здесь они и не нужны)


const store = configureStore({
  reducer: {
    data: dataSlice.reducer,
  },
});

export default store;
