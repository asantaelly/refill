import { NavigationContainer } from '@react-navigation/native';
import { AppStack } from './navigation/AppStack';
import AuthStack from './navigation/AuthStack';


export default function Route() {
  return (
    <NavigationContainer>
        {/* <AuthStack /> */}
        <AppStack/>
    </NavigationContainer>
   
  );
}