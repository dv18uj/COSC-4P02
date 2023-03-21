//This page combines components to allow the user to tour 
import React, { Suspense, useRef, useState } from 'react';
import { Canvas, extend, useFrame, useThree, useLoader } from '@react-three/fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import * as THREE from "three";
import {CSS2DObject} from "three/examples/jsm/renderers/CSS2DRenderer"
import Dome from '../organisms/Dome'; 
import InfoPanel from "../templates/InfoPanel.jsx";
import SideMenu from "../organisms/NavMenu";
import './tour.css';
import '../templates/infoPanel.css';
import {Html} from "@react-three/drei";
import { Scene } from 'three';

const store = [
  {position: [10, 4, -15], id: 0}, //top of door
  {position: [7,-9, 10], id: 1} //laptop on table
];

  function ClickableObject({set}) {
  const {id, ...props} = store[set];
  return <Dome onClick = {() => setOpenPanel(true)} {...props} />
}


extend({ OrbitControls })
function Controls(props) {
  const { camera, gl } = useThree()
  const ref = useRef()
  useFrame(() => ref.current.update())
  return <orbitControls ref={ref} target={[0, 0, 0]} {...props} args={[camera, gl.domElement]} />
}

function Tour () {
    return(
      <><SideMenu/>
      <Canvas  camera={{ position: [0, 0, 0.1] }}>
        <Controls enableZoom={false} enablePan={false} enableDamping dampingFactor={0.2} />
        <Suspense fallback={null}>
        
        <ClickableObject set={0}/>
        <ClickableObject set={1}/>
        </Suspense>
      </Canvas> </>
    );
}

export default Tour;