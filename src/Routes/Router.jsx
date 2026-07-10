import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Components/Home";
import AuthLayouts from "../Layouts/AuthLayouts";
import Login from "../Components/Login";
import Register from "../Components/Register";
import Coverage from "../Components/Coverage";
import SendAParcel from "../Components/SendAParcel";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayouts,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/coverage",
        element: <Coverage />,
        loader: () => fetch("/serviceCenters.json"),
      },
      {
        path: "/send-a-parcel",
        element: <SendAParcel />,
        loader: () => fetch("/serviceCenters.json"),
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
