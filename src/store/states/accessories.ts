import { Motorcycle } from "@/interfaces";
import { createSlice } from "@reduxjs/toolkit";

export interface AccessoriesState {
  isLoading: boolean;
  accessories: Motorcycle[];
}

export const initialState: AccessoriesState = {
  isLoading: true,
  accessories: []
}

export const AccessoriesSlice = createSlice({
  name: 'accessories',
  initialState,
  reducers: {
    createAccessories: (state, action) => {
      return action.payload;
    },
    fetchingAccessories: (state) => {
      return { ...state, isLoading: true }
    },
    modifyAccessories: (state, action) => {
      return { ...state, ...action.payload }
    },
    resetAccessories: () => {
      return initialState;
    },
  },
})

export const { createAccessories, modifyAccessories, resetAccessories, fetchingAccessories } = AccessoriesSlice.actions;
export const accessoriesReducer = AccessoriesSlice.reducer;
