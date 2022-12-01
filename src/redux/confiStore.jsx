import {configureStore} from '@reduxjs/toolkit'
import shopReducer from './shopReducer'

export const store = configureStore({
    reducer: {
        shopReducer: shopReducer
    }
})