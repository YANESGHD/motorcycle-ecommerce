import { configureStore } from '@reduxjs/toolkit';
import { counterReducer, CounterState, sectionReducer, SectionState, productReducer, ProductState, AccessoriesState, accessoriesReducer, MotorcyclesState, motorcyclesReducer  } from './states';

export interface RootState {
  counter: CounterState;
  section: SectionState
  product: ProductState;
  accessories: AccessoriesState;
  motorcycles: MotorcyclesState
}

export const store = configureStore<RootState>({
  reducer: {
    counter: counterReducer,
    section: sectionReducer,
    product: productReducer,
    accessories: accessoriesReducer,
    motorcycles: motorcyclesReducer
  },
})
