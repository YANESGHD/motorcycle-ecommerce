import { Motorcycle } from "@/interfaces";
import { createSlice } from "@reduxjs/toolkit";

export interface MotorcyclesState {
  isLoading: boolean;
  motorcycles: Motorcycle[];
}

export const initialState: MotorcyclesState = {
  isLoading: true,
  motorcycles: []
}

export const MotorcyclesSlice = createSlice({
  name: 'motorcycles',
  initialState,
  reducers: {
    fetchingMotorcycles: (state) => {
      return { ...state, isLoading: true }
    },
    modifyMotorcycles: (state, action) => {
      return { ...state, ...action.payload }
    }
  },
})

export const { modifyMotorcycles, fetchingMotorcycles } = MotorcyclesSlice.actions;
export const motorcyclesReducer = MotorcyclesSlice.reducer;
