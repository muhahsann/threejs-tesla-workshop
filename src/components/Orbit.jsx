import { useThree } from "@react-three/fiber";
import { useEffect } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

function Orbit({ setOrbitControls }) {
  const { camera, gl } = useThree();
  useEffect(() => {
    const controls = new OrbitControls(camera, gl.domElement);
    setOrbitControls(controls);
    return () => {
      controls.dispose();
    };
  }, [camera, gl, setOrbitControls]);
}

export default Orbit;
