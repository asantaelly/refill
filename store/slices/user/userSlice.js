import { createSlice } from "@reduxjs/toolkit";
import { loginUser, logoutUser, registerUser } from "./userActions";

const initialState = {
    loading: false,
    userPayload: {},
    token: null,
    error: null,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userErrors: (state, action) => {
            state.error = action.payload;
        },
        setUserPayload: (state, action) => {
            state.userPayload = action.payload.user;
            state.token = action.payload.token
        },
    },
    extraReducers: {
        // Register User
        [registerUser.pending]: (state) => {
            state.loading = true
            state.error = null
        },
        [registerUser.fulfilled]: (state, action) => {
            state.error = null
            state.loading = false
            state.userPayload = action.payload.user
            state.token = action.payload.token
        },
        [registerUser.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
        // Login User
        [loginUser.pending]: (state) => {
            state.loading = true
            state.error = null
        },
        [loginUser.fulfilled]: (state, action) => {
            state.error = null
            state.loading = false
            state.userPayload = action.payload.user
            state.token = action.payload.token
        },
        [loginUser.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
        // Logout User
        [logoutUser.fulfilled]: (state, action) => {
            state.token = null
            state.userPayload = {},
            state.error = null,
            state.loading = false          
        },
        [logoutUser.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        }
    }
})


export const { userErrors, setUserPayload } = userSlice.actions;

export default userSlice.reducer;

