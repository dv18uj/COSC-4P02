import * as THREE from 'three'
import React, { Suspense, useRef } from 'react'
import { Canvas, extend, useFrame, useThree, useLoader } from '@react-three/fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import './style.css'

extend({ OrbitControls })

function Controls(props) {
  const { camera, gl } = useThree()
  const ref = useRef()
  useFrame(() => ref.current.update())
  return <orbitControls ref={ref} target={[0, 0, 0]} {...props} args={[camera, gl.domElement]} />
}

function Dome() {

  const texture = useLoader(THREE.TextureLoader, require('./assets/office.jpg'))
  return (
    <mesh>
      <sphereBufferGeometry attach="geometry" args={[500, 60, 40]} />
      <meshBasicMaterial attach="material" map={texture} side={THREE.BackSide} />
    </mesh>
  )
}

export default function App() {
  return (
    <Canvas camera={{ position: [0, 0, 0.1] }}>
      <Controls enableZoom={false} enablePan={false} enableDamping dampingFactor={0.2} autoRotate rotateSpeed={-0.5} />
      <Suspense fallback={null}>
        <Dome />
      </Suspense>
    </Canvas>
  )
  }

