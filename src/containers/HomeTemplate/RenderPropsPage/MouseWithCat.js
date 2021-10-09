import React, { Component } from "react";
import Cat from "./Cat";
export default class MouseWithCat extends Component {
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = { x: 0, y: 0 };
  }

  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY,
    });
  }

  render() {
    return (
      <div style={{ height: "100vh", cursor:"none" }} onMouseMove={this.handleMouseMove}>
        {/*
              We could just swap out the <p> for a <Cat> here ... but then
              we would need to create a separate <MouseWithSomethingElse>
              component every time we need to use it, so <MouseWithCat>
              isn't really reusable yet.
            */}
        <Cat mouse={this.state} />
      </div>
    );
  }
}
