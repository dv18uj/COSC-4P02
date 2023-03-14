
import React, { Suspense, useRef } from 'react';
import StartingScreen from './pages/StartingScreen'
import Link, { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tour from './pages/Tour'
const Stack=createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen name="Start" component={StartingScreen} options={{headerShown:false}} />
        <Stack.Screen name="Tour" component={Tour}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
  };