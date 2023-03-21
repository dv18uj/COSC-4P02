import * as THREE from "three";
import { useLoader } from "@react-three/fiber";



function Dome({position}) {

    const texture = useLoader(THREE.TextureLoader, require('../assets/office.jpg'))
    return (
      <group>
      <mesh>
        <sphereBufferGeometry attach="geometry" args={[500, 60, 40]} />
        <meshBasicMaterial attach="material" map={texture} side={THREE.BackSide} />
      </mesh>
      <mesh position={position}>
      <sphereGeometry args={[1, 10, 10]} />
      <meshBasicMaterial color="white" />
      
    </mesh>
    </group>
      
    )
  }

  export default Dome;