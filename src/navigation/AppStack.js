import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { useEffect } from "react";
import { Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getAllFuel } from "../../store/slices/fuel/fuelActions";
import { logoutUser } from "../../store/slices/user/userActions";
import { Home } from "../screens/Dashboard/Home";
import Payment from "../screens/Payment";
import Receipt from "../screens/Receipt";

const Stack = createNativeStackNavigator();

export const AppStack = () => {

    const dispatch = useDispatch()
    const { fuels } = useSelector((state) => state.fuel)

    // Load all the fuels available
    useEffect(() => {
        dispatch(getAllFuel())
    }, [])

    // console.log('Return all fuels', fuels);

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