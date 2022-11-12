import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/user/userSlice'
import fuelReducer from './slices/fuel/fuelSlice';


export default configureStore({
    reducer: {
        user: userReducer,
        fuel: fuelReducer
    }
});