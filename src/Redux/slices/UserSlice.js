import { createSlice } from '@reduxjs/toolkit';

export const UserSlice = UserSlice = createSlice({
    name: 'user',
    initialState: [],
    reducers: {
        addUser: (state, action) => {
            state.user = action.payload;
            return [...state,addUser];
        },
        RemoveUser: (state) => {
            state.user = null;
            return [...state,RemoveUser];
        },
    },
});

export const { addUser, RemoveUser } = UserSlice.actions;
export default UserSlice.reducer