import image from "../../assets/you.webp"
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { TbBrandReact } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMongodb } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { Link } from "react-router-dom";
import { ReactTyped } from "react-typed";

const Hero = () => {
    return (
        <div className="px-4 md:px-12 mx-auto mt-20">
            <div className="flex flex-col-reverse md:flex-row gap-6">
                {/* left side */}
                <div className="md:w-1/2  md:mt-24 space-y-6  md:space-y-12">
                    <div className=" space-y-2">
                    <p className="text-lg font-semibold font-serif">Welcome to my Feed</p>
                    <div className="flex space-x-1 text-2xl md:text-4xl">
                    <h1 className="font-bold">Hello,I'm a</h1>
                    <ReactTyped
                        className="text-red-600 font-bold"
                        strings={["Developer", "Programmer", "coder"]}
                        typeSpeed={40}
                        backSpeed={50}
                        loop={true}
                    />
                    </div>
                    </div>
                    <p className="text-justify text-sm md:text-lg">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam nisi temporibus aut quasi asperiores repudiandae tempore. Nulla perferendis architecto vitae, voluptates magni aliquid, aperiam quas assumenda laborum fuga  aut quasi asperiores repudiandae tempore. Nulla perferendis architecto vitae, cumque. Et.</p>

                    <div className="flex flex-col lg:flex-row items-center justify-around md:space-y-0 space-y-6">
                        <div className="space-y-2 text-center">
                            <h3 className="text-xl font-bold font-serif">Available on</h3>
                            <div className="flex gap-4">
                                <Link to='/'><FaFacebookSquare size={26}/></Link>
                                <Link to='/'><FaLinkedin size={26}/></Link>
                                <Link to='/'><FaYoutube size={26}/></Link>
                                <Link to='/'><FaTelegram size={26}/></Link>
                            </div>
                        </div>
                        <div className="space-y-2 text-center">
                            <h3 className="text-xl font-bold font-serif">Current working on</h3>
                            <div className="flex gap-4">
                            <Link to='/'><SiMongodb size={26}/></Link>
                            <Link to='/'><IoLogoJavascript size={26}/></Link>
                            <Link to='/'><TbBrandReact size={26}/></Link>
                            <Link to='/'><SiTailwindcss size={26}/></Link>
                            </div>
                        </div>
                    </div>

                </div>
                {/* right side */}
                <div className="md:w-1/2 flex justify-center items-center my-4 md:my-24">
                    <img src={image} alt=""  className=" w-[300px] h-[300px] md:h-[450px] md:w-[450px]"/>
                </div>
            </div>
        </div>
    );
};

export default Hero;