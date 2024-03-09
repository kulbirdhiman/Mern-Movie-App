import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../constant'
const apiSlice = createApi({
    baseQuery: fetchBaseQuery(BASE_URL),
    tagTypes: ["User"],
    endpoints: () => ({})
})
export default apiSlice