import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Login";
import Register from "../components/Register";
import NotFoundPage from "../components/NotFoundPage";

function RoutesPaths() {
  return [
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "*",
      element: <NotFoundPage />,
    },
  ];
}
const router = createBrowserRouter([...RoutesPaths()]);

export default router;
