import { configureStore } from "@reduxjs/toolkit";
import educationReducer from "./Features/Education";
import experienceReducer from "./Features/Experience";

export const Store = configureStore({
  reducer: {
    education: educationReducer,
    experience: experienceReducer,
  },
});
