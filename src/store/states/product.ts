import { Motorcycle } from "@/interfaces";
import { createSlice } from "@reduxjs/toolkit";

export interface ProductState {
  products: Motorcycle[];
}

export const initialState: ProductState = {
  products: []
}

export const ProductSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    createProducts: (state, action) => {
      return action.payload;
    },
    modifyProducts: (state, action) => {
      state.products = action.payload;
    },
    resetProducts: () => {
      return initialState;
    },
  },
})

export const { createProducts, modifyProducts, resetProducts } = ProductSlice.actions;
export const productReducer = ProductSlice.reducer;
