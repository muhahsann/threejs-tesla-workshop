import React from "react";
import Bulb from "./Bulb";

function Lights() {
  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight
        position={[6, 3, 0]}
        intensity={2}
        castShadow
        shadow-mapSize-height={2 ** 10}
        shadow-mapSize-width={2 ** 10}
        shadow-radius={10}
      />
      <axesHelper args={[5]} />
      <Bulb position={[-6, 3, 0]} />
      <Bulb position={[0, 3, 0]} />
      <Bulb position={[6, 3, 0]} />
    </>
  );
}

export default Lights;
