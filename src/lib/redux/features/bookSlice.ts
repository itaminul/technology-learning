import { PayloadAction, createSlice } from "@reduxjs/toolkit";
interface BookState {
  floor: number | null;
  unit: string;
}
const initialState: BookState = {
  floor: null,
  unit: "",
};
export const bookSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    updateFloor: (state, action: PayloadAction<number>) => {
      state.floor = action.payload;
    },
    updateUnit: (state, action: PayloadAction<string>) => {
      state.unit = action.payload;
    },
  },
});

export type BookSliceType = typeof bookSlice;
export const { updateFloor, updateUnit } = bookSlice.actions;
export default bookSlice.reducer;
