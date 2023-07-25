import { Accessory } from "@/interfaces";
import { createSlice } from "@reduxjs/toolkit";

export interface AccessoriesState {
  isLoading: boolean;
  accessories: Accessory[];
}

export const initialState: AccessoriesState = {
  isLoading: true,
  accessories: []
}

export const AccessoriesSlice = createSlice({
  name: 'accessories',
  initialState,
  reducers: {
    fetchingAccessories: (state) => {
      return { ...state, isLoading: true }
    },
    modifyAccessories: (state, action) => {
      return { ...state, ...action.payload }
    }
  },
})

export const { modifyAccessories, fetchingAccessories } = AccessoriesSlice.actions;
export const accessoriesReducer = AccessoriesSlice.reducer;
