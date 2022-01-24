import React from "react";
import { useState } from "react";

export function AddColor() {
  const [color, setColor] = useState("");
  const styles = { backgroundColor: color };
  // const colorList = ["red", "blue", "yellow"];
  const [colorList, setColorList] = useState(["red", "blue", "yellow"]);

  return (
    <div className="mb-3 my-3">
      <input
        className="form-label mx-3 my-4"
        value={color}
        onChange={(event) => setColor(event.target.value)}
        style={styles}
        placeholder="Enter a color"
      />
      <button
        className="btn btn-primary"
        onClick={() => setColorList([...colorList, color])}
      >
        Add color
      </button>
      {colorList.map((clr) => (
        <ColorBox clr={clr} />
      ))}
    </div>
  );

  function ColorBox({ clr }) {
    const styles = {
      height: "25px",
      width: "205px",
      background: clr,
      margin: "10px",
    };
    return <div className="form-label mx-3 my-4 mb-3 " style={styles}></div>;
  }
}
