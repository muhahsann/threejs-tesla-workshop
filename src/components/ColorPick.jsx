import React from "react";
import * as THREE from "three";
import state from "../state";

function ColorPick() {
  const handleClick = (e) => {
    if (!state.activeMesh) return;
    state.activeMesh.material.color = new THREE.Color(
      e.target.style.background
    );
  };
  return (
    <div
      style={{
        position: "absolute",
        zIndex: 1,
        left: 0,
        right: 0,
        margin: "auto",
        width: "fit-content",
        display: "flex",
        top: "20px",
      }}
    >
      <div
        style={{ background: "blue", height: 50, width: 50 }}
        onClick={handleClick}
      ></div>
      <div
        style={{ background: "yellow", height: 50, width: 50 }}
        onClick={handleClick}
      ></div>
      <div
        style={{ background: "white", height: 50, width: 50 }}
        onClick={handleClick}
      ></div>
    </div>
  );
}

export default ColorPick;
