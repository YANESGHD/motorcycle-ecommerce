import { configureStore } from '@reduxjs/toolkit';
import { sectionReducer, SectionState, AccessoriesState, accessoriesReducer, MotorcyclesState, motorcyclesReducer  } from './states';

export interface RootState {
  section: SectionState
  accessories: AccessoriesState;
  motorcycles: MotorcyclesState
}

export const store = configureStore<RootState>({
  reducer: {
    section: sectionReducer,
    accessories: accessoriesReducer,
    motorcycles: motorcyclesReducer
  },
})
