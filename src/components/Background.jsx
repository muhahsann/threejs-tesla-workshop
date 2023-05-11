import React, { useMemo } from "react";
import * as THREE from "three";
import { useThree, useLoader } from "@react-three/fiber";

function Background() {
  const texture = useLoader(THREE.TextureLoader, `${process.env.PUBLIC_URL}/autoshop.jpg`);
  const { gl } = useThree();

  const formatted = useMemo(
    () =>
      new THREE.WebGLCubeRenderTarget(
        texture.image.height
      ).fromEquirectangularTexture(gl, texture),
    [gl, texture]
  );

  return <primitive attach="background" object={formatted.texture} />;
}

export default Background;
