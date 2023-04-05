import { useNavigation } from '@react-navigation/native';
import { useLoader} from "@react-three/fiber";
import React, {useState, useEffect} from "react";
import * as THREE from "three";
import hover from '../assets/Hotspot_hover.png';
import idle from '../assets/Hotspot.png';

function Hotspot ({position, id, rotation}) {
    const navigation = useNavigation();
    const icon_hover = useLoader(THREE.TextureLoader,hover)
    const icon_idle = useLoader(THREE.TextureLoader, idle);
    const [hovered, setHover] = useState(false);

    useEffect(() => {
      document.body.style.cursor = hovered ? 'pointer' : 'auto'
    }, [hovered])

    return (
        <mesh 
            position={position} 
            rotation = {rotation} 
            id = {id} onClick={() => navigation.navigate('InfoPanel',{id})}
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

export default Hotspot;