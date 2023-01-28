import { createSlice } from "@reduxjs/toolkit";

export const truckInspectSlice = createSlice({
  name: "truckinspect",
  initialState: {
    response: null,
  },
  reducers: {
    truckinspect: (state, action) => {
      localStorage.setItem("response", action.payload.response);
      state.truckinspect = action.payload.truckinspect;
    },
  },
});

export const { truckinspect } = truckInspectSlice.actions;

export const selectTruckInspect = (state) => state.truckinspect.truckinspect;

export default truckInspectSlice.reducer;
