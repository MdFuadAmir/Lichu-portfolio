import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Contact from "../Pages/Contact/Contact";
import Home from "../Components/Home/Home";
import About from "../Pages/About/About";
import Experiance from "../Pages/Experiance/Experiance";
import Projects from "../Pages/Projects/Projects";


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
                path: '/projects',
                element: <Projects/>
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