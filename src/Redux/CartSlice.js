import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        AddItem: (state, action) => {
            let existitem = state.find((item) => item.id === action.payload.id)
            if (existitem) {
                return state.map((item) => (item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item))
            }
            state.push(action.payload)
        },
        DeleteItem: (state, action) => {
            return state.filter((item) => item.id !== action.payload)
        }
    }
})
export const { AddItem, DeleteItem } = CartSlice.actions
export default CartSlice.reducer