import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    // children: [
    //   { path: "/login", element: <Login /> }
    // ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
