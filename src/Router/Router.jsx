import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Contact from "../Pages/Contact/Contact";
import Home from "../Components/Home/Home";
import About from "../Pages/About/About";
import Portfolio from "../Pages/Portfolio/Portfolio";
import Experiance from "../Pages/Experiance/Experiance";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children:[
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/about',
                element: <About/>
            },
            {
                path: '/portfolio',
                element: <Portfolio/>
            },
            {
                path: '/experience',
                element: <Experiance/>
            },
            {
                path: '/contact',
                element: <Contact/>
            },
        ]
    }

])

export default router;