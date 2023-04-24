
import React, { Suspense, useRef } from 'react';
import StartingScreen from './pages/StartingScreen'
import Link, { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tour from './pages/Tour'
import InfoPanel from './templates/InfoPanel'
import './app.css'
const Stack=createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Group>
          <Stack.Screen name="Start" component={StartingScreen} options={{headerShown:false}} />
          <Stack.Screen name="Tour" component={Tour} options={{headerShown:false}} initialParams={{pid:1}}/>
        </Stack.Group>
        <Stack.Group 
          screenOptions={{ 
            presentation: 'transparentModal',
            contentStyle: {backgroundColor: "#40404070"},
          }}
        >
          <Stack.Screen name = "InfoPanel" component={InfoPanel} options={{headerShown:false}} initialParams={{oid:123}}/>
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  )
  };