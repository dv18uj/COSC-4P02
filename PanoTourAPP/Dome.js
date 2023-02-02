import * as THREE from "three";
import { useLoader } from "@react-three/fiber";

function Dome() {

    const texture = useLoader(THREE.TextureLoader, require('./assets/office.jpg'))
    return (
      <mesh>
        <sphereBufferGeometry attach="geometry" args={[500, 60, 40]} />
        <meshBasicMaterial attach="material" map={texture} side={THREE.BackSide} />
      </mesh>
    )
  }

  export default Dome;