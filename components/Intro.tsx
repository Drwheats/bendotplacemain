"use client";
import React, {useEffect} from "react";
import Image from "next/image";
import {motion} from "framer-motion";
import { FaGithubSquare } from "react-icons/fa";
import {BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import Link from "next/link";
import {useObservedSection} from "@/lib/customHooks";

export default function Intro() {
    const {ref} = useObservedSection("Home", 0.75);

    return (
        <section id="home" className="scroll-mt-28" ref={ref}>
            <div className="flex items-center justify-center">
                <div className="relative">
                    <motion.div
                        initial={{opacity: 0, scale: 0}}
                        animate={{opacity: 1, scale: 1}}
                        transition={{type: "tween", duration: 0.2}}
                    >
                        <Image
                            src="https://static.wikia.nocookie.net/amogus/images/c/cc/Amogbob.png/revision/latest?cb=20210720212859"
                            alt="Among Us"
                            width="192"
                            height="192"
                            quality="95"
                            priority={true}
                            className="h-24 w-24 rounded-full border-[0.35rem] border-white shadow-xl"
                        />
                    </motion.div>
                    <motion.span className="absolute top-0 right-5 text-4xl"
                                 initial={{opacity: 0, scale: 0}}
                                 animate={{opacity: 1, scale: 1}}
                                 transition={{type: 'spring', stiffness: 125, delay: 0.1, duration: 1}}
                    >

                        😎
                    </motion.span>
                </div>
            </div>

            <motion.h1
                className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
                initial={{opacity: 0, y: 100, z: 1}}
                animate={{opacity: 1, y: 0}}
            >
                <span className="font-bold">Hello, I am Ben.</span> and welcome to my{" "}
                <span className="font-bold">Place</span>.{" "}
                This is where I showcase my programming projects, written in <span className="underline">React</span>, <span className="underline">Next.js</span> and <span className="underline">Node.js</span>.
            </motion.h1>

            <motion.div
                className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
                initial={{opacity: 0, y: 100, z: 1}}
                animate={{opacity: 1, y: 0, z: 1}}
                transition={{
                    delay: 0.1,
                }}
            >
                <Link
                    href="#contact"
                    className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
                    onClick={() => {
                        setActiveSection("Contact");
                        setTimeOfLastClick(Date.now());
                    }}
                >
                    Contact me {" "}
                    <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition"/>
                </Link>

                <a
                    className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
                    href="/resume.pdf"
                    download
                >
                    Download Resume{" "}
                    <HiDownload className="opacity-50 group-hover:translate-y-1 transition"/>
                </a>

                <a
                    className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-blue-300/60"
                    href="https://linkedin.com"
                    target="_blank"
                >
                    <BsLinkedin/>
                </a>

                <a
                    className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-blue-300/60"
                    href="https://github.com"
                    target="_blank"
                >
                    <FaGithubSquare/>
                </a>
            </motion.div>
        </section>
    )
}