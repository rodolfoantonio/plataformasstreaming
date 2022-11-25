import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiFirestore from '../api/apiFirebase/apiFirestore';
import {agregarPeliculaCatalogo, borrarPeliculaCatalogo, obtenerPeliculasCatalogo} from '../api/apiSpring/apiSpring';

export const catalogoSlice = createSlice({
  name: "catalogo",
  initialState: {
    value: [],
  },
  reducers: {
    setCatalogo: (state, action) => {
      state.value = action.payload;
    }
  },
  extraReducers(builder){
    builder.addCase(
      addCatalogo.fulfilled,(state, action)=>{
        if(action.payload !== '')
          state.value = action.payload;
      }
    );
    builder.addCase(
      deleteOfCatalogo.fulfilled,(state, action)=>{
        if(action.payload !== '')
          state.value = action.payload;
      }
    );
  }
});

export const addCatalogo = createAsyncThunk("fetch/addCatalogo", async (movie) =>{
  let response = await agregarPeliculaCatalogo(movie);
  return response ? await obtenerPeliculasCatalogo() : '';
});
export const deleteOfCatalogo = createAsyncThunk("fetch/deleteOfCatalogo", async (movie) =>{
  console.log(movie)
  let response = await borrarPeliculaCatalogo(movie);
  return response ? await obtenerPeliculasCatalogo() : '';
});

export const { setCatalogo } = catalogoSlice.actions;

export default catalogoSlice.reducer;
