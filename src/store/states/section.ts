import { Section } from "@/interfaces";
import { sections } from "@/constants";
import { createSlice } from "@reduxjs/toolkit";

export interface SectionState {
  sections: Section[];
  selectedSection: Section;
}

export const initialState: SectionState = {
  sections,
  selectedSection: {
    key: 'motorcycles',
    label: 'Motorcycles'
  },
}

export const SectionSlice = createSlice({
  name: 'section',
  initialState,
  reducers: {
    createSection: (state, action) => {
      return action.payload;
    },
    modifySection: (state, action) => {
      state.selectedSection = action.payload;
    },
    resetSection: () => {
      return initialState;
    },
  },
})

export const { createSection, modifySection, resetSection } = SectionSlice.actions;
export const sectionReducer = SectionSlice.reducer;
