import apiSlice from "./apiSlice";
import { GERNA_Url } from "../constant";
import { get } from "mongoose";

const gerna = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createGerna: builder.mutation({
            query: (data) => ({
                url: GERNA_Url,
                method: "POSST",
                body: data
            }),
            updateGerna: builder.mutation({
                query: (data, id) => ({
                    url: `${GERNA_Url}/${id}`,
                    method: "PUT",
                    body: data,
                }),
            }),
            deleteGerna: builder.mutation({
                query: (id) => ({
                    url: `${GERNA_Url}/${id}`,
                    method: "DELETE",
                })
            }),
            getAllgerna: builder.mutation({
                query: () => ({
                    url: GERNA_Url,
                    method: get
                })
            })
        })
    })
});