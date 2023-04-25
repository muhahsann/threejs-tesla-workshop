import { useRef, useEffect, useState } from "react";
import { DragControls } from "three/examples/jsm/controls/DragControls";
import { useThree, extend } from "@react-three/fiber";

function Dragable(props) {
  const [children, setChildren] = useState();
  const groupRef = useRef();
  const { camera, gl, scene } = useThree();

  useEffect(() => {
    setChildren(groupRef.current.children);
  }, []);

  useEffect(() => {
    const controls = new DragControls(children, camera, gl.domElement);
    controls.addEventListener("hoveron", (e) => {
      props.orbitControls.enabled = false;
    });
    controls.addEventListener("hoveroff", (e) => {
      props.orbitControls.enabled = false;
    });
    controls.addEventListener("dragstart", (e) => {
      e.object.api.mass.set(0);
    });
    controls.addEventListener("dragend", (e) => {
      e.object.api.mass.set(1);
    });
    controls.addEventListener("drag", (e) => {
      e.object.api.position.copy(e.object.position);
      e.object.api.velocity.set(0, 0, 0);
    });
    return () => {
      controls.dispose();
    };
  }, [camera, gl, children, scene, props.orbitControls]);

  extend({ DragControls });
  return <group ref={groupRef}>{props.children}</group>;
}

export default Dragable;
