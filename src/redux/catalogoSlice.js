import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiFirestore from '../api/apiFirebase/apiFirestore';
import {agregarPeliculaCatalogo, borrarPeliculaCatalogo} from '../api/apiSpring/apiSpring';

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
        console.log(action.payload)
        state.value = action.payload;
      }
    );
    builder.addCase(
      deleteOfCatalogo.fulfilled,(state, action)=>{
        console.log(action.payload)
        state.value = action.payload;
      }
    );
  }
});

export const addCatalogo = createAsyncThunk("fetch/addCatalogo", async (data) => agregarPeliculaCatalogo(data) );
export const deleteOfCatalogo = createAsyncThunk("fetch/deleteOfCatalogo", async (data) => borrarPeliculaCatalogo(data));

export const { setCatalogo } = catalogoSlice.actions;

export default catalogoSlice.reducer;
