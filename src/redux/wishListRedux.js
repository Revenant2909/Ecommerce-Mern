import { createSlice } from "@reduxjs/toolkit";



const wishListRedux = createSlice({
    name: "wishlist",
    initialState: {
        wishlist: [],
        quantity: 0,
    },
    reducers: {
        addWishList: (state, action) => {
            state.quantity += 1;
            state.wishlist.push(action.payload);
        },
    }
});


export const { addWishList } = wishListRedux.actions;
export default wishListRedux.reducer;