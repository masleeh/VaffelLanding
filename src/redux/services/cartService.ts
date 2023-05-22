import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TCartItem } from "../../types/Data";

interface ICart {
    cart: TCartItem[],
    fav: TCartItem[],
    favIds: number[]
}

const initialState: ICart = {
    cart: [],
    fav: [],
    favIds: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addFav: (state, action:PayloadAction<TCartItem>) => {
            state.fav = [...state.fav, action.payload]
            state.favIds = [...state.favIds, action.payload.id!]
        },
        removeFav: (state, action:PayloadAction<number>) => {
            state.fav = state.fav.filter(item => item.id !== action.payload)
            state.favIds = state.favIds.filter(id => id !== action.payload)
        }
    }
})

export const {addFav, removeFav} = cartSlice.actions

export default cartSlice.reducer