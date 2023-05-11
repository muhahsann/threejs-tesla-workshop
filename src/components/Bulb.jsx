import React, { useEffect, useRef } from "react";
import { useThree } from "@react-three/fiber";

function Bulb(props) {
  const ref = useRef();
  const { scene } = useThree();

  useEffect(() => {
    if (scene.lights) scene.lights.push(ref);
    else scene.lights = [ref];

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <mesh {...props} ref={ref}>
      <pointLight
        castShadow
        shadow-mapSize-height={2 ** 10}
        shadow-mapSize-width={2 ** 10}
        shadow-radius={10}
      />
      <sphereBufferGeometry args={[0.2, 20, 20]} />
      <meshPhongMaterial emissive="white" />
    </mesh>
  );
}

export default Bulb;
