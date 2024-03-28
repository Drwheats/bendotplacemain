"use client"
import React, {useEffect} from 'react';
import SectionHeading from "@/components/sectionHeading";
import {projectsData} from "@/lib/data";
import Project from "@/components/project";
import {useInView} from "react-intersection-observer";
import {useCurrentSectionContext} from "@/context/currentSectionContext";
import {useObservedSection} from "@/lib/customHooks";

export default function Projects() {
    const {ref} = useObservedSection("Projects", 0.5);

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

