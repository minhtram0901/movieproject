import React from "react";
import { useMagicColor } from "./useMagicColor";

export default function Square() {
  const newColor = useMagicColor();
  return (
    <div
      className="text-center ml-5"
      style={{
        width: "200px",
        height: "200px",
        backgroundColor: newColor,
        lineHeight: "200px",
        transition: "all 0.5s",
        color: "white",
        display: "inline-block",
      }}
    >
      Square
    </div>
  );
}
