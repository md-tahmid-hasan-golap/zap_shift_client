import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layoutes/MainLayouts";
import Home from "../Components/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

export default router;
