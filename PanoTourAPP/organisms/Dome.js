import * as THREE from "three";
import { useLoader } from "@react-three/fiber";
import NavMenu from "../templates/InfoPanel.jsx";
import {Html} from "@react-three/drei";
import React, {useState} from "react";
import '../templates/infoPanel.css';

function Dome({position, id}) {
    const [openPanel, setOpenPanel] = useState(false);
    const texture = useLoader(THREE.TextureLoader, require('../assets/office.jpg'))
    return (
      
      <group>
      <mesh onClick={(e) => console.log(e.point)} /*Go to console on web developer tools to see coords. */ > 
       <sphereBufferGeometry attach="geometry" args={[500, 60, 40]} />
       <meshBasicMaterial attach="material" map={texture} side={THREE.BackSide} />
      </mesh>
    
      <mesh position={position} id = {id} onClick={() => setOpenPanel(true)} >
      <sphereGeometry args={[1, 10, 10]} />
      <meshBasicMaterial color="grey" />
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