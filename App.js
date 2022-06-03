import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';


import HomeScreen from './components/HomeScreen';
import DashboardScreen from './components/DashboardScreen';
import PaymentScreen from './components/PaymentScreen';
import SignupScreen from './components/SignupScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName='Home'
        screenOptions={{
          headerTitleAlign: 'center'
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options={{ 
            title: 'PFS',
            headerShown: false
          }}  
        />
        <Stack.Screen name="Dashboard" component={DashboardScreen}/>
        <Stack.Screen name="Payment" component={PaymentScreen}/>
        <Stack.Screen name="Signup" component={SignupScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
   
  );
}
