//This page combines components to allow the user to tour 
import React, { Suspense, useRef } from 'react';
import { Canvas, extend, useFrame, useThree, useLoader } from '@react-three/fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import NavMenu from '../organisms/NavMenu';
import Dome from '../organisms/Dome'; 

extend({ OrbitControls })

function Controls(props) {
  const { camera, gl } = useThree()
  const ref = useRef()
  useFrame(() => ref.current.update())
  return <orbitControls ref={ref} target={[0, 0, 0]} {...props} args={[camera, gl.domElement]} />
}

function Tour () {
    return(
      <><NavMenu/>
      <Canvas camera={{ position: [0, 0, 0.1] }}>
      <Controls enableZoom={false} enablePan={false} enableDamping dampingFactor={0.2} />
      <Suspense fallback={null}>
        <Dome />
      </Suspense>
      </Canvas>
      </>
    );
}

export default Tour;