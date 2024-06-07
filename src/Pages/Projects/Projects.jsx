import image1 from "../../assets/mongo.jpg"
import image2 from "../../assets/express.webp"
import image3 from "../../assets/java.webp"
import image4 from "../../assets/react.jpeg"
import image5 from "../../assets/node.webp"
import image6 from "../../assets/phython.svg.png"

const projectList =[
    {
        id: 1,
        name: "MongoDB",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.my project dolor sit amet consectetur adipisicing elit. Fugit",
        img: image1,
        video: <button className="btn btn-outline btn-info">Video</button>,
        source: <button className="btn btn-outline btn-success">Source Code</button>
    },
    {
        id: 2,
        name: "Express",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.my project dolor sit amet consectetur adipisicing elit. Fugit",
        img: image2,
        video: <button className="btn btn-outline btn-info">Video</button>,
        source: <button className="btn btn-outline btn-success">Source Code</button>
    },
    {
        id: 3,
        name: "Java",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.my project dolor sit amet consectetur adipisicing elit. Fugit",
        img: image3,
        video: <button className="btn btn-outline btn-info">Video</button>,
        source: <button className="btn btn-outline btn-success">Source Code</button>
    },
    {
        id: 4,
        name: "React.js",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.my project dolor sit amet consectetur adipisicing elit. Fugit",
        img: image4,
        video: <button className="btn btn-outline btn-info">Video</button>,
        source: <button className="btn btn-outline btn-success">Source Code</button>
    },
    {
        id: 5,
        name: "Node.js",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.my project dolor sit amet consectetur adipisicing elit. Fugit",
        img: image5,
        video: <button className="btn btn-outline btn-info">Video</button>,
        source: <button className="btn btn-outline btn-success">Source Code</button>
    },
    {
        id: 6,
        name: "Python",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.my project dolor sit amet consectetur adipisicing elit. Fugit",
        img: image6,
        video: <button className="btn btn-outline btn-info">Video</button>,
        source: <button className="btn btn-outline btn-success">Source Code</button>
    },
]

const Projects = () => {
    return (
        <div className="mt-24 px-4">
            <div>
                <div className="text-center space-y-1">
                    <h1 className="text-3xl md:text-4xl font-semibold font-mono">Lichus Projects</h1>
                    <p className="text-sm">my project dolor sit amet consectetur adipisicing elit. Fugit, ea!</p>
                </div>
                {/* projects list */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                    {
                        projectList.map((project) => (
                            <div key={project.id} className="border p-3 rounded-lg">
                                    <div className=" space-y-2">
                                        <img src={project.img} alt="" className="w-24 h-24 rounded-full border-2 p-1"/>
                                        <h1 className="text-2xl font-bold font-mono">{project.name}</h1>
                                        <p className="text-sm">{project.description}</p>
                                    </div>
                                    <div className="flex justify-between mt-4">
                                        {project.video}
                                        {project.source}

                                    </div>
                            </div>
                        ))
                    }

                </div>
            </div>
            
        </div>
    );
};

export default Projects;