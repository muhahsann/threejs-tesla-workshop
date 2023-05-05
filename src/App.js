import "./App.css";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import { Physics } from "@react-three/cannon";
import Orbit from "./components/Orbit";
import Floor from "./components/Floor";
import Background from "./components/Background";
import Bulb from "./components/Bulb";
import ColorPick from "./components/ColorPick";
import Cars from "./components/Cars";
import CameraControls from "./components/CameraControls";
import CameraButton from "./components/CameraButton";

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
        <Orbit setOrbitControls={setOrbitControls} />
        <CameraControls orbitControls={orbitControls} />
        <ambientLight intensity={0.2} />
        <axesHelper args={[5]} />
        <Bulb position={[0, 3, 0]} />
        <Physics>
          <Cars orbitControls={orbitControls} />
          <Suspense fallback={null}>
            <Background />
          </Suspense>
          <Floor position={[0, -0.5, 0]} />
        </Physics>
      </Canvas>
    </div>
  );
}

export default App;
