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
import Effect from "./components/Effect";

function App() {
  const [orbitControls, setOrbitControls] = useState();
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <ColorPick />
      <CameraButton />
      <Canvas
        gl={{
          powerPrefrence: "high-performance",
          antialias: false,
          stencil: false,
          depth: false,
        }}
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
        <Effect />
      </Canvas>
    </div>
  );
}

export default App;
