import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { vaffelDataApi } from "./services/userService";
import CartReducer from './services/cartService'


const rootReducer = combineReducers({
    [vaffelDataApi.reducerPath]: vaffelDataApi.reducer,
    cart: CartReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(vaffelDataApi.middleware),
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']