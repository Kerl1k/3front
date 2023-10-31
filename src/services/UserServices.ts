import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IUser } from "../Type/IUsers";

export const userApi = createApi({
  reducerPath: "userAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/" }),
  tagTypes: ["User"],
  endpoints: (build) => ({
    fetchAlluser: build.query<IUser, string>({
      query: () => ({
        url: "user",
      }),
      providesTags: ["User"],
    }),
    adduser: build.mutation<IUser, IUser>({
      query: (user) => ({
        url: "user",
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["User"],
    }),
    deleteuser: build.mutation<IUser, IUser>({
      query: (user) => ({
        url: `user/${user.id}`,
        method: "DELETE",
        body: user,
      }),
      invalidatesTags: ["User"],
    }),
    changeuser: build.mutation<IUser, IUser>({
      query: (user) => ({
        url: `user/${user.id}`,
        method: "PUT",
        body: user,
      }),
      invalidatesTags: ["User"],
    }),
  }),
});
