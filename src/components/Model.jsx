import React from "react";

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";

function Model(props) {
  const model = useLoader(GLTFLoader, props.path);
  return (
    <primitive
      object={model.scene}
      scale={props.scale}
      rotation={props.rotation}
    />
  );
}

export default Model;
