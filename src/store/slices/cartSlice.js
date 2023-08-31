import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    isVisible: false,
    items: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        toggle(state) {
            state.isVisible = !state.isVisible
        },
        addToCart(state, action) {
            const item = action.payload
            const existingItem = state.items.findIndex(order => order.title === item.title)
            if (existingItem >= 0) {
                incrementQuantity(state.items[existingItem])
            } else {
                state.items.push({
                    title: item.title,
                    quantity: 1,
                    priceTotal: item.pricePerItem,
                    pricePerItem: item.pricePerItem,
                })
            }
        },
        removeFromCart(state, action) {
            const toBeRemoved = state.items.findIndex(item => item.title === action.payload.title)
            if (toBeRemoved >= 0) {
                const item = state.items[toBeRemoved]
                if (item.quantity > 1) {
                    decrementQuantity(item)
                } else {
                    state.items.splice(toBeRemoved, 1)
                }
            }
        },
    },
})

function incrementQuantity(item) {
    item.quantity++
    updatePriceTotal(item)
}

function decrementQuantity(item) {
    item.quantity--
    updatePriceTotal(item)
}

function updatePriceTotal(item) {
    item.priceTotal = item.quantity * item.pricePerItem
}

export const cartActions = cartSlice.actions
