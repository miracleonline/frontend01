// userSlice.js
import { createSlice,createAsyncThunk, createAction } from '@reduxjs/toolkit';
const initialState={
  Alluser:[],
  LoginUser:{},
  isLogged:false
}

export const UserSlice=createSlice({
  name:"userData",
  initialState,
  reducers:{
    Login:(state,action)=>{
        state.LoginUser=action.payload;
        state.isLogged=true;
    },
   
    setLoginUser:(state,action)=>{
        state.LoginUser=action.payload;
    },
  
   

  }
})


export const {Login,setLoginUser,Logout,GetAllUser}=UserSlice.actions;