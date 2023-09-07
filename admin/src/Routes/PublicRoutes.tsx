import Login from "../components/Login";
import NotFoundPage from "../components/NotFoundPage";
import Register from "../components/Register";

export default function PublicRoutes() {
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
