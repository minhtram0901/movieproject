import HomePage from "./../containers/HomeTemplate/HomePage";
import AboutPage from "../containers/HomeTemplate/AboutPage";
import ListMoviePage from "../containers/HomeTemplate/ListMoviePage";
import { Route } from "react-router-dom";
import DetailMoviePage from "../containers/HomeTemplate/DetailMoviePage";

const routeHome = [
  //object cho HomePage
  {
    //định nghĩa các prop của route
    exact: true, //có truyền prop exact
    path: "/",
    component: HomePage,
  },
  //object cho AboutPage
  {
    //định nghĩa các prop của route
    exact: false, //không truyền prop exact
    path: "/about",
    component: AboutPage,
  },
  //object cho ListMoviePage
  {
    //định nghĩa các prop của route
    exact: false, //không truyền prop exact
    path: "/list-movie",
    component: ListMoviePage,
  },
  {
    //định nghĩa các prop của route
    exact: false, //không truyền prop exact
    path: "/detail/:id",
    component: DetailMoviePage,
  },
];
const routeAdmin = [];

export function renderRouteHome() {
  return routeHome.map((route, index) => {
    return (
      <Route
        key={index}
        exact={route.exact}
        path={route.path}
        component={route.component}
      />
    );
  });
}
