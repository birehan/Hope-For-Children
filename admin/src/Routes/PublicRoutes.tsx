import Login from "../components/account/Login";
import NotFoundPage from "../components/common/NotFoundPage";
import Register from "../components/common/Register";

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
