import { createSlice } from "@reduxjs/toolkit";

export const ExperienceAccordions = createSlice({
  name: "experience",
  initialState: {
    value: 0,
    details: [],
  },
  reducers: {
    incrementExperience: (state) => {
      state.value += 1;
    },
    decrementExperience: (state) => {
      state.value -= 1;
    },
    customExperience: (state, action) => {
      state.details = action.payload;
    },
  },
});

export const { incrementExperience, decrementExperience, customExperience } =
  ExperienceAccordions.actions;

export default ExperienceAccordions.reducer;
