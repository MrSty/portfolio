"use client";
import { Button, Link } from "@nextui-org/react";
import { motion } from "framer-motion";
import { SiLinkedin, SiWhatsapp, SiGithub } from 'react-icons/si';
import { FaFilePdf } from 'react-icons/fa';
import imgp from "@/assets/images/perfil.png";
import Image from "next/image";
const AboutMe = () => {

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
        <section
            className="
                flex
                flex-col
                md:flex-row
                w-full
                gap-4
                overflow-hidden
            "
        >
            <div
                className="
                    flex
                    relative
                    md:w-2/3
                    w-full
                    rounded-3xl
                    overflow-hidden
                "
            >
                <div className="absolute rounded-3xl h-[32rem] w-full opacity-70 bg-terciary overflow-hidden">
                    <motion.div
                        className="rounded-full bg-secondary h-52 w-52 absolute right-0 bottom-0 blur-3xl"
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            times: [0.2, 0.4, 0.6, 0.8, 1],
                            ease: "linear"
                        }}
                        animate={{
                            x: [0, -100, -300, -100, 0]
                        }}
                    />
                    <motion.div
                        className="rounded-full bg-fourth h-52 w-52 absolute right-0 top-0 blur-3xl"
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            times: [0.2, 0.4, 0.6, 0.8, 1],
                            ease: "linear"
                        }}
                        animate={{
                            y: [0, 100, 300, 100, 0]
                        }}
                    />
                </div>
                <div className="z-10 pb-10">
                    <p className="
                font-sans text-3xl lg:text-[2.1rem] text-fourth
                px-8
                py-5
                text-left
                mt-10
                w-4/5
                select-none
                font-medium
                ">Hello! I am Marcelo Rivera, a Systems Engineering student passionate about technology and programming.</p>
                    <p className="pl-8 pr-36 pt-10 text-fourth lg:text-xl font-bold">Welcome to my portfolio, where I share my journey, projects, and achievements so far.</p>
                </div>
            </div>
            <div
                className="
                    flex
                    flex-col
                    md:w-1/3
                    w-full
                    rounded-3xl
                    bg-terciary
                    overflow-hidden
                "
            >
                <Image src={imgp} className="w-full" alt="profile image"></Image>
                <div className="flex my-10 gap-10 sm:gap-2 lg:gap-6 justify-center w-full">

                    <Button className="text-fourth text-lg rounded-full" size="lg" color="secondary" isIconOnly variant="shadow" onClick={() => send('linkd')}>
                        <SiLinkedin />
                    </Button>
                    <Button className="text-fourth text-lg rounded-full" size="lg" color="secondary" isIconOnly variant="shadow" onClick={() => send('wha')}>
                        <SiWhatsapp />
                    </Button>
                    <Button className="text-fourth text-lg rounded-full" size="lg" color="secondary" isIconOnly variant="shadow" onClick={() => send('github')}>
                        <SiGithub />
                    </Button>
                    <Button className="text-fourth text-lg rounded-full" size="lg" color="secondary" isIconOnly variant="shadow" onClick={() => send('cv')}>
                        <FaFilePdf />
                    </Button>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;