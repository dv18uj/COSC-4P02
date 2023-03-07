//This page combines components to allow the user to tour 
import React, { Suspense, useRef } from 'react';
import { Canvas, extend, useFrame, useThree, useLoader } from '@react-three/fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Button from '../atoms/Button'
import Dome from '../organisms/Dome';
import * as THREE from "three";

extend({ OrbitControls })

function Controls(props) {
  const { camera, gl } = useThree()
  const ref = useRef()
  useFrame(() => ref.current.update())
  return <orbitControls ref={ref} target={[0, 0, 0]} {...props} args={[camera, gl.domElement]} />
}
const geometry = new THREE.BoxGeometry()
const material = new THREE.MeshBasicMaterial()
const mesh = new THREE.Mesh(geometry,material)
function Tour () {
    return(
    <Canvas camera={{ position: [0, 0, 0.1] }}>
    <Controls enableZoom={false} enablePan={false} enableDamping dampingFactor={0.2} />
    <div object={mesh}>open</div>
    <Suspense fallback={null}>
        <Dome />
    </Suspense>
    </Canvas>
    );
}

export default Tour;