import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice'
import movieSlice from "./movieSlice";
import gptReducer from "./gptSearchSlice"
import configReducer from "./appConfigSlice"

const appStore=configureStore({
    reducer:{
        user:userReducer,
        movies:movieSlice,
        gpt:gptReducer,
        config:configReducer

        
    }
})
export default appStore

// {
//     we can use anyname like movieSlice or movieReducer
// }