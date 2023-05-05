import React from "react";
import state from "../state";

const style = {
  zIndex: 1,
  position: "absolute",
  bottom: "30vh",
  height: "30px",
  width: "30px",
  background: "white",
  textAlign: "center",
  borderRadius: "100%",
  fontSize: "20",
  fontWeight: "bold",
  opacity: 0.7,
  border: "1px solid black",
  cursor: "pointer",
};
function CameraButton() {
  const sets = {
    1: {
      cameraPos: [10, 3, 5],
      target: [4, 0, 0],
    },
    2: {
      cameraPos: [1, 2, 5],
      target: [-4, 0, 0],
    },
  };
  const handleClick = (num) => {
    state.cameraPos.set(...sets[num].cameraPos);
    state.target.set(...sets[num].target);
    state.shouldUpdate = true;
  };
  return (
    <>
      <button
        style={{
          ...style,
          left: "40vw",
        }}
        onClick={(e) => handleClick(2)}
      >
        {"<"}
      </button>
      <button
        style={{
          ...style,
          right: "40vw",
        }}
        onClick={(e) => handleClick(1)}
      >
        {">"}
      </button>
    </>
  );
}

export default CameraButton;
