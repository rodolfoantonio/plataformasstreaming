import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiTmdb from "../api/apiTMDb/apiTmdb";

export const moviesSlice = createSlice({
    name: "movies",
    initialState:{
        value:[]
    },
    reducers: {

    },
    extraReducers(builder){
        builder.addCase(fetchBySearch.fulfilled,(state, action)=>{
            state.value = action.payload;
        })
    }
});

export const fetchBySearch = createAsyncThunk("fetch/movies", async (propiedades) => apiTmdb.getListMovies(propiedades) );

export default moviesSlice.reducer;

