/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeBaseProvider } from 'native-base';
import HomeNavigation from './components/HomeNavigation';
import Home from './src/pages/Home';
import SignIn from './src/pages/SignIn';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        {/* <Stack.Navigator> */}
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name="SignIn"
            component={SignIn}
          />
          <Stack.Screen name="Home" component={HomeNavigation} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
  // return <Home />
};


export default App;
