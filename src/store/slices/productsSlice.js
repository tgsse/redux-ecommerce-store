import {createSlice} from "@reduxjs/toolkit";
import Product from "../../models/Product";

const initialState = {
    items: [
        new Product("product name", 8, "the best product ever")
    ],
}

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        add(state, action) {
            state.items.push(action.payload.product)
        },
    },
})

export const productsActions = productsSlice.actions
