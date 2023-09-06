import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./Routes";

function App() {
  // const router = createBrowserRouter([...routes()]);
  return <RouterProvider router={router} />;
}

export default App;
