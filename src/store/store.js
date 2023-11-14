import { combineReducers, configureStore } from "@reduxjs/toolkit";
import itemsReducer from "./slices/itemsSlice";

const rootReducer = combineReducers({
  items: itemsReducer,
});

export default configureStore({
  reducer: rootReducer,
});
