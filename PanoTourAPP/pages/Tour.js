//This page combines components to allow the user to tour 
import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Canvas, extend, useFrame, useThree, useLoader } from '@react-three/fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import PanoView from '../templates/PanoView';
import SideMenu from "../organisms/NavMenu";
import '../templates/infoPanel.css';
import {useNavigation} from '@react-navigation/native';
import Hotspot from '../atoms/Hotspot';

const store = [
  {position: [10, 4, -15], rotation: [0,-0.5,0], id: 0}, //top of door
  {position: [4, -6, 6], rotation: [0,-2.6,0], id: 1}, //laptop on table
  {position: [-1, -4, 15], rotation: [0,-3,0], id: 2} //silver monitor with screen off
];

function ClickableObject({set}) {
  const {id, ...props} = store[set];
  return <Hotspot /**onClick = {navigation.navigate('InfoPanel')}**/ {...props} />
}

extend({ OrbitControls })
function Controls(props) {
  const { camera, gl } = useThree()
  const ref = useRef();
  useFrame((state) => {
    if(Boolean(ref.current)){
      camera.rotation.order = 'YXZ';
    const {x,y,z} = state.camera.rotation;
    //console.log([x,y,z]) //for finding rotation values
    ref.current.update()
    }
  })
  return <orbitControls ref={ref} target={[0, 0, 0]} {...props} args={[camera, gl.domElement]} /> 
}


function Tour () {
  const navigation = useNavigation();
    return(
      <><SideMenu/>
      <Canvas  camera={{ position: [0, 0, 0.1] }}>
        <Controls enableZoom={false} enablePan={false} enableDamping dampingFactor={0.2}  />
        <Suspense fallback={null}>
        <PanoView />
        </Suspense>
      </Canvas> </>
    );
}

export default Tour;