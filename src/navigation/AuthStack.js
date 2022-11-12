import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";
import Register from "../screens/Register";


const Stack = createNativeStackNavigator();

export default function AuthStack() {

    return (
        <Stack.Navigator
            initialRouteName='Login'
            screenOptions={{
            headerTitleAlign: 'center'
            }}
        >
                <Stack.Screen 
                    name="Login"
                    component={Login}
                    options={{
                        title: 'PFS',
                        headerShown: false
                    }}
                />
                <Stack.Screen name="Register" component={Register}/>
        </Stack.Navigator>
    )

}