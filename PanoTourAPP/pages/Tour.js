//This page combines components to allow the user to tour 
import React, { Suspense, useRef, useState } from 'react';
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

function Hotspot(props){
  const mesh = useRef();

  const [hovered, setHover] = useState(false);

  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));
  return(
    <mesh
      {...props}
      ref={mesh}
      scale={[1,1,1]}
      onPointerOver={e => setHover(true)}
      onPointerOut={e => setHover(false)}>
      
      <boxGeometry attach="geometry" args ={[1,1,1]}/>
      <meshStandardMaterial
        attach="material"
        color={hovered? 'white' : 'grey'}
      />
    </mesh>
      )


}

const geometry = new THREE.BoxGeometry()
const material = new THREE.MeshBasicMaterial()
const mesh = new THREE.Mesh(geometry,material)
function Tour () {
    return(
    /*<Canvas camera={{ position: [0, 0, 0.1] }}>
    <Controls enableZoom={false} enablePan={false} enableDamping dampingFactor={0.2} />
    <ambientLight />
    <pointLight position={[10, 10, 10]} />
    <Hotspot position={[0,0,0]}/>
    <Suspense fallback={null}>
        <Dome />
    </Suspense>
    </Canvas>*/
    <Canvas camera={{ position: [0, 0, 0.1] }}>
    <ambientLight />
    <pointLight position={[10, 10, 10]} />
    <Hotspot position={[0,0,0]}/>
    </Canvas>
    );
}

export default Tour;