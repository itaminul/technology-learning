import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_BASE_URL} from '../../../config';
import { headers } from "next/headers";

interface RegisterDataType {
  email?: string;
  password?: string;
}
export const registerApi = createApi({
  reducerPath: "registerApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
    prepareHeaders: (headers) => {},
  }),
  endpoints: (builder) => ({
    createRegister: builder.mutation<
      RegisterDataType,
      Partial<RegisterDataType>
    >({
      query: (createRegister: any) => ({
        url: "auth/register",
        method: "POST",
        body: createRegister,
      }),
    }),
  }),
});

export const { useCreateRegisterMutation } = registerApi;
