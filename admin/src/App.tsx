import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import PrivateRoutes from "./Routes/PrivateRoutes";
import PublicRoutes from "./Routes/PublicRoutes";

function App() {
  const { user } = useSelector((state: any) => state.authReducer);

  const router = createBrowserRouter([
    user !== null ? PrivateRoutes() : {},
    ...PublicRoutes(),
  ]);

  return <RouterProvider router={router} />;
}

export default App;
