import { configureStore } from "@reduxjs/toolkit";
import catsReducer from "./features/catsSlice";

export const store = configureStore({
	reducer: catsReducer,
});

export type AppDispatch = store.dispatch;
export type RootState = store.getState;
