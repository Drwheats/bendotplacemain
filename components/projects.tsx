"use client"
import React, {useEffect} from 'react';
import SectionHeading from "@/components/sectionHeading";
import {projectsData} from "@/lib/data";
import Project from "@/components/project";
import {useInView} from "react-intersection-observer";
import {useCurrentSectionContext} from "@/context/currentSectionContext";

export default function Projects() {
    const {ref, inView} = useInView({
        threshold: 0.65
    });
    const { currentSection, setCurrentSection, lastClicked } = useCurrentSectionContext();

    useEffect(() => {
            console.log(currentSection)

            if (inView && Date.now() - lastClicked > 1000) {
                setCurrentSection("Projects")
            }
        }, [inView, setCurrentSection, lastClicked]
    )
    return (
        <section ref={ref} id="projects" className="scroll-mt-28">
            <SectionHeading>Projects</SectionHeading>
            <div>
                {
                    projectsData.map((project, key) => (
                        <React.Fragment key={key}>
                        <Project {...project} />
                        </React.Fragment>

                        )
                    )
                }
            </div>
        </section>
    );
};

