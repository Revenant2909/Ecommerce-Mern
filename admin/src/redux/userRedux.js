import {createSlice} from "@reduxjs/toolkit";



const userRedux = createSlice({
    name:"user",
    initialState:{
        currentUser : null,
        users: [],
        isFetching: false,
        error: false,
    },
    reducers:{
       loginStart:(state)=>{
        state.isFetching=true;
       },
       loginSuccess:(state,action)=>{
        state.isFetching=false;
        state.currentUser=action.payload;
       },
       loginFailure:(state)=>{
        state.isFetching=false;
        state.error = true;
       },
       logout: (state) => {
        state.currentUser = null;
      },

      //GET USERS
      getUsersStart:(state)=>{
        state.isFetching=true;
        state.error = false;
       },
       getUsersSuccess:(state,action)=>{
        state.isFetching=false;
        state.users=action.payload; 
       },
       getUsersFailure:(state)=>{
        state.isFetching=false;
        state.error = true;
       },
    },
});

export const {loginFailure,loginStart,loginSuccess,logout,getUsersStart,getUsersSuccess,getUsersFailure} = userRedux.actions;
export default userRedux.reducer;