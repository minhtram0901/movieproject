import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import Navbar from "./_component/Navbar";


function LayoutAdmin(props) {
  return (
    <>
      <Navbar />
      {props.children}
    </>
  );
}

export default function AdminTemplate({Component, ...props}) {
  return (
   <Route
    {...props}
    render = {(propsRoute) => {
      // console.log("propsRoute", propsRoute);
      return (
      <LayoutAdmin>
        <Component {...propsRoute}/>
      </LayoutAdmin>)
    }}
   />
  );
}