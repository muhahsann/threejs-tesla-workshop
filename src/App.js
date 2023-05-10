import "./App.css";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import { Physics } from "@react-three/cannon";
import Orbit from "./components/Orbit";
import Floor from "./components/Floor";
import Background from "./components/Background";
import ColorPick from "./components/ColorPick";
import Cars from "./components/Cars";
import CameraControls from "./components/CameraControls";
import CameraButton from "./components/CameraButton";
import Lights from "./components/Lights";
import {
  EffectComposer,
  DepthOfField,
  Bloom,
} from "@react-three/postprocessing";

function App() {
  const [orbitControls, setOrbitControls] = useState();
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <ColorPick />
      <CameraButton />
      <Canvas
        shadowmap="true"
        style={{ background: "black" }}
        camera={{ position: [7, 7, 7] }}
      >
        <Suspense fallback={null}>
          <Background />
        </Suspense>
        <Orbit setOrbitControls={setOrbitControls} />
        <CameraControls orbitControls={orbitControls} />
        <Lights />
        <Physics>
          <Cars orbitControls={orbitControls} />
          <Floor position={[0, -0.5, 0]} />
        </Physics>
        <EffectComposer>
          <DepthOfField
            focusDistance={0}
            focalLength={0.02}
            bokehScale={2}
            height={480}
          />
          <Bloom luminanceThreshold={1} luminanceSmothing={0.9} height={300} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}

export default App;
