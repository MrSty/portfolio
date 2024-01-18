"use client";
interface ProjectCardsProps {
    classname?: string;
    image: StaticImageData;
    title?: string;
    description?: string;
    proyect_url?: string;
    live_url?: string;
    hideProyectBtn?: boolean;
    hideLiveBtn?: boolean;
    hideMoreInfoBtn?: boolean;
    isExpedoc?: boolean;
    icon: IconType[];
}
import emailjs from '@emailjs/browser';
import imageExpedocAdminDash from "@/assets/images/expedoc-dashboard-admin.png";
import imageExpedocTeachDash from "@/assets/images/expedoc-dashboard-teach.png";
import imageExpedocDpt from "@/assets/images/expedoc-department.png";
import imageExpedocAcademic from "@/assets/images/expedoc-academic.png";
import imageExpedocAcademicform from "@/assets/images/expedoc-academic-form.png";
import imageExpedocUsers from "@/assets/images/expedoc-users.png";
import imageExpedocUserForm from "@/assets/images/expedoc-users-form.png";
import imageExpedocTeachers from "@/assets/images/expedoc-teacher.png";
import imageExpedocComments from "@/assets/images/expedoc-comments-expedient.png";
import imageExpedocComments2 from "@/assets/images/expedoc-comments-feedback.png";
import React, { useState, useRef } from "react";
import { Card, CardBody, CardFooter, Chip, Tooltip } from "@nextui-org/react";
import Image, { StaticImageData } from "next/image";
import { Textarea, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input, Link } from "@nextui-org/react";
import { IconType } from "react-icons";
import { FaCode, FaEye } from "react-icons/fa";
import { CgDetailsMore } from "react-icons/cg";
import { twMerge } from "tailwind-merge";

const ProjectCards: React.FC<ProjectCardsProps> = ({
    classname,
    image,
    title,
    description,
    proyect_url,
    live_url,
    hideProyectBtn,
    hideLiveBtn,
    hideMoreInfoBtn,
    isExpedoc,
    icon
}) => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const form = useRef();


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
                    <Image src={image} height={200} alt="imagen gymcheck" className="w-auto " />
                </CardBody>
                <CardFooter className="flex flex-col gap-2 w-full items-start">
                    <h2 className="font-black text-white text-xl font-sans">{title != null ? title : 'Title'}</h2>
                    <p className="text-white font-bold">{description != null ? description : 'Description'}</p>
                    <ul className="flex flex-row gap-3 mt-1 w-full">
                        {
                            Array.isArray(icon) ? (icon as Array<React.ElementType>).map((IconComponent, index) => (
                                <Chip
                                    className="flex items-center px-0 py-5 justify-center "
                                    key={index}
                                    startContent={<IconComponent className="text-[1.5rem] ml-3 text-fourth" key={index} />}
                                    variant="solid"
                                    radius='sm'
                                    color="secondary"
                                ></Chip>
                            )) : 'no'
                        }
                        <li className="flex justify-end gap-[5%] w-full">
                            <Tooltip content='See code' showArrow={true} className="bg-primary">
                                <Button className={`bg-fourth text-secondary hover:bg-secondary hover:text-fourth ${hideProyectBtn == null ? '' : 'hidden'}`} isIconOnly onClick={() => sendTo(proyect_url)}>
                                    <FaCode />
                                </Button>
                            </Tooltip>

                            <Tooltip content='Show live' showArrow={true} className="bg-primary">
                                <Button className={`bg-fourth text-secondary hover:bg-secondary hover:text-fourth ${hideLiveBtn == null ? '' : 'hidden'}`} isIconOnly onClick={() => sendTo(live_url)}>
                                    <FaEye />
                                </Button>
                            </Tooltip>
                            <Tooltip content='More info' showArrow={true} className="bg-primary">
                                <Button className={`bg-fourth text-secondary hover:bg-secondary text-lg hover:text-fourth ${hideMoreInfoBtn == null ? '' : 'hidden'}`} isIconOnly onClick={isExpedoc ? onOpen : () => sendTo('https://www.google.com')}>
                                    <CgDetailsMore />
                                </Button>
                            </Tooltip>
                        </li>
                    </ul>
                </CardFooter>
            </Card>

            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                size="5xl"
                scrollBehavior='inside'
                classNames={{
                    body: "py-6",
                    base: "border-[#292f46] bg-[#2D6E7E] dark:bg-[#2D6E7E] text-[#C6DE41]",
                    header: "",
                    footer: "",
                    closeButton: "hover:bg-red-200 active:bg-white/10 text-red-500 hidden md:flex text-xl",
                }}
            >
                <form ref={form}>
                    <ModalContent>
                        {(onClose) => (
                            <>
                                <ModalHeader className="flex flex-col gap-1"><p className='font-sans font-black text-4xl'>{title + ' ' + 'information.'}</p></ModalHeader>
                                <ModalBody>
                                    <h3 className='font-bold font-sans text-3xl'>Dashboard</h3>
                                    <p className='font-bold'>The system is set up with two different dashboard views, one specifically tailored for users with administrator roles and another more standard one for those identified as teachers or regular users.</p>
                                    <p className='font-sans font-black mt-5 text-xl'>Admin Dashboard</p>
                                    <Image className='pointer-events-none' src={imageExpedocAdminDash} alt='expedoc admin dashboard'></Image>
                                    <p className='font-sans font-black mt-5 text-xl'>Teacher Dashboard</p>
                                    <Image className='pointer-events-none' src={imageExpedocTeachDash} alt='expedoc admin dashboard'></Image>
                                    <h3 className='font-bold font-sans text-3xl'>Department</h3>
                                    <p className='font-bold'>In each department, there are numerous academic areas, so the departments encompass a variety of academic fields.</p>
                                    <Image className='pointer-events-none' src={imageExpedocDpt} alt='expedoc department'></Image>
                                    <h3 className='font-bold font-sans text-3xl'>Academic areas</h3>
                                    <Image className='pointer-events-none' src={imageExpedocAcademic} alt='expedoc department'></Image>
                                    <Image className='pointer-events-none' src={imageExpedocAcademicform} alt='expedoc department'></Image>
                                    <h3 className='font-bold font-sans text-3xl'>Users</h3>
                                    <Image className='pointer-events-none' src={imageExpedocUsers} alt='expedoc department'></Image>
                                    <Image className='pointer-events-none' src={imageExpedocUserForm} alt='expedoc department'></Image>
                                    <h3 className='font-bold font-sans text-3xl'>Teachers</h3>
                                    <Image className='pointer-events-none' src={imageExpedocTeachers} alt='expedoc department'></Image>
                                    <h3 className='font-bold font-sans text-2xl'>Expedient</h3>
                                    <p className='font-bold'>The expedient contains all the important information about the teachers, both personal and professional.</p>
                                    <video autoPlay loop poster="/videos/expedoc-search.mp4">
                                        <source src="/videos/expedoc-search.mp4" type="video/mp4" />
                                        Tu navegador no soporta el elemento de video.
                                    </video>
                                    <h3 className='font-bold font-sans text-2xl'>Comments</h3>
                                    <p className='font-bold'>
                                        It is possible to provide feedback comments and respond to them.</p>
                                    <Image className='pointer-events-none' src={imageExpedocComments} alt='expedoc department'></Image>
                                    <Image className='pointer-events-none' src={imageExpedocComments2} alt='expedoc department'></Image>
                                    <h3 className='font-bold font-sans text-2xl'>Settings</h3>
                                    <p className='font-bold'>Settings include accessibility configurations, such as dark mode, dyslexia-friendly font, font size, high contrast, square borders, and user credentials, which allow changing user credentials.</p>
                                    <video autoPlay loop poster="/videos/expedoc-settings.mp4">
                                        <source src="/videos/expedoc-settings.mp4" type="video/mp4" />
                                        Tu navegador no soporta el elemento de video.
                                    </video>
                                </ModalBody>
                                <ModalFooter>
                                    <Button className="text-red-700 font-bold font-sans bg-red-300 hover:bg-red-400" onPress={onClose}>
                                        Close
                                    </Button>
                                </ModalFooter>
                            </>
                        )}
                    </ModalContent>
                </form>
            </Modal>
        </div>
    );
}
export default ProjectCards;