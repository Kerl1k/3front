import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IModale } from "../Type/IModale";

export const modaleApi = createApi({
  reducerPath: "ModaleAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/" }),
  tagTypes: ["Modale"],
  endpoints: (build) => ({
    fetchAllModale: build.query<IModale, string>({
      query: () => ({
        url: "modale",
      }),
      providesTags: ["Modale"],
    }),
    addModale: build.mutation<IModale, IModale>({
      query: (Modale) => ({
        url: "modale",
        method: "POST",
        body: Modale,
      }),
      invalidatesTags: ["Modale"],
    }),
    deleteModale: build.mutation<IModale, IModale>({
      query: (Modale) => ({
        url: `modale/${Modale.id}`,
        method: "DELETE",
        body: Modale,
      }),
      invalidatesTags: ["Modale"],
    }),
    changeModale: build.mutation<IModale, IModale>({
      query: (Modale) => ({
        url: `modale/${Modale.id}`,
        method: "PUT",
        body: Modale,
      }),
      invalidatesTags: ["Modale"],
    }),
  }),
});
