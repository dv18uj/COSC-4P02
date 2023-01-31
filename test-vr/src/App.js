import * as THREE from 'three'
import React, { Suspense, useRef, useEffect } from 'react'
import { Canvas, extend, useFrame, useThree, useLoader } from '@react-three/fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
//import './App.css'

extend({ OrbitControls })

/*function Controls(props) {
  const { camera, gl} = useThree()
  const ref = useRef()
  useFrame(()=> ref.current.update())
  return <OrbitControls ref={ref} target={[0,0,0]} {...props} args={[camera, gl.domElement]} />
}*/

const Controls = () => {
  const { camera, gl } = useThree();
  useEffect(
    () => {
      const controls = new OrbitControls(camera, gl.domElement);

      controls.minDistance = 3;
      controls.maxDistance = 20;
      return () => {
        controls.dispose();
      };
    },
    [camera, gl]
  );
  return null;
};

function Dome() {
  const texture = useLoader(THREE.TextureLoader, './testpano.jpg')
  return (
    <mesh>
      <sphereBufferGeometry attach = "geometry" args={[500, 60, 40]} />
      <meshBasicMaterial attach="material" map={texture} side={THREE.BackSide} />
    </mesh>
  )
}

function App() {
  return (
    <Canvas camera={{ position: [0, 0, 0.1]}}>
      <Controls enableZoom={false} enablePan={false} enableDamping dampinFactor={0.2} />
      <Suspense fallback={null}>
        <Dome />
      </Suspense>
    </Canvas>
  );
}

export default App;
