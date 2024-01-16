import { configureStore } from "@reduxjs/toolkit";
import {api} from "./api.js";
import characterSlice from "../feature/characterSlice.js";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    character: characterSlice
  },
  middleware: (getDefaultMiddleware)=>
      getDefaultMiddleware().concat(api.middleware)
});
