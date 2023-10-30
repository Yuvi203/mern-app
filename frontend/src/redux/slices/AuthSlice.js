import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    users:[],
    isLoggedin :false,
    token:""
}

const AuthSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
       login:(state, action) =>{
         state.isLoggedin = true
       },
       gettoken:(state, action) =>{
         state.token = action.payload.token
       },
       getusers:(state, action) =>{
         state.users = action.payload.users
       }
    }
})

export const {login, gettoken, getusers} = AuthSlice.actions

export default AuthSlice.reducer