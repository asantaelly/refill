import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getFuel = createAsyncThunk(
    'fuel/get',
    async (fuelType, { getState }) => {
        try {

            // Get token from store
            const { token } = getState().user

            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            const response = await axios.get(`/api/fuel/get/${fuelType}`);

            return response.data;

        } catch (error) {
            console.log('Error response: ', error.response.data)
            return rejectWithValue(error.response.data.message)
        }
    }
)

export const getAllFuel = createAsyncThunk(
    'fuel/get',
    async (args, { getState }) => {
        try {

            // Get token from store
            const { token } = getState().user

            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            const response = await axios.get(`/api/fuel`);

            // return Object.entries(response.data); 
            return response.data;

        } catch (error) {
            console.log('Error response: ', error.response.data)
            return rejectWithValue(error.response.data.message)
        }
    }
)

