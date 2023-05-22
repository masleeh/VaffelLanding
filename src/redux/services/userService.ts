import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { TCategories } from '../../types/Data'

export const vaffelDataApi = createApi({
    reducerPath: 'vaffelDataApi',
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:5000/"
    }),
    endpoints: (builder) => ({
        getAllCategories: builder.query<TCategories[], string>({
            query: () => ({
                url: "api/v1/categories"
            })
        }),
        getAllDishes: builder.query({
            query: (category: string) => ({
                url: `dishes/${category}`
            })
        }),
        getPromotions: builder.query({
            query: () => ({
                url: "api/v1/promotions"
            })
        }),
        getSeasons: builder.query({
            query: () => ({
                url: "api/v1/seasons"
            })
        })
    })
})