import * as THREE from "three";
import { useLoader, useFrame} from "@react-three/fiber";
import NavMenu from "../templates/InfoPanel.jsx";
import {Html} from "@react-three/drei";
import React, {useState, useEffect, useRef} from "react";
import '../templates/infoPanel.css';
import img from '../assets/Vector.png';
import { Camera } from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
function Dome({position, id, rotation}) {
    const [openPanel, setOpenPanel] = useState(false);
    const texture = useLoader(THREE.TextureLoader, require('../assets/office.jpg'))
    const icon_idle = useLoader(THREE.TextureLoader, img);
 
      return (
      
      <group>
      <mesh > 
       <sphereBufferGeometry attach="geometry" args={[500, 60, 40]} />
       <meshBasicMaterial attach="material" map={texture} side={THREE.BackSide} />
      </mesh>
       
      <mesh position={position} rotation = {rotation} id = {id} onClick={() => setOpenPanel(true)} >
      <planeBufferGeometry attach="geometry" args={[1, 1]} />
      <meshBasicMaterial attach="material" map={icon_idle} />
      <Html center>
        <div className="container">
      <NavMenu open = {openPanel} onClose={()=> setOpenPanel(false)}/>
      </div>
      </Html>
      
      </mesh>
   
     </group>
     
      )
  }

  export default Dome;