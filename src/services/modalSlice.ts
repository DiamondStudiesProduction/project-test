import { createSlice } from "@reduxjs/toolkit";
import { Seminar } from "../utils/types";
interface initialStateModal {
  delete: { isOpen: boolean; seminar: Seminar | null };
  edit: { isOpen: boolean; seminar: Seminar | null };
}
const initialState: initialStateModal = {
  delete: { isOpen: false, seminar: null },
  edit: { isOpen: false, seminar: null },
};
const modalSlice = createSlice({
  name: "modal",
  initialState: initialState,
  reducers: {
    openDeleteModal: (state, action) => {
      state.delete.isOpen = true;
      state.delete.seminar = action.payload;
    },
    closeDeleteModal: (state) => {
      state.delete.isOpen = false;
      state.delete.seminar = null;
    },
    openEditModal: (state, action) => {
      state.edit.isOpen = true;
      state.edit.seminar = action.payload;
    },
    closeEditModal: (state) => {
      state.edit.isOpen = false;
      state.edit.seminar = null;
    },
  },
});

export const {
  openDeleteModal,
  closeDeleteModal,
  openEditModal,
  closeEditModal,
} = modalSlice.actions;
export default modalSlice.reducer;
