
import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import Discover from "../pages/discover/page";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/discover",
    element: <Discover />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
