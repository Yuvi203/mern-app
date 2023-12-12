import {createSlice} from "@reduxjs/toolkit"

const initialState ={
    isUser:false,
    users_id:[],
    users:[],
    allusers:[]
}

const ResumeSlice = createSlice({
    name:"resume",
    initialState,
    reducers:{
        user:(state, action)=>{
            state.isUser = true
        },
        getid:(state, action)=>{
            state.users_id = action.payload
        },
        getusers:(state, action)=>{
             state.users = action.payload
        },
        getusersall: (state, action) =>{
             state.allusers = (action.payload)
        }
    }
})

export default ResumeSlice.reducer
export  const {user, getid, getusers, getusersall} = ResumeSlice.actions

export const SelectisUser = (state) =>  state.resume.isUser 
export const Selectid = (state) => state.resume.user_id