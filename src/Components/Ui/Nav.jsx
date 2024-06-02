
import { Link } from "react-router-dom";


const links =[
    {
        name: "Home",
        path:"/"
    },
    {
        name: "Services",
        path:"/services"
    },
    {
        name: "Resume",
        path:"/resume"
    },
    {
        name: "Work",
        path:"/work"
    },
    {
        name: " Contact",
        path:"/contact"
    }
]

const Nav = () => {

    return (
        <nav className="flex gap-8">
            {
                links.map((link ,index)=>{
                    return <Link to={link.path} key={index} className=" font-medium capitalize hover:text-accent hover:border-b-2 border-accent transition-all">{link.name}</Link>
                })
            }
        </nav>
    );
};

export default Nav;