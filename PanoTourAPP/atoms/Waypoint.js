import { useNavigation } from '@react-navigation/native';
import { useLoader} from "@react-three/fiber";
import React, {useState, useEffect} from "react";
import * as THREE from "three";
import hover from '../assets/Waypoint_hover.png';
import idle from '../assets/Waypoint.png';

function Waypoint ({position, panoview, rotation}) {
    const navigation = useNavigation();
    const icon_hover = useLoader(THREE.TextureLoader,hover)
    const icon_idle = useLoader(THREE.TextureLoader, idle);
    const [hovered, setHover] = useState(false);
    const [pid, setPid] = useState(null)

    React.useEffect(() => {
      document.body.style.cursor = hovered ? 'pointer' : 'auto'
      setPid(panoview)
    }, [hovered, panoview])

    return (
        <mesh 
            position={position} 
            rotation = {rotation} 
            onClick={()=> navigation.push('Tour',{pid: pid})}
            onPointerOver = {(event) => setHover(true)}
            onPointerOut = {(event) => setHover(false)}
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

export default Waypoint;