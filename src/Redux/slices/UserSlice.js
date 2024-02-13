import { createSlice } from '@reduxjs/toolkit';

export const UserSlice = createSlice({
    name: 'user',
    initialState: [],
    reducers: {
        AddUser: (state, action) => {
            state.push(action.payload);
            console.log(action.payload);
        },
        RemoveUser: (state, action) => {
            // console.log(action.payload);
            // state.pop(action.payload);
            state.splice(action.payload, 1);
        },
    },
});
console.log(UserSlice)

export const { AddUser, RemoveUser } = UserSlice.actions;
export default UserSlice.reducer