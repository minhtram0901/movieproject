import React, { Fragment } from "react";
import { Route , Redirect} from "react-router-dom";
import Navbar from "./_component/Navbar";

function LayoutAdmin(props) {
  return (
    <>
      <Navbar />
      {props.children}
    </>
  );
}

export default function AdminTemplate({ Component, ...props }) {
  return (
    <Route
      {...props}
      render={(propsRoute) => {
        if (localStorage.getItem("accessToken")) {
          return (
            <LayoutAdmin>
              <Component {...propsRoute} />
            </LayoutAdmin>
          );
        }

        //redirect về /auth
        return <Redirect to="/auth"/>;
      }}
    />
  );
}
