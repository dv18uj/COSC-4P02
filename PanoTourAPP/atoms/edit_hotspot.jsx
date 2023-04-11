import { useNavigation } from '@react-navigation/native';
import { useFrame, useLoader, useThree} from "@react-three/fiber";
import React, {useState, useEffect, useRef} from "react";
import * as THREE from "three";
import hover from '../assets/Hotspot_hover.png';
import idle from '../assets/Hotspot.png';
import { useDrag } from '@use-gesture/react';

function edit_hotspot ({rotation}) {
    const navigation = useNavigation();
    const icon_hover = useLoader(THREE.TextureLoader,hover)
    const icon_idle = useLoader(THREE.TextureLoader, idle);
    const [hovered, setHover] = useState(false);
    const dragObjectRef = useRef();
    const [iconPos, setIconPos] = useState([10, 4, -15]);
    //const {size, viewport} = useThree();
   // const aspect = size.width / viewport.width;

    const bind = useDrag(({ down, direction: [x, y] }) => {
      if (down) {
        setIconPos((prev) => [prev[0] + x, prev[1] - y, prev[2]]); 
        //add rotation with camera movement? -> const {x,y,z} = state.camera.rotation; -> apply y to prev[2], or replace entirely 
        //lock camera from orbit controls?
      }
    });

    useEffect(() => {
      document.body.style.cursor = hovered ? 'pointer' : 'auto'
    }, [hovered])

    console.log([iconPos]); // to view position updates on browser console

    return (
        <mesh 
            position={iconPos} 
            {...bind()}
            ref = {dragObjectRef}
           // onClick={() => navigation.navigate('InfoPanel')}
            onPointerOver = {(e) => setHover(true)}
            onPointerOut = {(e) => setHover(false)}
        >
            <planeBufferGeometry attach="geometry" args={[1, 1]}  />
            <meshBasicMaterial 
                attach="material"
                map={hovered ? icon_idle : icon_hover}
                transparent = {true} 
            />
        </mesh>
    )
}

export default edit_hotspot;