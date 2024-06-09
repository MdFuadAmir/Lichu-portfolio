
import img from "../../assets/you-removebg-preview.png"

const About = () => {
    return (
        <div className="mt-24 px-4 space-y-6 md:space-y-10">
            {/* about header */}
            <div className=" text-center space-y-2">
                <h1 className="text-4xl font-mono font-bold">About Us</h1>
                <p>Hello, I am Lichu, a passionate Web developer with a keen eye for MERN Stack .</p>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-6">
                {/* right side about */}
                <div className="md:w-1/2 items-center flex justify-center">
                    <img src={img} alt="" className="h-[350px] w-[350px]"/>
                </div>
                {/* left side about */}
                <div className="md:w-1/2 space-y-3">
                    <div>
                        <h1 className="text-xl font-bold font-serif text-green-500">Education & Training</h1>
                        <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam quod, sapiente maxime, hic earum ad voluptates accusamus id ducimus.</p>
                    </div>
                    <div>
                        <h1 className="text-xl font-bold font-serif text-green-500">Skills & Expertise</h1>
                        <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores saepe nemo quis odio molestiae tempora explicabo rerum, deleniti ipsam iure!</p>
                    </div>
                    <div>
                        <h1 className="text-xl font-bold font-serif text-green-500">Professional Experience</h1>
                        <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente minus quidem, minima numquam atque delectus.</p>
                    </div>
                    <div>
                        <h1 className="text-xl font-bold font-serif text-green-500">Achievements & Awards</h1>
                        <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, nemo?</p>
                    </div>
                    <div>
                        <h1 className="text-xl font-bold font-serif text-green-500">Mission Statement</h1>
                        <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quas repellat nihil sed cupiditate earum. Veniam?</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;