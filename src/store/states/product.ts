import { Motorcycle } from "@/interfaces";
import { createSlice } from "@reduxjs/toolkit";

export interface ProductState {
  isLoading: boolean;
  products: Motorcycle[];
}

export const initialState: ProductState = {
  isLoading: false,
  products: []
}

export const ProductSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    createProducts: (state, action) => {
      return action.payload;
    },
    fetchingProducts: (state) => {
      return { ...state, isLoading: true }
    },
    modifyProducts: (state, action) => {
      return { ...state, ...action.payload }
    },
    resetProducts: () => {
      return initialState;
    },
  },
})

export const { createProducts, modifyProducts, resetProducts, fetchingProducts } = ProductSlice.actions;
export const productReducer = ProductSlice.reducer;
