import About from "../../Pages/About/About";
import Contact from "../../Pages/Contact/Contact";
import Experiance from "../../Pages/Experiance/Experiance";
import Projects from "../../Pages/Projects/Projects";
import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";


const Home = () => {
    return (
        <div>
            <Hero/>
            <About/>
            <Projects/>
            <Experiance/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Home;