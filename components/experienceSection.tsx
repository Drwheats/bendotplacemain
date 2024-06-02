"use client"

import React from "react";
import SectionHeading from "@/components/sectionHeading";
import {experiencesData} from "@/lib/data";
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css'
import {useObservedSection} from "@/lib/customHooks";
import { motion } from "framer-motion";
import theme from "tailwindcss/defaultTheme";

export default function ExperienceSection() {
    const {ref} = useObservedSection("Experience", 0.75);

    return (

        <motion.section id="experience" className="scroll-mt-28 mb-28 sm:mb-40 h-screen flex items-center justify-center"
        ref={ref}
        >
            <SectionHeading>Experience:</SectionHeading>
            <VerticalTimeline lineColor="">
                {experiencesData.map((experience, index) => (
                    <React.Fragment key={index}>
                        <VerticalTimelineElement
                            visible={true}
                        contentStyle={{
                            background: window.localStorage.getItem("theme") === 'light' ? "#f3f4f6" : "rgba(255,255,255)",
                            boxShadow: "none",
                            border: "1px solid rgba(0, 0, 0, 0.05)",
                            textAlign: "left",
                            padding: "1.3rem 2rem",
                        }}
                        contentArrowStyle={{
                            borderRight: "0.4rem solid #9ca3af"
                        }}
                        date={experience.date} icon={experience.icon} iconStyle={{
                            background: "white", fontSize: "1.5rem",
                        }}>
                            <h3 className="font-semibold capitalize dark:text-white">{experience.title}</h3>
                            <p className="font-normal !mt-0">{experience.location}</p>
                            <p className="!mt-1 !font-normal text-gray-700">{experience.description}</p>
                        </VerticalTimelineElement>
                    </React.Fragment>
                    ))
                }
            </VerticalTimeline>
        </motion.section>
    )
}