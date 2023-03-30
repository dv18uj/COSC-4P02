import { useNavigation } from '@react-navigation/native';
import { useLoader} from "@react-three/fiber";
import * as THREE from "three";
import img from '../assets/Hotspot.png';

function Hotspot ({position, id, rotation}) {
    const navigation = useNavigation();
    const icon_idle = useLoader(THREE.TextureLoader, img);
    return (
        <mesh position={position} rotation = {rotation} id = {id} onClick={() => navigation.navigate('InfoPanel')} >
            <planeBufferGeometry attach="geometry" args={[1, 1]}  />
            <meshBasicMaterial attach="material" map={icon_idle} transparent = {true} />
        </mesh>
    )
}

export default Hotspot;