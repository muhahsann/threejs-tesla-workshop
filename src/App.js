import "./App.css";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Orbit from "./components/Orbit";
import Box from "./components/Box";
import Floor from "./components/Floor";
import Background from "./components/Background";
import Bulb from "./components/Bulb";
import ColorPick from "./components/ColorPick";

function App() {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <ColorPick />
      <Canvas
        shadowMap
        style={{ background: "black" }}
        camera={{ position: [7, 7, 7] }}
      >
        <ambientLight intensity={0.2} />
        <Bulb position={[0, 3, 0]} />
        <Orbit />
        <axesHelper args={[5]} />
        <Suspense fallback={null}>
          <Box position={[-4, 1, 0]} />
        </Suspense>
        <Suspense fallback={null}>
          <Box position={[4, 1, 0]} />
        </Suspense>
        <Suspense fallback={null}>
          <Background />
        </Suspense>
        <Floor position={[0, -0.5, 0]} />
      </Canvas>
    </div>
  );
}

export default App;
