"use client"
import ProjectCards from "./reusables/_projects_card";
import imageGC from "@/assets/images/gymcheckp.png";
import imageIW from "@/assets/images/833shots_so.png";
import imageED from "@/assets/images/fadsfasd.png";
import imageFN from "@/assets/images/531shots_so.png";
import { SiKotlin, SiMysql, SiPhp, SiFirebase, SiReact, SiNextdotjs, SiCsharp, SiDotnet, SiMicrosoftsqlserver } from "react-icons/si";

const projects = [
    {
        title:'GymCheck',
        description:'Mobile application for managing clients of different gyms.',
        image:imageGC,
        icons:[SiKotlin, SiPhp, SiMysql],
        proyect_url:'https://github.com/MrSty/GymCheck'
    },
    {
        title:'ForaNeo',
        description:'Mobile application for cheap rental apartments to students.',
        image:imageFN,
        icons:[SiKotlin, SiFirebase],
        proyect_url:'https://github.com/MrSty/Fora-Neo'
    },
    {
        title:'Innova-Web',
        description:'Page for a product of a small company which I wanted to make a presentation about who they are and about the product.',
        image:imageIW,
        icons:[SiNextdotjs,SiReact],
        proyect_url:'https://github.com/MrSty/Innova-web'
    },
    {
        title:'Expedoc',
        description:'Web application for a university that records files of professors with personal and professional information.',
        image:imageED,
        icons:[SiCsharp, SiDotnet, SiMicrosoftsqlserver],
        proyect_url:'https://github.com/MrSty/EXPEDOC'
    },
]

const Projects = () => {
    return (
        <section className="flex flex-col mt-14 justify-center items-center bg-secondary rounded-3xl text-fourth" id="projects">
            <h2 className="text-2xl py-10 mt-4 font-black ">Projects</h2>
            <div className="flex w-full flex-col px-10 lg:px-36 py-5">
                <p className="text-lg">Here are some of my personal projects, some of which are university projects and others of my own interest. The university projects have helped me to develop my technical skills and learn about different areas of engineering, while the personal projects have allowed me to explore my interests and develop my own ideas.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 w-fit items items-start gap-7 my-10">
                {
                    projects.map((element, index)=>(
                        <ProjectCards image={element.image} icon={element.icons} title={element.title} proyect_url={element.proyect_url} description={element.description} key={index}/>
                    ))
                }
            </div>
        </section>
    );
}
export default Projects;