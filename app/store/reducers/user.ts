import { createSlice } from '@reduxjs/toolkit';
const user = createSlice({
    initialState: {
        loggedIn: false,
    },
    name: 'user',
    reducers: {
        login(state, { payload }) {
            console.log('🚀 ~ file: user.ts ~ line 9 ~ login ~ payload', payload);
            state.loggedIn = true;
        },
        logout(state, action) {
            console.log('🚀 ~ file: user.ts ~ line 13 ~ logout ~ action', action);
            state.loggedIn = false;
        },
    },
});
export const { login, logout } = user.actions;
export default user.reducer;
