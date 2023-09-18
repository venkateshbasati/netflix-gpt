import { createSlice } from "@reduxjs/toolkit";

const gptSearchSlice=createSlice({
    name:"gpt",
    initialState:{
        gptSearch:false,
        gptMovieResults:null,
        gptTmdbResults:null
    },
    reducers:{
        showGptSearch:(state)=>{
            state.gptSearch=!state.gptSearch
        },
        addGptMovies:(state,action)=>{           
           
            state.gptMovieResults=action.payload;        
           
        },
        addGptMovieResults:(state, action)=>{
            state.gptTmdbResults=action.payload;
        }

    }
})
export const{showGptSearch,addGptMovieResults, addGptMovies}=gptSearchSlice.actions
export default gptSearchSlice.reducer