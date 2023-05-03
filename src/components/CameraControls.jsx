import { useFrame } from "@react-three/fiber";
import state from "../state";

function CameraControls({orbitControls}) {
  useFrame(({ camera }) => {
    if (state.shouldUpdate) {
      camera.position.lerp(state.cameraPos, 0.1);
      orbitControls?.target?.lerp(state.target, 0.1);
      orbitControls?.update();
      const diff = camera.position.clone().sub(state.cameraPos).length();
      if (diff < 0.1) {
        state.shouldUpdate = false;
      }
    }
  });
  return null;
}

export default CameraControls;
