import logo from "./logo.svg";
import "./App.css";
// import HomePage from "./containers/HomeTemplate/HomePage";
// import AboutPage from "./containers/HomeTemplate/AboutPage";
import React from "react";
// import ListMoviePage from "./containers/HomeTemplate/ListMoviePage";
import PageNotFound from "./containers/PageNotFound";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {renderRouteHome } from "./route";
import Navbar from "./containers/HomeTemplate/_component/Navbar";
// import {Navbar} from "./containers/HomeTemplate/_component/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Switch>
        {/* Home Page: localhost:3000 */}
        {/* dấu "/" tương đương "localhost:3000 */}
        {/* bộ định tuyến sẽ gọi trang HomePage với đường dẫn "/" */}
        {/* <Route exact path="/" component={HomePage} /> */}
        {/* About Page: localhost:3000/about */}
        {/* <Route path="/about" component={AboutPage} /> */}
        {/* List Movie Page: localhost:3000/list-movie */}
        {/* <Route path="/list-movie" component={ListMoviePage} /> */}
        {renderRouteHome()}
        {/* Trang không tồn tại */}
        <Route path="" component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
