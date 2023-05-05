import * as THREE from "three";

const state = {
  activeMesh: null,
  cameraPos: new THREE.Vector3(10, 3, 5),
  target: new THREE.Vector3(4, 0, 0),
  shouldUpdate: true,
};

export default state;
