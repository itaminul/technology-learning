import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_BASE_URL } from "../../../config";

interface LoginDataType {
  email?: string;
  password?: string;
}

export const loginApi = createApi({
  reducerPath: "loginApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
    prepareHeaders: () => {},
  }),
  endpoints: (builder) => ({
    createLogin: builder.mutation<LoginDataType, Partial<LoginDataType>>({
      query: (createLogin: any) => ({
        url: "auth/login",
        method: "POST",
        body: createLogin,
      }),
    }),
  }),
});

export const { useCreateLoginMutation } = loginApi;
