import { createSlice } from "@reduxjs/toolkit";
import { getAllFuel, getFuel } from "./fuelActions";

const initialState = {
    loading: false,
    fuelPayload: [],
    fuels: Array(),
    error: null,
}

const fuelSlice = createSlice({
    name: 'fuel',
    initialState,
    reducers: {
        getFuel: (state, action) => {

        }

    },
    extraReducers: {
        [getFuel.pending]: (state) => {
            state.loading = true
            state.error = null
        },
        [getFuel.fulfilled]: (state, action) => {
            state.error = null
            state.loading = false
            state.fuelPayload = action.payload
        },
        [getFuel.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
        [getAllFuel.pending]: (state) => {
            state.loading = true
            state.error = null
        },
        [getAllFuel.fulfilled]: (state, action) => {
            // console.log('Fuels payload: ', action.payload);
            state.error = null
            state.loading = false
            state.fuels = action.payload
        },
        [getAllFuel.rejected]: (state, action) => {
            console.log("Fuel rejected: ", action.payload)
            state.loading = false
            state.error = action.payload
        },
    }
})


export default fuelSlice.reducer;