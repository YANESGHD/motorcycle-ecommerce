import { configureStore } from '@reduxjs/toolkit';
import { AccessoriesState, accessoriesReducer, MotorcyclesState, motorcyclesReducer  } from './states';

export interface RootState {
  accessories: AccessoriesState;
  motorcycles: MotorcyclesState
}

export const store = configureStore<RootState>({
  reducer: {
    accessories: accessoriesReducer,
    motorcycles: motorcyclesReducer
  },
})
