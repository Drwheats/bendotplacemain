"use client"
import React, {useEffect} from "react";
import sectionHeading from "@/components/sectionHeading";
import SectionHeading from "@/components/sectionHeading";
import {motion} from "framer-motion";
import {useInView} from "react-intersection-observer";
import {CurrentSectionContext, useCurrentSectionContext} from "@/context/currentSectionContext";

export default function AboutMe() {
    const {ref, inView} = useInView({
        threshold: 1
    });
    const { setCurrentSection, lastClicked } = useCurrentSectionContext();

    useEffect(() => {
            if (inView && Date.now() - lastClicked > 1000) {
                setCurrentSection("About");
            }
    }, [inView, setCurrentSection, lastClicked]);

    return <motion.section className="mb-28 max-w[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
    ref={ref}
    initial={{opacity: 0, y:100}}
    animate={{opacity: 1, y:0}}
    transition={{delay: 0.2}}
    id="about">
        <SectionHeading>About Me</SectionHeading>
        <p className="mb-3">
            Ben dot place is a place for me to share my projects. I have 3 projects so far and they are all here. This is where my 3 projects are kept.
        {/*    After graduating with a degree in{" "}*/}
        {/*    <span className="font-medium">Accounting</span>, I decided to pursue my*/}
        {/*    passion for programming. I enrolled in a coding bootcamp and learned{" "}*/}
        {/*    <span className="font-medium">full-stack web development</span>.{" "}*/}
        {/*    <span className="italic">My favorite part of programming</span> is the*/}
        {/*    problem-solving aspect. I <span className="underline">love</span> the*/}
        {/*    feeling of finally figuring out a solution to a problem. My core stack*/}
        {/*    is{" "}*/}
        {/*    <span className="font-medium">*/}
        {/*  React, Next.js, Node.js, and MongoDB*/}
        {/*</span>*/}
        {/*    . I am also familiar with TypeScript and Prisma. I am always looking to*/}
        {/*    learn new technologies. I am currently looking for a{" "}*/}
        {/*    <span className="font-medium">full-time position</span> as a software*/}
        {/*    developer.*/}
        {/*</p>*/}

        {/*<p>*/}
        {/*    <span className="italic">When I'm not coding</span>, I enjoy playing*/}
        {/*    video games, watching movies, and playing with my dog. I also enjoy{" "}*/}
        {/*    <span className="font-medium">learning new things</span>. I am currently*/}
        {/*    learning about{" "}*/}
        {/*    <span className="font-medium">history and philosophy</span>. I'm also*/}
        {/*    learning how to play the guitar.*/}
        </p></motion.section>
}