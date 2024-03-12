import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
    email: string;
    isLoggedIn: boolean;
  }
  
  const initialState: AuthState = {
    email: '',
    isLoggedIn: false,
  };

const authSlice=createSlice({
    name:'authentication',
    initialState:initialState,
    reducers:{
        email(state,action){
            state.email=action.payload
        },
        isLoggedIn(state){
            state.isLoggedIn=true 
          },
          logOut(state){
            state.isLoggedIn=false  
            
          }
    }
})
export const authActions=authSlice.actions
export default authSlice.reducer