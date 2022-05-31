import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Diesel from './dashboard/Diesel';
import Petrol from './dashboard/Petrol';

const Tab = createMaterialTopTabNavigator();

export default function DashboardTabs() {

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
        component={Petrol}
        options={{ tabBarLabel: 'Petrol' }}
      />
      <Tab.Screen
        name="Diesel"
        component={Diesel}
        options={{ tabBarLabel: 'Diesel' }}
      />
    </Tab.Navigator>
  );
}