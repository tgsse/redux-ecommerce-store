import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    items: [
        {title: 'product name', price: 8, description: 'the best product ever'},
        {title: 'product name 2', price: 3, description: 'the second best product ever'},
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
