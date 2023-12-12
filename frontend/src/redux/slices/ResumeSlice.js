import {createSlice} from "@reduxjs/toolkit"

const initialState ={
    isUser:false,
    users_id:[],
    users:[]
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
        }
    }
})

export default ResumeSlice.reducer
export  const {user, getid, getusers} = ResumeSlice.actions

export const SelectisUser = (state) =>  state.resume.isUser 
export const Selectid = (state) => state.resume.user_id