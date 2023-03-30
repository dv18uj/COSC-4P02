import * as THREE from "three";
import { useLoader, useFrame} from "@react-three/fiber";
import NavMenu from "../templates/InfoPanel.jsx";
import {Html} from "@react-three/drei";
import React, {useState, useEffect, useRef} from "react";
import '../templates/infoPanel.css';
import { Camera } from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { useNavigation } from "@react-navigation/native";
function Dome() {
    const texture = useLoader(THREE.TextureLoader, require('../assets/office.jpg'))
 
      return (
      <mesh > 
       <sphereBufferGeometry attach="geometry" args={[500, 60, 40]} />
       <meshBasicMaterial attach="material" map={texture} side={THREE.BackSide} />
      </mesh>     
      )
  }

  export default Dome;