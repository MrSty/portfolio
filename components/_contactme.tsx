"use client"
import imageGC from "@/assets/images/gymcheckp.png";
import imageIW from "@/assets/images/833shots_so.png";
import imageED from "@/assets/images/fadsfasd.png";
import emailjs from '@emailjs/browser';
import { SiKotlin, SiMysql, SiPhp, SiFirebase, SiReact, SiNextdotjs, SiCsharp, SiDotnet, SiMicrosoftsqlserver, SiLinkedin, SiWhatsapp, SiGithub } from "react-icons/si";
import { motion } from "framer-motion";
import { FaFilePdf, FaLock, FaMailBulk } from "react-icons/fa";
import React, { useState, useRef } from "react";
import { Textarea, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input, Link } from "@nextui-org/react";

const projects = [
    {
        title: 'GymCheck',
        description: 'Mobile application for managing clients of different gyms.',
        image: imageGC,
        icons: [SiKotlin, SiPhp, SiMysql]
    },
    {
        title: 'ForaNeo',
        description: 'Mobile application for cheap rental apartments to students.',
        image: imageGC,
        icons: [SiKotlin, SiFirebase]
    },
    {
        title: 'Innova-Web',
        description: 'Page for a product of a small company which I wanted to make a presentation about who they are and about the product.',
        image: imageIW,
        icons: [SiNextdotjs, SiReact]
    },
    {
        title: 'Expedoc',
        description: 'Web application for a university that records files of professors with personal and professional information.',
        image: imageED,
        icons: [SiCsharp, SiDotnet, SiMicrosoftsqlserver]
    },
]

const ContactMe = () => {

    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const form = useRef();

    const sendEmail = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        emailjs.sendForm('service_8a4rwwc', 'template_fgkqh85', form.current, '_k-oUMoI-VJRzO1OD')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    function send(where: string) {
        if (where === 'wha') {
            window.open("https://wa.me/50581672250");
        } else if (where === 'linkd') {
            window.open("https://www.linkedin.com/in/marcelo-rivera-soto-147a59245/", "Documento PDF");
        } else if (where === 'github') {
            window.open("https://github.com/MrSty");
        } else if (where === 'cv') {
            window.open("/docs/prueba.pdf");
        }
    }

    return (

        <section className="flex
        mt-14
        mb-5
        h-[25rem]
        w-full
        gap-4
        overflow-hidden" id="contact">
            <div
                className="
                    relative
                    rounded-3xl
                    overflow-hidden
                    w-full
                "
            >
                <div className="absolute rounded-3xl h-[25rem] w-full opacity-70 inline-block bg-terciary overflow-hidden">
                    <motion.div
                        className="rounded-full bg-fourth h-96 w-96 absolute -right-14 -top-80 blur-3xl"
                    />
                    <motion.div
                        className="rounded-full bg-secondary h-96 w-96 absolute -left-14 -bottom-80 blur-3xl"
                    />
                </div>
                <div className="flex flex-col h-full absolute w-full items-center">
                    <h2 className="text-fourth mt-10 font-black text-[2rem] md:text-[3rem] font-sans">Contact</h2>
                    <p className="mx-5 mt-2">You can get more info about me below, also you can mail me :)</p>
                    <div className="flex flex-col-reverse md:flex-row md:pl-8 mt-20 gap-6 items-center">
                        <Button onPress={onOpen} className="bg-fourth text-secondary font-black w-44 rounded-3xl" size="lg" variant="shadow">
                            Send a mail
                        </Button>
                        <div className="flex gap-6 items-center">
                            <Button className="text-fourth text-lg rounded-full hover:text-secondary hover:bg-fourth" size="lg" color="secondary" isIconOnly variant="shadow" onClick={() => send('linkd')}>
                                <SiLinkedin />
                            </Button>
                            <Button className="text-fourth text-lg rounded-full hover:text-secondary hover:bg-fourth" size="lg" color="secondary" isIconOnly variant="shadow" onClick={() => send('wha')}>
                                <SiWhatsapp />
                            </Button>
                            <Button className="text-fourth text-lg rounded-full hover:text-secondary hover:bg-fourth" size="lg" color="secondary" isIconOnly variant="shadow" onClick={() => send('github')}>
                                <SiGithub />
                            </Button>
                            <Button className="text-fourth text-lg rounded-full hover:text-secondary hover:bg-fourth" size="lg" color="secondary" isIconOnly variant="shadow" onClick={() => send('cv')}>
                                <FaFilePdf />
                            </Button>
                        </div>

                    </div>
                </div>
            </div>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placement="top-center"
                size="2xl"
                classNames={{
                    body: "py-6",
                    backdrop: "bg-[#153B44]/60 backdrop-opacity-40",
                    base: "border-[#292f46] bg-[#2D6E7E] dark:bg-[#2D6E7E] text-[#C6DE41]",
                    header: "",
                    footer: "",
                    closeButton: "hover:bg-red-200 active:bg-white/10 text-red-500 text-xl",
                }}
            >
                <form ref={form} onSubmit={sendEmail}>
                    <ModalContent>
                        {(onClose) => (
                            <>
                                <ModalHeader className="flex flex-col gap-1">Contact me</ModalHeader>
                                <ModalBody>
                                    <Input
                                        color="primary"
                                        name={"from_name"}
                                        autoFocus
                                        type="text"
                                        label="Name"
                                        variant="bordered"
                                        classNames={{
                                            label: "text-primary",
                                        }}
                                        className="text-white"
                                    />
                                    <Textarea
                                        name={"message"}
                                        label="Content"
                                        variant="bordered"
                                        classNames={{
                                            label: "text-primary"
                                        }}
                                        className="text-white"
                                    />
                                </ModalBody>
                                <ModalFooter>
                                    <Button className="text-red-700 font-black bg-transparent" onPress={onClose}>
                                        Close
                                    </Button>
                                    <Button type="submit" value={"Send"} className="bg-secondary text-terciary font-bold" onPress={onClose}>
                                        Send
                                    </Button>
                                </ModalFooter>
                            </>
                        )}
                    </ModalContent>
                </form>
            </Modal>

        </section>

    );
}
export default ContactMe;