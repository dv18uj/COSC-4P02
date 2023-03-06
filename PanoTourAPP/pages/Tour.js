//This page combines components to allow the user to tour 
import React, { Suspense, useRef } from 'react';
import { Canvas, extend, useFrame, useThree, useLoader } from '@react-three/fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import styled from 'styled-components';
import Dome from '../organisms/Dome';
import Button from '../atoms/Button'
import InfoPanel from '../templates/InfoPanel';

const Wrapper = styled.p`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const hideModal = (arg) => {
  setShow(false);
  actOnModalResult(arg);
};

extend({ OrbitControls })

function Controls(props) {
  const { camera, gl } = useThree()
  const ref = useRef()
  useFrame(() => ref.current.update())
  return <orbitControls ref={ref} target={[0, 0, 0]} {...props} args={[camera, gl.domElement]} />
}

function Tour () {
    return(
    <Wrapper>
      <InfoPanel show={show} headerText="Confirm delete item?"
                handleClose={hideModal} openPos={Pos.CM_TOP_CENTER}>
        {`Permanently delete "${itemName}"?`}
      </InfoPanel>
    <Button title="Info"/>
    <Canvas camera={{ position: [0, 0, 0.1] }}>
    <Controls enableZoom={false} enablePan={false} enableDamping dampingFactor={0.2} />
    <Suspense fallback={null}>
        <Dome />
    </Suspense>
    </Canvas>
    </Wrapper>
    );
}

export default Tour;