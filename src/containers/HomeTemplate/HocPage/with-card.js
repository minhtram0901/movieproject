import React from "react";

export default function WithCard(Component) {
  return function(){
    return (
        <div
          className="card text-white bg-secondary"
          style={{ width: "30rem", margin: "auto" }}
        >
          <div className="card-header text-center">Nhân Viên</div>
          <div className="card-body">
              <Component/>
          </div>
          <div className="card-footer text-muted text-center"></div>
        </div>
      );
  }
}
