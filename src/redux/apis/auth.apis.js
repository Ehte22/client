import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { toast } from "react-toastify";

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:5000/api/v1/auth",
        credentials: 'include'
    }),
    tagTypes: ["user"],
    endpoints: (builder) => {
        return {
            signUp: builder.mutation({
                query: userData => {
                    return {
                        url: "/signUp",
                        method: "POST",
                        body: userData
                    }
                },
                transformResponse: (response) => {
                    console.log(response);

                },
                transformErrorResponse: (response) => {
                    return response.data
                }
            }),
        }
    }
})

export const {
    useSignUpMutation
} = authApi
