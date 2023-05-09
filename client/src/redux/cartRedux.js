import { createSlice } from "@reduxjs/toolkit";



const cartRedux = createSlice({
    name: "cart",
    initialState: {
        products: [],
        quantity: 0,
        total: 0,
    },
    reducers: {
        addProduct: (state, action) => {
            state.quantity += 1;
            state.products.push(action.payload);
            state.total += action.payload.price * action.payload.quantity;
        },
    }
});




export const { addProduct } = cartRedux.actions;
export default cartRedux.reducer;