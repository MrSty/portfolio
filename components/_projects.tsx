"use client"
import ProjectCards from "./reusables/_projects_card";
import imageGC from "@/assets/images/gymcheckp.png"
import { SiKotlin, SiMysql, SiPhp, SiFirebase } from "react-icons/si";

const projects = [
    {
        title:'GymCheck',
        description:'Mobile application for managing clients of different gyms.',
        image:imageGC,
        icons:[SiKotlin, SiPhp, SiMysql]
    },
    {
        title:'ForaNeo',
        description:'Mobile application for cheap rental apartments to students.',
        image:imageGC,
        icons:[SiKotlin, SiFirebase]
    },
]

const Projects = () => {
    return (
        <div className="flex flex-col mt-28 justify-center items-center bg-secondary rounded-3xl text-fourth" id="projects">
            <h2 className="text-2xl py-10 mt-4 font-black ">Projects</h2>
            <div className="flex w-full flex-col px-36 py-5">
                <p className="text-lg">Here are some of my personal projects, some of which are university projects and others of my own interest. The university projects have helped me to develop my technical skills and learn about different areas of engineering, while the personal projects have allowed me to explore my interests and develop my own ideas.</p>
            </div>
            <div className="grid grid-cols-2 w-fit items items-start gap-7 mt-10">
                {
                    projects.map((element, index)=>(
                        <ProjectCards image={element.image} icon={element.icons} title={element.title} description={element.description} key={index}/>
                    ))
                }
            </div>
        </div>
    );
}
export default Projects;