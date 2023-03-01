import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';

const baseURL = 'https://0d4a-41-222-181-60.eu.ngrok.io'

axios.defaults.baseURL = baseURL;

export const registerUser = createAsyncThunk(
    'user/register',
    async ({name, email, password, passwordConfirmation}, {rejectWithValue }) => {
        try {
            const response = await axios.post('/api/register',{
                    name, email, password,
                    password_confirmation: passwordConfirmation,
                    device_name: 'mobile',
                }
            )

            await SecureStore.setItemAsync('user', JSON.stringify(response.data))
            return response.data;

        } catch (error) {
            
            if(error.response && error.response.data.message) {
                console.log('Error response', error.response.data)
                return rejectWithValue(error.response.data.message)
            } else {
                console.log('Error message: ', error.message.data.message)
                return rejectWithValue(error.message)
            }
        }
    }
)



export const loginUser = createAsyncThunk(
    'user/login',
    async ({email, password}, {rejectWithValue }) => {
        try {

            const response = await axios.post('/api/login',{
                    email, password,
                    device_name: 'mobile',
                }
            )
            await SecureStore.setItemAsync('user', JSON.stringify(response.data))
            return response.data;

        } catch (error) {
            
            if(error.response && error.response.data.message) {
                console.log('Error response: ', error.response.data.message)
                return rejectWithValue(error.response.data.message)
            } 
            else {
                console.log('Error message: ', error.response)
                return rejectWithValue(error.response.data.message)
            }
        }
    }
)


export const logoutUser = createAsyncThunk(
    'user/logout',
    async (arg, { getState }) => {
        try {

             // Get token from store
            const { token } = getState().user

            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            const response = await axios.post('/api/logout')

            await SecureStore.deleteItemAsync('user')
            return response.data;

        } catch (error) {
            
            if(error.response && error.response.data.message) {
                console.log('Error response: ', error.response.data)
                return rejectWithValue(error.response.data.message)
            }
            else {
                console.log('Error message: ', error.message)
                return rejectWithValue(error.message)
            }
        }
        
    }
)
