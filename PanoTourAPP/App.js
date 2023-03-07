
import React, { useState } from 'react';
import {View, Text, TouchableOpacity} from 'react-native'; 
import Button from './atoms/Button';

import StartingScreen from './pages/StartingScreen';
import Tour from './pages/Tour'


export default function App() {

  const [showFirstComponent, setShowFirstComponent] = useState(true);

  return (
    /*<Canvas camera={{ position: [0, 0, 0.1] }}>
      <Controls enableZoom={false} enablePan={false} enableDamping dampingFactor={0.2} autoRotate rotateSpeed={-0.5} />
      <Suspense fallback={null}>
        <Dome />
      </Suspense>
    </Canvas>*/
    //<Tour/>
    
    <>

      {/* <TouchableOpacity>
        <StartingScreen onPress={() => setShowFirstComponent(!showFirstComponent)}/>
      </TouchableOpacity>
      {showFirstComponent ? <StartingScreen /> : <Tour />} */}

      {/* <TouchableOpacity onPress={() => setShowFirstComponent(!showFirstComponent)}>
      <TouchableOpacity>
        <Button title={'This is clickable'} onPress={() => setShowFirstComponent(!showFirstComponent)}/>
      </TouchableOpacity>
      {showFirstComponent ? <StartingScreen /> : <Tour />} */}

      <TouchableOpacity onPress={() => setShowFirstComponent(!showFirstComponent)}> 
        <Text style={
          {
            textAlign: 'center', 
            fontSize: 30, 
            fontWeight: 'bold'
          }
        }>Click to switch</Text>
      </TouchableOpacity>
      {showFirstComponent ? <StartingScreen /> : <Tour />}
      
    </>

  )
  };