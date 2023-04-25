import React from "react";
import * as THREE from "three";

function ColorPick() {
  const handleClick = (e) => {
    console.log("🚀 ~ file: App.js:111 ~ handleClick ~ e:", e);
    if (!window.activeMesh) return;
    window.activeMesh.material.color = new THREE.Color(
      e.target.style.background
    );
  };
  return (
    <div style={{ position: "absolute", zIndex: 1 }}>
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
