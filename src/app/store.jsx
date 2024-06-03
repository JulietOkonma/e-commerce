import {configureStore} from '@reduxjs/toolkit'
import { productsApi } from './productsApi'
import todoReducer from '../assets/component/slice'

export const store = configureStore({
    reducer:{
        todo:todoReducer,
        [productsApi.reducerPath]: productsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productsApi.middleware),

});
