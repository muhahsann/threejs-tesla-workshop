import "./App.css";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import { Physics } from "@react-three/cannon";
import Orbit from "./components/Orbit";
import Floor from "./components/Floor";
import Background from "./components/Background";
import Bulb from "./components/Bulb";
import ColorPick from "./components/ColorPick";
import Dragable from "./components/Dragable";
import Model from "./components/Model";

function App() {
  const [orbitControls, setOrbitControls] = useState();
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <ColorPick />
      <Canvas
        shadowmap="true"
        style={{ background: "black" }}
        camera={{ position: [7, 7, 7] }}
      >
        <ambientLight intensity={0.2} />
        <Orbit setOrbitControls={setOrbitControls} />
        <axesHelper args={[5]} />
        <Physics>
          <Dragable orbitControls={orbitControls}>
            <Bulb position={[0, 3, 0]} />
            <Suspense fallback={null}>
              <Model
                path="/tesla_1/scene.gltf"
                scale={new Array(3).fill(1.8)}
                position={[4,0,0]}
              />
              <Model
                path="/tesla_2/scene.gltf"
                scale={new Array(3).fill(1.8)}
                position={[-4,1.3,0]}
              />
            </Suspense>
          </Dragable>
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
