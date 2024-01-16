import {createSlice} from "@reduxjs/toolkit";
import {api} from "../app/api.js";

const characterSlice = createSlice({
    name:"character",
    initialState:[],
    extraReducers:(builder)=>{
        builder.addMatcher(api.endpoints.getCharacters.matchFulfilled, (state, {payload})=>{
            return payload.results

        })
    }
})

export default characterSlice.reducer;