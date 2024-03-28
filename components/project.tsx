"use client"

import {projectsData} from "@/lib/data";
import React, {useRef} from "react";
import {motion, useScroll, useTransform} from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type ProjectProps = typeof projectsData[number];
export default function Project({title, description, tags,imageUrl,href} : ProjectProps) {

    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"]
    })
    const yScrollScale = useTransform(scrollYProgress, [0,1], [0.8, 1]);
    const yScrollOpacity = useTransform(scrollYProgress, [0,1], [0.8, 1]);

    return <section className="group relative bg-gray-100 max-w-[42rem]
    border border-black/5 overflow-hidden sm:pr-8 relative
    sm:h-[20rem] mb-3 sm:mb-8 last:mb-0 even:pl-8">
        <motion.div ref={ref} style={{scale: yScrollScale, opacity: yScrollOpacity}} className="mb-3 sm:mb-8 last:mb-0">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full group-even:ml-[18rem]" >
            <h3 className="text-2xl font-semibold">{title}</h3>
            <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
            <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
                {tags.map((tag, key) => (
                    <li className="bg-gray-950/[0.7] px-3 py-1 text-[1rem] uppercase tracking-wider text-white rounded-full" key={key}>{tag}</li>
                ))}
            </ul>
        </div>
            <Link href={href}>
        <Image src={imageUrl} alt={"ben's " + title + " project"} quality={90} className="absolute top-8 -right-40 w-[29rem] rounded-t-lg shadow-xl transition
        group-hover:scale-[1.09] group-hover:-translate-y-3         group-hover:-translate-x-3
        group-hover:-rotate-2 group-even:group-hover:translate-y-3         group-even:group-hover:translate-x-3
        group-even:group-hover:rotate-2
        group-even:right-[initial] group-even:-left-40"/></Link></motion.div>
    </section>
}

