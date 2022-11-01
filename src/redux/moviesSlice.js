import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const moviesSlice = createSlice({
    name:"movies",
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

export const fetchBySearch = createAsyncThunk("fetch/movies", async (terminoBusqueda)=>{
    const resp = await axios.get(
        "https://api.themoviedb.org/3/search/movie?api_key=acb99b6d746b2d21873b6b4176755c4c&query="+terminoBusqueda+"&page=1"
    )

    //console.log(resp.data.results);
    return resp.data.results;
})

export default moviesSlice.reducer;

