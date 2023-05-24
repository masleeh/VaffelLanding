import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TCartItem } from "../../types/Data";

export interface ICart {
    cart: TCartItem[];
    fav: TCartItem[];
    favIds: number[];
}

const initialState: ICart = {
    cart: [],
    fav: [],
    favIds: [],
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addFav: (state, action: PayloadAction<TCartItem>) => {
            state.fav = [...state.fav, action.payload];
            state.favIds = [...state.favIds, action.payload.id!];
        },
        removeFav: (state, action: PayloadAction<number>) => {
            state.fav = state.fav.filter((item) => item.id !== action.payload);
            state.favIds = state.favIds.filter((id) => id !== action.payload);
        },
        addItemToCart: (state, action: PayloadAction<TCartItem>) => {
            state.cart = [...state.cart, action.payload];
        },
        increaseQuantity: (state, action: PayloadAction<number>) => {
            state.cart[action.payload].quantity! += 1;
        },
        decreaseQuantity: (state, action: PayloadAction<number>) => {
            if (state.cart[action.payload].quantity === 1) {
                state.cart = state.cart.filter(
                    (cartItem) => cartItem.id !== state.cart[action.payload].id
                );
            } else {
                state.cart[action.payload].quantity! -= 1;
            }
        },
        removeItemFromCart: (state, action: PayloadAction<number>) => {
            state.cart = state.cart.filter(
                (cartItem) => cartItem.id !== action.payload
            );
        },
    },
});

export const {
    addFav,
    removeFav,
    addItemToCart,
    removeItemFromCart,
    increaseQuantity,
    decreaseQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
