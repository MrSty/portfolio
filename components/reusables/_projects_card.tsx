"use client";
interface ProjectCardsProps{
    classname?:string;
    image:StaticImageData;
    title?:string;
    description?:string;
    proyect_url:string;
    icon:IconType[];
}
import { Button, Card, CardBody, CardFooter, Chip } from "@nextui-org/react";
import Image, { StaticImageData } from "next/image";
import { IconType } from "react-icons";
import { FaCode } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

const ProjectCards:React.FC<ProjectCardsProps> = ({
    classname,
    image,
    title,
    description,
    proyect_url,
    icon
}) => {

    function sendTo(url: string) {
        window.open(url)
    }


    return (
        <div className={twMerge(
            `   
                flex
                justify-center
                items-center
            `,
            classname
        )}>
            <Card
                isBlurred
                className="border-none bg-terciary h-fit w-[25rem]"
            >
                <CardBody className="p-0 flex flex-col text-ellipsis">
                    <Image src={image} height={200} alt="imagen gymcheck" className="w-auto "/>
                </CardBody>
                <CardFooter className="flex flex-col gap-2 w-full items-start">
                    <h2 className="font-black text-white">{title != null?title:'Title'}</h2>
                    <p className="text-white">{description != null?description:'Description'}</p>
                    <ul className="flex flex-row gap-3 mt-1 w-full">
                        {
                        Array.isArray(icon)? (icon as Array<React.ElementType>).map((IconComponent, index)=>(
                            <Chip
                                className="flex items-center justify-center"
                                key={index}
                                startContent={<IconComponent className="text-[1.5rem] ml-3 text-fourth" key={index}/>}
                                variant="shadow"
                                color="secondary"
                            ></Chip>
                        )):'no'
                        }
                        <li className="flex justify-end w-full">
                            <Button className="bg-fourth text-secondary" isIconOnly  onClick={()=>sendTo(proyect_url)}> 
                                <FaCode/>
                            </Button>
                        </li>
                    </ul>
                </CardFooter>
            </Card>
        </div>
    );
}
export default ProjectCards;