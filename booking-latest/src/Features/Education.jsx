import { createSlice } from "@reduxjs/toolkit";

export const EducationAccordions = createSlice({
  name: "education",
  initialState: {
    value: 1,
    details: null,
  },
  reducers: {
    incrementEducation: (state) => {
      state.value += 1;
    },
    decrementEducation: (state) => {
      state.value -= 1;
    },
    customEducation: (state, action) => {
      state.details = action.payload;
    },
  },
});

export const { incrementEducation, decrementEducation, customEducation } =
  EducationAccordions.actions;

export default EducationAccordions.reducer;
