/* eslint-disable prettier/prettier */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LandingScreen from '../components/LandingScreen';
import Nozzles from '../components/Nozzles';
import Readings from '../components/Readings';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LandingScreen" component={LandingScreen} />
        <Stack.Screen name="Nozzles" component={Nozzles} />
        <Stack.Screen name="Readings" component={Readings} />
        {/* <Stack.Screen name="Settings" component={Settings} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MyStack;
