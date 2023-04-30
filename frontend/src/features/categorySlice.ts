import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { initialStateCategory } from "../@types";

const initialState: initialStateCategory = {
  category: "",
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    title: (state, { payload }: PayloadAction<string>) => {
      state.category = payload;
    },
  },
});

export const categoryReducer = categorySlice.reducer;
export const { title } = categorySlice.actions;
