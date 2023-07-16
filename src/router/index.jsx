import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Exclusive from "../pages/Exclusive";
import News from "../pages/News";
import About from "../pages/About";
import Contact from "../pages/Contact";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/exclusive",
        element: <Exclusive />,
    },
    {
        path: "/news",
        element: <News />,
    },
    {
        path: "/about",
        element: <About />,
    },
    {
        path: "/contact",
        element: <Contact />,
    },
]);

export default router;