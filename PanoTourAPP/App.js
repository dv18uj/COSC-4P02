
import React, { Suspense, useRef } from 'react';

export default function App() {
  return (
    /*<Canvas camera={{ position: [0, 0, 0.1] }}>
      <Controls enableZoom={false} enablePan={false} enableDamping dampingFactor={0.2} autoRotate rotateSpeed={-0.5} />
      <Suspense fallback={null}>
        <Dome />
      </Suspense>
    </Canvas>*/
    <Tour/>
  )
  };