import { configureStore } from "@reduxjs/toolkit";
import slice from "./CrudSlice";
const store = configureStore({
  reducer: {
    users: slice,
  },
});
export default store;
