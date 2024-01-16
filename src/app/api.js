import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'



// Define a service using a base URL and expected endpoints
export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: "https://rickandmortyapi.com/api",

    }),
    endpoints: (builder) => ({

        getCharacters: builder.query({
            query: ()=> '/character'
        }),

        getCharacter: builder.query({
            query:(id)=> '/character/'+id
        })

    }),
});

export const {useGetCharactersQuery, useGetCharacterQuery} = api;