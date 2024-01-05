import { combineSlices, configureStore } from "@reduxjs/toolkit";
import mangaReducer from "./slice/mangaSlice";

const allReducers = combineSlices({
    manga: mangaReducer,
})

const store = configureStore({
    reducer: allReducers,
})

export default store