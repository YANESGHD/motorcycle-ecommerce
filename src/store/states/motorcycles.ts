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
    createMotorcycles: (state, action) => {
      return action.payload;
    },
    fetchingMotorcycles: (state) => {
      return { ...state, isLoading: true }
    },
    modifyMotorcycles: (state, action) => {
      return { ...state, ...action.payload }
    },
    resetMotorcycles: () => {
      return initialState;
    },
  },
})

export const { createMotorcycles, modifyMotorcycles, resetMotorcycles, fetchingMotorcycles } = MotorcyclesSlice.actions;
export const motorcyclesReducer = MotorcyclesSlice.reducer;
