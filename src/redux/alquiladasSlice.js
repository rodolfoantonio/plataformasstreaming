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
  },
  extraReducers(builder) {},
});

export const { alquilar } = alquiladasSlice.actions;

export default alquiladasSlice.reducer;
