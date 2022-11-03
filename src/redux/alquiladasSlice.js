import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setAlquilada, getAlquiladas } from "../api/apiConfig";

export const alquiladasSlice = createSlice({
  name: "alquiladas",
  initialState: {
    value: getAlquiladas().results,
  },
  reducers: {
    alquilar: (state, action) => {
      
      setAlquilada(action.payload);
      return getAlquiladas().results;
    },
    devolver:(state, action)=>{

    }
  },
  extraReducers(builder) {},
});

export const { alquilar, devolver } = alquiladasSlice.actions;

export default alquiladasSlice.reducer;
