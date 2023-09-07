import {configureStore} from '@reduxjs/toolkit'
import {cartSlice} from './slices/cartSlice'
import {productsSlice} from './slices/productsSlice'

const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        products: productsSlice.reducer,
    }
})

export default store
