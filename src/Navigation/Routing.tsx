import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import AddExpens from '../screens/AddExpens';

const Tab = createBottomTabNavigator();

export default function Routing() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Add" component={AddExpens} />
    </Tab.Navigator>
  );
}
