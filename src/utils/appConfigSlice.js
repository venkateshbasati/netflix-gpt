import { createSlice } from "@reduxjs/toolkit";

const configSlice=createSlice({
    name:"config",
    initialState:{
        lang_key:'en'
    },
    reducers:{
        changeLanguage:(state, action)=>{
            state.lang_key=action.payload
        }
    }
})

export const{changeLanguage}=configSlice.actions
export default configSlice.reducer