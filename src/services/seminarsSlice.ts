import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getSeminars, SeminarId } from "../utils/seminars-api";
import { deleteSeminar as deleteSeminarFetch } from "../utils/seminars-api";
import { Seminar } from "../utils/types";

export const getSeminarsApiThunk = createAsyncThunk(
  "seminars/getSeminars",
  async () => {
    const response = await getSeminars();
    return response;
  }
);

export const deleteSeminarApiThunk = createAsyncThunk(
  "seminars/deleteSeminar",
  async (id: SeminarId) => {
    const response = await deleteSeminarFetch(id);
    return response;
  }
);

interface initialStateSeminars {
  seminars: Seminar[] | null | undefined;
  isLoading: boolean;
  isLoadingOfDelete: boolean
  error: null | string | object;
  errorOfDelete: null | string | object;
}
const initialState: initialStateSeminars = {
  seminars: null,
  isLoading: false,
  isLoadingOfDelete: false,
  error: null,
  errorOfDelete: null
};

const seminarsSlice = createSlice({
  name: "seminars",
  initialState: initialState,
  reducers: {
    deleteSeminar: (state, action) => {
      state.seminars = state.seminars?.filter(
        (seminar) => seminar.id !== action.payload
      );
    },
    editSeminar: (state, action) => {
      return {
        ...state,
        seminars: state.seminars?.map((seminar) =>
          seminar.id === action.payload.id
            ? { ...seminar, ...action.payload }
            : seminar
        ),
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSeminarsApiThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSeminarsApiThunk.rejected, (state, action) => {
        state.error = action.payload || "Ошибка загрузки семинаров";
        state.isLoading = false;
      })
      .addCase(getSeminarsApiThunk.fulfilled, (state, action) => {
        state.seminars = action.payload;
        state.isLoading = false;
      })
      
      .addCase(deleteSeminarApiThunk.pending, (state) => {
        state.isLoadingOfDelete = true;
      })
      .addCase(deleteSeminarApiThunk.rejected, (state, action) => {
        state.errorOfDelete = action.payload || "Ошибка при удалении семинара";
        state.isLoadingOfDelete = false;
      })
      .addCase(deleteSeminarApiThunk.fulfilled, (state, action) => {
        state.seminars = action.payload;
        state.isLoadingOfDelete = false;
      });
  },
});

export default seminarsSlice.reducer;
export const { deleteSeminar, editSeminar } = seminarsSlice.actions;
