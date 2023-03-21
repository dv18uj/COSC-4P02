import * as THREE from "three";
import { useLoader } from "@react-three/fiber";
import NavMenu from "../templates/InfoPanel.jsx";
import {Html} from "@react-three/drei";
import React, {useState} from "react";
import '../templates/infoPanel.css';

function Dome({position}) {
    const [openPanel, setOpenPanel] = useState(false);
    const texture = useLoader(THREE.TextureLoader, require('../assets/office.jpg'))
    return (
      
      <group>
      <mesh>
       <sphereBufferGeometry attach="geometry" args={[500, 60, 40]} />
       <meshBasicMaterial attach="material" map={texture} side={THREE.BackSide} />
      </mesh>
    
      <mesh position={position} onClick={() => setOpenPanel(true)} >
      <sphereGeometry args={[1, 10, 10]} />
      <meshBasicMaterial color="grey" />
      <Html >
      <NavMenu open = {openPanel} onClose={()=> setOpenPanel(false)}/>
      </Html>
     </mesh>
   
     </group>
     
      
    )
  }

  export default Dome;