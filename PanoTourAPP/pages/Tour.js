//This page combines components to allow the user to tour 
import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Canvas, extend, useFrame, useThree, useLoader } from '@react-three/fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import * as THREE from "three";
import {CSS2DObject} from "three/examples/jsm/renderers/CSS2DRenderer"
import Dome from '../organisms/Dome'; 
import InfoPanel from "../templates/InfoPanel.jsx";
import SideMenu from "../organisms/NavMenu";
//import './tour.css';
import '../templates/infoPanel.css';
import { Vector3 } from 'three';
import {useNavigation, useRoute} from '@react-navigation/native';
import Hotspot from '../atoms/Hotspot';
import service from '../service';

const store = [
  {position: [10, 4, -15], rotation: [0,-0.5,0], id: 123}, //top of door
  {position: [4, -6, 6], rotation: [0,-2.6,0], id: 1}, //laptop on table
  {position: [-1, -4, 15], rotation: [0,-3,0], id: 2} //silver monitor with screen off
];


extend({ OrbitControls })
function Controls(props) {
  const { camera, gl } = useThree()
  const ref = useRef();
  useFrame((state) => {
    if(Boolean(ref.current)){
      camera.rotation.order = 'YXZ';
    const {x,y,z} = state.camera.rotation;
    //console.log([x,y,z]) //for finding rotation values
    ref.current.update()
    }
  })
  return <orbitControls ref={ref} target={[0, 0, 0]} {...props} args={[camera, gl.domElement]} /> 
}


function Tour () {
  const navigation = useNavigation();
  const route = useRoute();
  const [hotspotList, setHotspots] = useState({})
  const [panoview, setPID] = useState(route.params.pid)

  React.useEffect(()=>{
  service.get('/hotspot',{
    params: {
      pid: panoview
    }
  }).then((response)=>{
    setHotspots(response.data)
  })
  },[panoview])

  return(
      <><SideMenu/>
      <Canvas  camera={{ position: [0, 0, 0.1] }}>
        <Controls enableZoom={false} enablePan={false} enableDamping dampingFactor={0.2}  />
        <Suspense fallback={null}>
        {hotspotList.length ? hotspotList.map((item) =>(
                <Hotspot position={[item.px,item.py, item.pz]} rotation={[item.rx, item.ry, item.rz]} artifact={item.oid}/>
                )) : { } }
        <Dome/>
        </Suspense>
      </Canvas> </>
    );
}

export default Tour;