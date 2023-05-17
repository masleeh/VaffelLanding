import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { vaffelDataApi } from "./services/userService";


const rootReducer = combineReducers({
    [vaffelDataApi.reducerPath]: vaffelDataApi.reducer
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