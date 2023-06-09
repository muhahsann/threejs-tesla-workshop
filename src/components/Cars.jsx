import React from "react";
import { Suspense } from "react";
import Dragable from "./Dragable";
import BoundingBox from "./BoundingBox";
import Model from "./Model";

function Cars({ orbitControls }) {
  return (
    <Suspense fallback={null}>
      <Dragable orbitControls={orbitControls} transformGroup>
        <BoundingBox
          // visible
          position={[4, 4, 0]}
          dims={[3, 2, 6]}
          offset={[0, -0.9, 0.5]}
        >
          <Model
            path={`${process.env.PUBLIC_URL}/tesla_1/scene.gltf`}
            scale={new Array(3).fill(1.8)}
            rotation={[0, 0, 0]}
          />
        </BoundingBox>
      </Dragable>
      <Dragable orbitControls={orbitControls} transformGroup>
        <BoundingBox
          // visible
          position={[-4, 4, 0]}
          dims={[3, 2, 6]}
          offset={[0, 0.5, 0]}
        >
          <Model
            path={`${process.env.PUBLIC_URL}/tesla_2/scene.gltf`}
            scale={new Array(3).fill(1.8)}
            rotation={[0, 3.15, 0]}
          />
        </BoundingBox>
      </Dragable>
      {/* <group rotation={[0, Math.PI, 0]}> */}
        <Model path={`${process.env.PUBLIC_URL}/mech_drone/scene.gltf`} scale={new Array(3).fill(8)} />
      {/* </group> */}
    </Suspense>
  );
}

export default Cars;
