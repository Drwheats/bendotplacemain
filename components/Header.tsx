"use client";
import React from 'react';
import { motion } from "framer-motion";
import { navBarCategories} from "@/lib/data"
import Link from "next/link";
import clsx from "clsx";
import {useCurrentSectionContext} from "@/context/currentSectionContext";


export default function Header() {
    const { currentSection, setCurrentSection, setLastClicked} = useCurrentSectionContext();
    return (
        <header className="z-[999] relative">
            <motion.div className="fixed top-0 left-1/2 -translate-x-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-25 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full bg-white"
            initial={{ y: -100, x: "-50%", opacity: 0}}
            animate={{ y: 0, x: "-50%", opacity: 1}}
            ></motion.div>

            <nav className="fixed top-[0.15rem] flex left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[2rem] sm:h-[initial] sm:py-0">
                <ul className="flex w-[20rem] flex-wrap items-center justify-center gap-y-1 text-[1rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5" >
                    {
                        navBarCategories.map(category=> (
                                <motion.li className="h-3/4 flex items-center justify-center relative"
                                           key={category.hash}
                                            initial={{y: -100, opacity: 0}}
                                           animate={{y: 0, opacity: 1}}
                                >
                                    <Link className={clsx("flex w-full items-center justify-center px-3 py-2 " +
                                        "hover:text-gray-950 transition", {"text-gray-950": currentSection === category.name})}
                                          href={category.hash} onClick={
                                        () => {
                                            setCurrentSection(category.name)
                                            setLastClicked(Date.now())
                                        }}
                                    >{category.name}

                                        {
                                            category.name === currentSection && (
                                                <motion.span className="bg-gray-100 rounded-full absolute inset-0 -z-10" layoutId="currentSection"
                                                              transition={{type:"spring", stiffness: 400, damping: 30}}
                                                ></motion.span>
                                            )
                                        }

                                    </Link>
                                </motion.li>
                            )

                        )
                    }
                </ul>
            </nav>
        </header>
    )
}