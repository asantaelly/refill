import { NavigationContainer } from '@react-navigation/native';
import { useContext, useEffect, useState } from 'react';
import { AppStack } from './navigation/AppStack';
import AuthStack from './navigation/AuthStack';
import { AuthContext } from './providers/AuthProvider';
import * as SecureStore from 'expo-secure-store';
import { ActivityIndicator, View } from 'react-native';



export default function Route() {
  const {user, setUser, login, logout } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if the user is logged in or not
    SecureStore.getItemAsync('user')
    .then(userString => {
      if(userString) {
        userObject = JSON.parse(userString)
        setUser(userObject)
      }
      setLoading(false);
    })
    .catch(error => {
      console.log(error);
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
      {user ? <AppStack/> : <AuthStack/>}
    </NavigationContainer>
   
  );
}