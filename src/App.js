import logo from "./logo.svg";
import "./App.css";
// import HomePage from "./containers/HomeTemplate/HomePage";
// import AboutPage from "./containers/HomeTemplate/AboutPage";
import React from "react";
// import ListMoviePage from "./containers/HomeTemplate/ListMoviePage";
import PageNotFound from "./containers/PageNotFound";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {renderRouteHome, renderRouteAdmin } from "./route";
import Navbar from "./containers/HomeTemplate/_component/Navbar";
import NavbarAdmin from "./containers/AdminTemplate/_component/Navbar";

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
