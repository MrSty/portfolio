"use client";
import { Button, Link } from "@nextui-org/react";
import { motion } from "framer-motion";
import{ SiLinkedin, SiWhatsapp, SiGithub } from 'react-icons/si';
import {FaFilePdf} from 'react-icons/fa';
const AboutMe = () => {

    function send(where:string){
        if(where === 'wha'){
            window.open("https://web.whatsapp.com/");
        } else if(where === 'linkd'){
            window.open("https://www.linkedin.com/in/marcelo-rivera-soto-147a59245/", "Documento PDF");
        } else if(where === 'github'){
            window.open("https://github.com/MrSty");
        } else if(where === 'cv'){
            window.open("/assets/docs/prueba.pdf/");
        }
    }

    return (
        <section
            className="
                flex
                h-[32rem]
                w-full
                gap-4
                overflow-hidden
            "
        >
            <div
                className="
                    flex
                    w-2/3
                    rounded-3xl
                    overflow-hidden
                "
            >
                <div className="absolute rounded-3xl h-[32rem] w-[47.1rem] opacity-70 bg-terciary overflow-hidden">
                    <motion.div 
                        className="rounded-full bg-fourth h-52 w-52 absolute right-0 bottom-0 blur-3xl"
                        transition={{
                            duration:5,
                            repeat:Infinity,
                            times:[0.2,0.4,0.6,0.8,1],
                            ease:"linear"
                        }}
                        animate={{
                            x:[0, -100, -300, -100, 0]
                        }}
                    />
                    <motion.div 
                    className="rounded-full bg-secondary h-52 w-52 absolute right-0 top-0 blur-3xl"
                    transition={{
                        duration:5,
                        repeat:Infinity,
                        times:[0.2,0.4,0.6,0.8,1],
                        ease:"linear"
                    }}
                    animate={{
                        y:[0,100, 300 , 100 , 0]
                    }}
                    />
                </div>
                <div className="z-10">
                    <p className="
                font-sans text-[2.1rem] text-fourth
                px-8
                py-5
                text-left
                w-3/5
                select-none
                font-medium
                ">Hello, i am Marcelo Rivera and as a system engineer student</p>
                    <p className="pl-8 pr-36 pt-7 text-fourth font-medium text-lg">I like to knew new technologies and programming, enyojing the process of building things.</p>
                    <div className="flex pl-8 mt-32 gap-6 items-center">
                        <Button className="bg-fourth text-secondary font-black w-44 rounded-3xl" size="lg" variant="shadow">
                            Contact me
                        </Button>

                        <Button className="text-fourth text-lg rounded-full" size="lg" color="secondary" isIconOnly variant="shadow" onClick={()=>send('linkd')}>
                            <SiLinkedin/>
                        </Button>
                        <Button className="text-fourth text-lg rounded-full" size="lg" color="secondary" isIconOnly variant="shadow" onClick={()=>send('wha')}>
                            <SiWhatsapp/>
                        </Button>
                        <Button className="text-fourth text-lg rounded-full" size="lg" color="secondary" isIconOnly variant="shadow" onClick={()=>send('github')}>
                            <SiGithub/>
                        </Button>
                        <Button className="text-fourth text-lg rounded-full" size="lg" color="secondary" isIconOnly variant="shadow" onClick={()=>send('cv')}>
                            <FaFilePdf/>
                        </Button>
                    </div>
                </div>
            </div>
            <div
                className="
                    flex
                    w-1/3
                    rounded-3xl
                    bg-terciary
                "
            >
                
            </div>
        </section>
    );
}

export default AboutMe;