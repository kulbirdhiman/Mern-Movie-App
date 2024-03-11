import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    userinfo: localStorage.getItem('userinfo') ? JSON.parse(localStorage.getItem('user')) : null
}
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setcreadtionls: (state, action) => {
            state.userinfo = action.payload
            localStorage.setItem("userinfo", JSON.stringify(action.payload))
            const exptime = new Date().getTime() + 30 * 24 * 60 * 60 * 1000;
            localStorage.setItem("exptime", exptime)
        },
        logout: (state, action) => {
            state.userinfo = null;
            localStorage.clear()
        }
    },

});
export const { setcreadtionls, logout } = authSlice.actions;
export default authSlice.reducer;