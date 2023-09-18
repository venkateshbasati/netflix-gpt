import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({
    name:'user',
    initialState:null,
    reducers:{
        addUser:(state,action)=>{
            return action.payload

            {
                // writing return it will update the state directly
            }
        },
        removeUser:(state,action)=>{
            return null
        }
    }
})
export const {addUser, removeUser}= userSlice.actions
export default userSlice.reducer