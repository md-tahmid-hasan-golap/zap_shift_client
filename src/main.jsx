import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./Routes/Router";
import FirebaseAuthProvider from "./firebase/FirebaseAuthProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FirebaseAuthProvider>
      <RouterProvider router={router}></RouterProvider>{" "}
    </FirebaseAuthProvider>
  </StrictMode>,
);
