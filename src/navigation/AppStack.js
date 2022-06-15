import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Home } from "../screens/Home";
import Payment from "../screens/Payment";

const Stack = createNativeStackNavigator();

export const AppStack = () => {

    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Payment" component={Payment}/>
        </Stack.Navigator>
    )

}