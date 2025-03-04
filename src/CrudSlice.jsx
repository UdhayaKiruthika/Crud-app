import { createSlice } from "@reduxjs/toolkit";
import { data } from "./data";
const initialState = { data };
const slice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {
    addUser: (state, action) => {
      console.log(action.payload);
      state.data.push({
        id: state.data.length + 1,
        ...action.payload,
      });
    },
    deleteUser: (state, action) => {
      state.data = state.data.filter((user) => user.id !== action.payload);
    },
    updateUser: (state, action) => {
      const { id, name, age, city } = action.payload;
      const uu = state.data.find((user) => user.id == id);
      if (uu) {
        uu.name = name;
        uu.age = age;
        uu.city = city;
      }
    },
    searchByName: (state, action) => {
      console.log(action.payload);
      state.data = state.data.filter(
        (user) => user.name.toLowerCase() === action.payload
      );
    },
  },
});
export const { addUser, deleteUser, updateUser, searchByName } = slice.actions;
export default slice.reducer;
