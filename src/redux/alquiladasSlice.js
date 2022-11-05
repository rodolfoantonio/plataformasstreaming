import { createSlice } from "@reduxjs/toolkit";
import { setAlquilada, getAlquiladas, eliminarAlquilada } from "../api/apiConfig";

export const alquiladasSlice = createSlice({
  name: "alquiladas",
  initialState: {
    value: getAlquiladas().results,
  },
  reducers: {
    alquilar: (state, action) => {
      setAlquilada(action.payload);
      state.value = getAlquiladas().results;
    },
    devolver:(state, action)=>{
      eliminarAlquilada(action.payload);
      state.value = getAlquiladas().results;
    }
  },
  extraReducers(builder) {},
});

export const { alquilar, devolver } = alquiladasSlice.actions;

export default alquiladasSlice.reducer;
