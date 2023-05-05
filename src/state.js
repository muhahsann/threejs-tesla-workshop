import * as THREE from "three";

//car_1_name: TRDEF-Body_car_main_paint_0
//car_2_name: bodyshell_primary_0
const state = {
  activeMesh: { material: { color: null } },
  activeMeshName: "TRDEF-Body_car_main_paint_0",
  cameraPos: new THREE.Vector3(10, 3, 5),
  target: new THREE.Vector3(4, 0, 0),
  shouldUpdate: true,
};

export default state;
