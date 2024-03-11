import { configureStore } from '@reduxjs/toolkit';
import apiSlice from './api/apiSlice'
import authSlice from './feature/auth/authSlice'
import { setupListeners } from "@reduxjs/toolkit/query/react";

const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true,

})
setupListeners(store.dispatch);
export default store;