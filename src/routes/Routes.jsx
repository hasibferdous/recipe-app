import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import About from "../pages/About";
import Home from "../pages/Home";
import Contact from "../pages/Contact";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children: [
        {
            index: true,
            element: <Home/>,
        },
        {
            path: "/about",
            element: <About/>,
        },
        {
            path: "/contact",
            element: <Contact/>,
        }
      ]
    },
  ]);

export default router;