import {createSlice} from "@reduxjs/toolkit";



const productRedux = createSlice({
    name:"product",
    initialState:{
        products : [],
        isFetching: false,
        error: false,
    },
    reducers:{
        //Get All
       getProductStart:(state)=>{
        state.isFetching=true;
        state.error = false;
       },
       getProductSuccess:(state,action)=>{
        state.isFetching=false;
        state.products=action.payload; 
       },
       getProductFailure:(state)=>{
        state.isFetching=false;
        state.error = true;
       },


       //Delete Product
       deleteProductStart:(state)=>{
        state.isFetching=true;
        state.error = false;
       },
       deleteProductSuccess:(state,action)=>{
        state.isFetching=false;
        state.products.splice( 
            state.products.findIndex((item)=>item._id === action.payload.id),
            1
        ); 
       },
       deleteProductFailure:(state)=>{
        state.isFetching=false;
        state.error = true;
       },



       //Edit Product
       updateProductStart:(state)=>{
        state.isFetching=true;
        state.error = false;
       },
       updateProductSuccess:(state,action)=>{
        state.isFetching=false;
        state.products[state.products.findIndex((item)=>item._id === action.payload.id)
        ] = action.payload.product;
       },
       updateProductFailure:(state)=>{
        state.isFetching=false;
        state.error = true;
       },


       //Create Product
       addProductStart:(state)=>{
        state.isFetching=true;
        state.error = false;
       },
       addProductSuccess:(state,action)=>{
        state.isFetching=false;
        state.products.push(action.payload);
       },
       addProductFailure:(state)=>{
        state.isFetching=false;
        state.error = true;
       },
    },
});

export const {getProductFailure,getProductStart,getProductSuccess,deleteProductStart,deleteProductSuccess,deleteProductFailure,
    updateProductStart,updateProductSuccess,updateProductFailure,
    addProductStart,addProductSuccess,addProductFailure} = productRedux.actions;
export default productRedux.reducer;