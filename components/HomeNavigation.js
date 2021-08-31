import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Calculator from '../src/pages/Calculator';
import Movie from '../src/pages/Movie';


const Tab = createMaterialTopTabNavigator();

function HomeNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Calculator" component={Calculator} />
      <Tab.Screen name="Movie" component={Movie} />
    </Tab.Navigator>
  );
}
 export default HomeNavigation