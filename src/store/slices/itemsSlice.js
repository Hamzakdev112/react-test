import { createSlice } from "@reduxjs/toolkit";

const itemsSlice = createSlice({
  name: "items",
  initialState: {
    isFetching: false,
    error: null,
    items: null,
  },
  reducers: {
    getAllItemsStart: (state) => {
      state.isFetching = true;
    },
    getAllItemsSuccess: (state, action) => {
      state.isFetching = false;
      state.error = null;
      state.items = action.payload;
    },
    getAllItemsFailure: (state, action) => {
      state.isFetching = true;
      state.error = action.payload;
    },
    addNewItem: (state, action) => {
      state.items.push(action.payload);
    },
    editItem: (state, action) => {
      const editedItemId = action.payload.id;
      const editedItemIndex = state.items.findIndex(
        (item) => item.id === editedItemId
      );

      if (editedItemIndex !== -1) {
        state.items[editedItemIndex] = action.payload;
      }
    },
    deleteItem: (state, action) => {
      const deletedItemId = action.payload;
      state.items = state.items.filter((item) => item.id !== deletedItemId);
    },
  },
});

export const {
  getAllItemsStart,
  getAllItemsSuccess,
  getAllItemsFailure,
  addNewItem,
  editItem,
  deleteItem,
} = itemsSlice.actions;
export default itemsSlice.reducer;
