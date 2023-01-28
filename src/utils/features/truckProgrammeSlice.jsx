import { createSlice } from "@reduxjs/toolkit";

export const truckProgrammeSlice = createSlice({
  name: "truckprogramme",
  initialState: {
    response: null,
  },
  reducers: {
    truckprogramme: (state, action) => {
      localStorage.setItem("response", action.payload.response);
      state.truckprogramme = action.payload.truckprogramme;
    },
  },
});

export const { truckprogramme } = truckProgrammeSlice.actions;

export const selectTruckProgramme = (state) =>
  state.truckprogramme.truckprogramme;

export default truckProgrammeSlice.reducer;
