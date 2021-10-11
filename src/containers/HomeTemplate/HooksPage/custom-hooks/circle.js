import React from "react";
import { useMagicColor } from "./useMagicColor";

export default function Circle() {
  const newColor = useMagicColor();
  return (
    <div
      className="text-center ml-5 my-5"
      style={{
        width: "200px",
        height: "200px",
        backgroundColor: newColor,
        lineHeight: "200px",
        transition: "all 0.5s",
        borderRadius: "50%",
        color: "white",
        display: "inline-block",
      }}
    >
      Circle
    </div>
  );
}
