import { createSlice } from "@reduxjs/toolkit";

const initManga = {
    id: "",
    name: "",
}

const mangaSlice = createSlice({
    initialState: initManga,
    name: "manga",
    reducers: {
        setId(state, payload) {

        }
    }
})

const mangaAction = mangaSlice.actions;
const mangaReducer = mangaSlice.reducer;


export {
    mangaAction
}

export default mangaReducer