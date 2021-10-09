import logo from "./logo.svg";
import "./App.css";
import React from "react";
import PageNotFound from "./containers/PageNotFound";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {renderRouteHome, renderRouteAdmin } from "./route";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {renderRouteHome()}
        {renderRouteAdmin()}
        {/* Trang không tồn tại */}
        <Route path="" component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
