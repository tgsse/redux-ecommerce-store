import {createSlice} from "@reduxjs/toolkit";
import ProductItem from "../../components/Shop/ProductItem";
import ProductInCart from "../../models/ProductInCart";

const initialState = {
    isVisible: false,
    items: [
        new ProductInCart("product name", 2, 16, 8)
    ],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        toggle(state) {
            state.isVisible = !state.isVisible
        },
        addToCart(state, action) {
            state.items.push(action.payload)
        },
        incrementItem(state, action) {
            const toBeChanged = state.items.find(item => item.id === action.payload.id)
            toBeChanged.amount++
        },
        decrementItem(state, action) {
            const toBeChanged = state.items.find(item => item.id === action.payload.id)
            toBeChanged.amount++
        },
    },
})

export const cartActions = cartSlice.actions
