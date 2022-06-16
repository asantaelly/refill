import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { useContext, useReducer } from "react";
import { Button } from "react-native";
import { AuthContext } from "../providers/AuthProvider";
import { Home } from "../screens/Home";
import Payment from "../screens/Payment";

const Stack = createNativeStackNavigator();

export const AppStack = () => {

    const {user, logout} = useContext(AuthContext);

    return (
        <Stack.Navigator 
            initialRouteName="Home"
            screenOptions={{
                headerRight: () => (
                    <Button
                        onPress={() => logout()}
                        title="Logout"
                        // title={`${user.user.name}`}
                        color="#000"
                    />
                )
            }} 
        >
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Payment" component={Payment}/>
        </Stack.Navigator>
    )

}