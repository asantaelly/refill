import React, { useState } from "react"
import axios from 'axios';
import {API_URL} from '@env'
import * as SecureStore from 'expo-secure-store';

// axios.defaults.baseURL = API_URL;
axios.defaults.baseURL = 'https://6a1f-41-222-181-208.in.ngrok.io'

export const AuthContext = React.createContext({});

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                error,
                setError,
                register: (name, email, password, passwordConfirmation) => {
                    if(!name || !email || !password || !passwordConfirmation){
                        setError('The input field must not be empty!')
                        return
                    }

                    axios.post('/api/register', {
                        name, email, password,
                        password_confirmation: passwordConfirmation,
                        device_name: 'mobile',
                    })
                    .then(response => {
                        const userResource = {
                            user: response.data.user,
                            token: response.data.token
                        }
                        setUser(userResource);
                        setError(null);
                        SecureStore.setItemAsync('user', JSON.stringify(userResource))
                    })
                    .catch(error => {
                        if(error.response) {
                            const key = Object.keys(error.response.data.errors)[0];
                            setError(error.response.data.errors[key][0]);
                        } else if(error.request) {
                            console.log('Request Error',error.request);
                        }else {
                            console.log('Error', error.message)
                        }
                    })
                },
                login: (email, password) => {
                    if(!email || !password) {
                        setError('The input field must not be empty!')
                        return
                    }

                    axios.post('/api/login', {
                        email,
                        password,
                        device_name: 'mobile',
                    })
                    .then(response => {
                        const userResponse = {
                            user: response.data.user,
                            token: response.data.token,
                        }
                        setUser(userResponse);
                        setError(null);
                        SecureStore.setItemAsync('user', JSON.stringify(userResponse));
                    })
                    .catch(error => {
                        if(error.response) {
                            const key = Object.keys(error.response.data.errors)[0];
                            setError(error.response.data.errors[key][0]);
                        } else if(error.request) {
                            console.log('Request Error',error.request);
                        }else {
                            console.log('Error', error.message)
                        }
                    })
                },
                logout: () => {
                    axios.defaults.headers.common['Authorization'] = `Bearer ${user.token}`;

                    axios.post('/api/logout')
                    .then(response => {
                        setUser(null);
                        SecureStore.deleteItemAsync('user')
                    })
                    .catch(error => {
                        console.log(error.response);
                    })
                }
            }}>
            {children}
        </AuthContext.Provider>
    )

}