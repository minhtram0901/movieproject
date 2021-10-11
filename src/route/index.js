import HomePage from "./../containers/HomeTemplate/HomePage";
import AboutPage from "../containers/HomeTemplate/AboutPage";
import ListMoviePage from "../containers/HomeTemplate/ListMoviePage";
import { Route } from "react-router-dom";
import DetailMoviePage from "../containers/HomeTemplate/DetailMoviePage";
import Dashboard from "../containers/AdminTemplate/DashboardPage";
import AddUser from "../containers/AdminTemplate/AddUserPage";
import HomeTemplate from "../containers/HomeTemplate";
import AdminTemplate from "../containers/AdminTemplate";
import HocPage from "../containers/HomeTemplate/HocPage";
import RenderProps from "../containers/HomeTemplate/RenderPropsPage";
import HooksPage from "../containers/HomeTemplate/HooksPage";

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
  {
    //định nghĩa các prop của route
    exact: false, //không truyền prop exact
    path: "/hoc",
    component: HocPage,
  },
  {
    //định nghĩa các prop của route
    exact: false, //không truyền prop exact
    path: "/render-props",
    component: RenderProps,
  },
  {
    //định nghĩa các prop của route
    exact: false, //không truyền prop exact
    path: "/hooks",
    component: HooksPage,
  },
];
const routeAdmin = [
  //object cho Dashboard
  {
    //định nghĩa các prop của route
    exact: true, //có truyền prop exact
    path: "/admin",
    component: Dashboard,
  },
  //object cho AddUser
  {
    //định nghĩa các prop của route
    exact: false, //có truyền prop exact
    path: "/admin/add-user",
    component: AddUser,
  },
];

export function renderRouteHome() {
  return routeHome.map((route, index) => {
    return (
      <HomeTemplate
        key={index}
        exact={route.exact}
        path={route.path}
        Component={route.component}
      />
    );
  });
}

export function renderRouteAdmin() {
  return routeAdmin.map((route, index) => {
    return (
      <AdminTemplate
        key={index}
        exact={route.exact}
        path={route.path}
        Component={route.component}
      />
    );
  });
}
