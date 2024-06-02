import { Link } from "react-router-dom";
import Nav from "../Nav";



const Header = () => {
    return (
        <header className="py-8 xl:px-12 text-white">
            <div className="container mx-auto flex justify-between items-center">
                {/* logo */}
                <Link to='/'>
                    <h1 className="text-4xl font-bold">
                    Lichu<span className="text-accent">.</span>
                    </h1>
                </Link>

                {/* desktop nav hire me button*/}
                <div className="hidden xl:flex items-center gap-8">
                <Nav />
                <Link to='/contact'><button className="btn btn-accent">Hire me</button></Link>
                </div>
                {/* mobile navber */}
                <div className="xl:hidden">
                     mobile nav
                </div>
            </div>
        </header>
    );
};

export default Header;