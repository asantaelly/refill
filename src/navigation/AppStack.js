import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Button } from "react-native";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../store/slices/user/userActions";
import { Home } from "../screens/Home";
import Payment from "../screens/Payment";
import Receipt from "../screens/Receipt";

const Stack = createNativeStackNavigator();

export const AppStack = () => {

    const dispatch = useDispatch()

    return (
        <Stack.Navigator 
            initialRouteName="Home"
            screenOptions={{
                headerRight: () => (
                    <Button
                        onPress={() => dispatch(logoutUser())}
                        title="Logout"
                        // title={`${user.user.name}`}
                        color="#000"
                    />
                )
            }} 
        >
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Payment" component={Payment}/>
            <Stack.Screen name="Receipt" component={Receipt}/>
        </Stack.Navigator>
    )

}