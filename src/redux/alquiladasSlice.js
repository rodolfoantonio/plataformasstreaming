import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { setAlquilada, getAlquiladas, eliminarAlquilada } from "../api/apiTMDb/apiConfig";
import apiFirestore from '../api/apiFirebase/apiFirestore';

export const alquiladasSlice = createSlice({
  name: "alquiladas",
  initialState: {
    value: [],
  },
  reducers: {
    setMisPeliculas: (state, action) => {
      state.value = action.payload;
    }
  },
  extraReducers(builder){
    builder.addCase(
      addMisPeliculas.fulfilled,(state, action)=>{
        console.log(action.payload)
        state.value = action.payload;
      }
    );
    builder.addCase(
      deleteOfMisPeliculas.fulfilled,(state, action)=>{
        console.log(action.payload)
        state.value = action.payload;
      }
    );
  }
});

export const addMisPeliculas = createAsyncThunk("fetch/addMisPeliculas", async (data) => apiFirestore.addMisPeliculas(data) );
export const deleteOfMisPeliculas = createAsyncThunk("fetch/deleteOfMisPeliculas", async (data) => apiFirestore.deleteOfMisPeliculas(data) );

export const { setMisPeliculas } = alquiladasSlice.actions;

export default alquiladasSlice.reducer;
