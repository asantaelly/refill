import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import DieselTab from '../screens/DieselTab';
import PetrolTab from '../screens/PetrolTab';

const Tab = createMaterialTopTabNavigator();

export default function HomeTabs() {

  return (
    <Tab.Navigator
      initialRouteName="Petrol"
      screenOptions={{
        tabBarActiveTintColor: '#000',
        tabBarLabelStyle: { fontSize: 12, fontWeight: 'bold' },
        tabBarStyle: { backgroundColor: '#fff' },
        tabBarIndicatorStyle:{backgroundColor: '#000'}
      }}
    >
      <Tab.Screen
        name="Petrol"
        component={PetrolTab}
        options={{ tabBarLabel: 'Petrol' }}
      />
      <Tab.Screen
        name="Diesel"
        component={DieselTab}
        options={{ tabBarLabel: 'Diesel' }}
      />
    </Tab.Navigator>
  );
}