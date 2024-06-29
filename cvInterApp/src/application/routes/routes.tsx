import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import About from "../pages/About";
// import Contact from "../pages/Contact";
import Register from "../auth/components/Register";
import Login from "../auth/components/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/login",
    element: <Login />
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
