import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layoutes/MainLayouts";
import Home from "../Components/Home";
import AuthLayouts from "../Layoutes/AuthLayouts";
import SignIn from "../auth/SignIn";
import SignUp from "../auth/SignUp";
import SendAParcel from "../Components/SendAParcel";
import Coverage from "../Components/Coverage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/coverage",
        element: <Coverage />,
        loder: () => fetch("/serviceCenters.json"),
      },
      {
        path: "/sendAParcel",
        element: <SendAParcel />,
      },
    ],
  },
  {
    path: "/",
    element: <AuthLayouts />,
    children: [
      {
        path: "/signIn",
        element: <SignIn />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
    ],
  },
]);

export default router;
