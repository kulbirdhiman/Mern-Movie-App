import apiSlice from "./apiSlice";
import { User_url } from "../constant";
const userApi = apiSlice.injectEndpoints({
    endpoints: builder => ({
        createUser: builder.mutation({
            query: (data) => ({
                url: `${User_url}`,
                body: data,
                method: "POST"
            }),
        }),
        login: builder.mutation({
            query: (data) => ({
                url: `${User_url}/auth`,
                body: data,
                method: "POST"
            }),
        }),
        logout: builder.mutation({
            query: `${User_url}/logout`,
            method: "POST"
        }),
        getAllUser: builder.query({
            query: () => ({
                url: User_url,
                method: "GET"
            })
        }),
        updateUser: builder.mutation({
            query: (data) => ({
                url: `${User_url}/profile`,
                method: "PUT",
                body: data
            })
        })
    })
})
export const {
    useCreateUserMutation,
    useLoginMutation
    , useLogoutMutation,
    useGetAllUserQuery
    , useUpdateUserMutation } = userApi;