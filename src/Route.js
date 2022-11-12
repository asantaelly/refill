import { NavigationContainer } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { AppStack } from './navigation/AppStack';
import AuthStack from './navigation/AuthStack';
import * as SecureStore from 'expo-secure-store';
import { ActivityIndicator, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setUserPayload } from '../store/slices/user/userSlice';



export default function Route() {

  const { token } = useSelector((state) => state.user);
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    SecureStore.getItemAsync('user')
    .then(userString => {
      if(userString) {
        userObject = JSON.parse(userString)
        dispatch(setUserPayload(userObject))
      }
      // console.log('User', userString);
      setLoading(false);
    })
    .catch(error => {
      console.log("User not found", error);
    })
  }, [])

  if(loading) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
        <ActivityIndicator size="large"/>
      </View>
    )
  }

  return (
    <NavigationContainer>
      {token ? <AppStack/> : <AuthStack/>}
    </NavigationContainer>
   
  );
}