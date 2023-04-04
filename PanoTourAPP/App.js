
import React, { Suspense, useRef } from 'react';
import StartingScreen from './pages/StartingScreen'
import EditTour from './pages/EditTour'
import Link, { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tour from './pages/Tour'
import InfoPanel from './templates/InfoPanel'
import './app.css'
import addArtifact from './templates/addArtifact';
import addPanoview from './templates/addPanoview';
const Stack=createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Group>
          <Stack.Screen name="Start" component={StartingScreen} options={{headerShown:false}} />
          <Stack.Screen name="Tour" component={Tour} options={{headerShown:false}}/>
          <Stack.Screen name="EditTour" component={EditTour} options={{headerShown:false}}/>
        </Stack.Group>
        <Stack.Group 
          screenOptions={{ 
            presentation: 'transparentModal',
            contentStyle: {backgroundColor: "#40404070"},
          }}
        >
          <Stack.Screen name = "InfoPanel" component={InfoPanel} options={{headerShown:false}}> </Stack.Screen>
          <Stack.Screen name = "addArtifact" component={addArtifact} options={{headerShown:false}}> </Stack.Screen>
          <Stack.Screen name = "addPanoview" component={addPanoview} options={{headerShown:false}}> </Stack.Screen>
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  )
  };