
import { Link } from "react-router-dom";
import logo from "../../assets/fuad.jpg"
import { MdOutlineMenu } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
const links =[
    {
        id: 1,
        name: "Home",
        path: "/"
    },
    {
        id: 2,
        name: "About",
        path: "/about"
    },
    {
        id: 3,
        name: "Portfolio",
        path: "/portfolio"
    },
    {
        id: 4,
        name: "Exprience",
        path: "/experience"
    },
    {
        id: 5,
        name: "Contact",
        path: "/contact"
    }

]
const Header = () => {
    const [menu, setMenu] = useState(false);

    return (
        <nav className="mx-auto px-4 md:px-12 font-mono shadow-md py-2 fixed top-0 left-0 right-0 bg-white">
            <div className="flex justify-between items-center">
                <div className="flex gap-4 items-center">
                    <div>
                        <img src={logo} alt="" className="h-16 w-16 rounded-full"/>
                    </div>
                    <div>
                        <h1 className="font-semibold text-xl font-mono cursor-pointer"><span className="text-green-500">L</span>ichu</h1>
                        <p className="text-sm font-semibold font-mono">Web Developer</p>
                    </div>
                </div>
                <div>
                {/* Desktop navber */}
                <div className="hidden md:flex gap-5 font-semibold">
                    {
                        links.map((link) => (<Link to={link.path} key={link.id} className="hover:border-green-600 hover:border-b-2 hover:text-green-500 hover:scale-105 duration-200">{link.name}</Link>))
                    }
                </div>
                {/* menu optation */}
                <div onClick={() => setMenu(!menu)} className="md:hidden">
                        {
                        menu ? <RxCross2 size={24}/> : <MdOutlineMenu size={24}/> 
                        }
                </div>
                </div>
            </div>
                {/* Monbile Navber  */}
                {
                    menu && (
                <div className="md:hidden flex-col flex items-center justify-center space-y-3 bg-slate-200 py-4 my-3 rounded-lg font-semibold">
                    {
                        links.map((link) => (<Link to={link.path} key={link.id} className="hover:border-green-600 hover:border-b-2 hover:text-green-500 hover:scale-105 duration-200">{link.name}</Link>))
                    }
                </div>
                    )
                }
        </nav>
    );
};

export default Header;