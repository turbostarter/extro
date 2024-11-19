import ReactDOM from "react-dom/client";
import { RouterProvider, createHashRouter } from "react-router-dom";
import { AI } from "./ai";
import { Login } from "./login";
import { Register } from "./register";

const router = createHashRouter([
  {
    children: [
      {
        path: "ai",
        element: <AI />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />,
);
