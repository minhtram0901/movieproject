import React from "react";
import Cat from "./Cat";
import WithMouse from "./WithMouse";

const WrapperMouse = WithMouse(Cat);

class MouseTracker extends React.Component {
  
  render() {
    return (
      <>
      <WrapperMouse/>
      </>
    );
  }
}

export default MouseTracker;
