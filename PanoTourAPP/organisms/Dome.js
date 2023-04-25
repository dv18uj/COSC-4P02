import * as THREE from "three";
import { useLoader, useFrame} from "@react-three/fiber";
import InfoPanel from "../templates/InfoPanel.jsx";
import {Html} from "@react-three/drei";
import React, {useState, useEffect, useRef} from "react";
import idle from '../assets/Vector.png';
import hover from '../assets/Vector_hover.png';
import { Camera } from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';


function Dome({position, id, rotation}) {
    const [openPanel, setOpenPanel] = useState(false);
    const texture = useLoader(THREE.TextureLoader, require('../assets/office.jpg'))
    const icon_idle = useLoader(THREE.TextureLoader, idle);
    const icon_hover = useLoader(THREE.TextureLoader, hover);
    const [hovered, setHover] = useState(false);
    useEffect(() => {
      document.body.style.cursor = hovered ? 'pointer' : 'auto'
    }, [hovered])

    
      return (
      
      <group>
      <mesh  > 
       <sphereBufferGeometry attach="geometry" args={[500, 60, 40]} />
       <meshBasicMaterial attach="material" map={texture} side={THREE.BackSide} />
      </mesh>
       
      <mesh 
      position = {position} 
      rotation = {rotation} 
      id = {id} 
      onClick={() => setOpenPanel(true)} 
      onPointerOver = {(event) => setHover(true)}
      onPointerOut = {(event) => setHover(false)} >
      <planeBufferGeometry attach="geometry" args={[1, 1]}  />
      <meshBasicMaterial attach="material" map={hovered ? icon_idle : icon_hover} transparent = {true} />
      <Html center>
        <div className="container">
      <InfoPanel open = {openPanel} onClose={()=> setOpenPanel(false)}/>
      </div>
      </Html>
      
      </mesh>
   
     </group>
     
      )
  }

  export default Dome;