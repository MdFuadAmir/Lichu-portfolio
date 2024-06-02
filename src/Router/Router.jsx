import { createBrowserRouter } from "react-router-dom";
import Services from "../Pages/Services/Services";
import Root from "../Root/Root";
import Resume from "../Pages/Resume/Resume";
import Work from "../Pages/Work/Work";
import Contact from "../Pages/Contact/Contact";
import Home from "../Components/Home/Home";


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
                path: '/services',
                element: <Services/>
            },
            {
                path: '/resume',
                element: <Resume/>
            },
            {
                path: '/work',
                element: <Work/>
            },
            {
                path: '/contact',
                element: <Contact/>
            },
        ]
    }

])

export default router;