import { configureStore } from '@reduxjs/toolkit';
import { counterReducer, CounterState, sectionReducer, SectionState, productReducer, ProductState } from './states';

export interface RootState {
  counter: CounterState;
  section: SectionState
  product: ProductState;
}

export const store = configureStore<RootState>({
  reducer: {
    counter: counterReducer,
    section: sectionReducer,
    product: productReducer
  },
})
