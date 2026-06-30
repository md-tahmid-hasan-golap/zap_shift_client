import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Components/Home";
import AuthLayouts from "../Layouts/AuthLayouts";
import Login from "../Components/Login";
import Register from "../Components/Register";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayouts,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: "/",
    Component: AuthLayouts,
    children: [
      {
        path: "/signin",
        Component: Login,
      },
      {
        path: "/signup",
        Component: Register,
      },
    ],
  },
]);

export default router;
