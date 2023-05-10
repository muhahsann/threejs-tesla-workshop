import React from "react";
import { useBox } from "@react-three/cannon";

function Floor(props) {
  const [ref, api] = useBox(() => ({ args: [20, 1, 20], ...props }));
  return (
    <mesh ref={ref} {...props} receiveShadow>
      <boxBufferGeometry args={[200, 1, 200]} />
      <meshPhysicalMaterial transparent opacity={0.2}/>
    </mesh>
  );
}

export default Floor;
