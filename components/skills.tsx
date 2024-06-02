"use client"
import React from "react";
import SectionHeading from "@/components/sectionHeading";
import {skillsData} from "@/lib/data";
import {useObservedSection} from "@/lib/customHooks";
import {motion} from "framer-motion";

export default function Skills() {
    const {ref} = useObservedSection("Skills", 1);
    const animateVariants = {
        initial: {
            opacity: 0,
            y: 100,
        },
        animate: (index: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.05 * index
            }
        })
    }
    return (
        <motion.section id="skills" ref={ref} className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40">
            <SectionHeading>My Skills</SectionHeading>
            <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
                {skillsData.map((skill, index) => (
                    <motion.li className="bg-white border-black/[0.1] rounded-x1 px-5 py-3 dark:bg-white/10 dark:text-white/80" key={index}
                    variants={animateVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{
                        once: true,
                    }}
                    custom={index}
                    >{skill}</motion.li>

                ))}
            </ul>
        </motion.section>
    )
}