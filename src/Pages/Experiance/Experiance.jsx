import img1 from "../../assets/daisy.jpg";
import img2 from "../../assets/express.webp";
import img3 from "../../assets/html.jpeg";
import img4 from "../../assets/java.webp";
import img5 from "../../assets/javascript.png";
import img6 from "../../assets/mongo.jpg";
import img7 from "../../assets/tailwind.svg.png";
import img8 from "../../assets/spring.png";
import img9 from "../../assets/node.webp";
import img10 from "../../assets/react.jpeg";

const images = [
    {
        id:1,
        name: "Daisy Ui",
        img: img1
    },
    {
        id:2,
        name: "Express",
        img: img2
    },
    {
        id:3,
        name: "Html",
        img: img3
    },
    {
        id:4,
        name: "Java",
        img: img4
    },
    {
        id:5,
        name: "JavaScript",
        img: img5
    },
    {
        id:6,
        name: "MongoDb",
        img: img6
    },
    {
        id:7,
        name: "Tailwind",
        img: img7
    },
    {
        id:8,
        name: "Spring",
        img: img8
    },
    {
        id:9,
        name: "Node.js",
        img: img9
    },
    {
        id:10,
        name: "React.js",
        img: img10
    },
]

const Experiance = () => {
    return (
        <div className="mt-24 px-4 space-y-6 md:space-y-10">
            {/* header */}
            <div className=" text-center space-y-2">
                <h1 className="text-4xl font-mono font-bold">Espriance</h1>
                <p>I've more than 2 years of experiance in below technologies.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {
                    images.map((image) =>(
                        <div key={image.id} className=" space-y-2 items-center justify-center flex flex-col border-2 p-2 rounded-xl hover:scale-110 duration-200">
                                <img src={image.img} alt="" className="w-16 h-16 rounded-full"/>
                                <h3 className="text-xl font-semibold">{image.name}</h3>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Experiance;