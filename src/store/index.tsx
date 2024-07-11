import { configureStore } from '@reduxjs/toolkit'
import {
    homeSlice,
    userSlice,
    productSlice
} from './features'

const store = configureStore({
    reducer: {
        home: homeSlice,
        user: userSlice,
        product: productSlice
    }
})
export type ReducerType = typeof store.dispatch;
export default store;