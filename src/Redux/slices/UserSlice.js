import { createSlice } from "@reduxjs/toolkit";

export const UserSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    AddUser: (state, action) => {
      state.push(action.payload);
      console.log(action.payload);
    },
    RemoveUser: (state, action) => {
      state.splice(action.payload, 1);
    },
    UpdateUser: (state, action) => {},
  },
});
// console.log(UserSlice);

export const { AddUser, RemoveUser, UpdateUser } = UserSlice.actions;
export default UserSlice.reducer;
