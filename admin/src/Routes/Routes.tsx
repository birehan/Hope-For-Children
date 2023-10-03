import { createBrowserRouter } from "react-router-dom";
import Login from "../components/common/Login";
import Register from "../components/common/Register";
import NotFoundPage from "../components/common/NotFoundPage";

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
