"use client"
import React from 'react';
import SectionHeading from "@/components/sectionHeading";
import {serviceData} from "@/lib/data";
import {useObservedSection} from "@/lib/customHooks";
import {motion} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {useTheme} from "@/context/theme-context";

export default function Projects2() {
    const {ref} = useObservedSection("Projects", 0.5);
    const { theme } = useTheme();

    return (
        <motion.section 
            ref={ref} 
            id="projects2" 
            className="scroll-mt-28 mb-28 sm:mb-40 w-full flex flex-col items-center" 
            initial={{
                opacity: 0,
            }}
            whileInView={{
                opacity: 1
            }}
            transition={{
                duration: 3
            }}
            viewport={{
                once: true,
            }}
        >
            <SectionHeading>Services</SectionHeading>
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-4 justify-center flex-wrap">
                {
                    serviceData.map((project, key) => (
                        <motion.div 
                            key={key}
                            className="flex-1 min-w-[280px] sm:min-w-0 max-w-sm"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: key * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Link href={project.href}>
                                <div 
                                    style={{
                                        borderColor: theme === 'light' ? 'rgba(148, 163, 184, 0.3)' : 'rgba(100, 116, 139, 0.3)',
                                        backgroundColor: theme === 'light' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(15, 23, 42, 0.8)'
                                    }}
                                    className="group rounded-lg border overflow-hidden transition-all hover:shadow-lg hover:scale-105 h-full flex flex-col"
                                >
                                    <div className="relative h-48 w-full overflow-hidden bg-slate-200 dark:bg-slate-800">
                                        <Image 
                                            src={project.imageUrl} 
                                            alt={project.title}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-300"
                                        />
                                    </div>
                                    <div className="p-4 sm:p-5 flex flex-col flex-grow">
                                        <h3 
                                            style={{ color: theme === 'light' ? '#0f172a' : '#f1f5f9' }}
                                            className="text-lg sm:text-xl font-semibold mb-2"
                                        >
                                            {project.title}
                                        </h3>
                                        <p 
                                            style={{ color: theme === 'light' ? '#475569' : '#cbd5e1' }}
                                            className="text-sm mb-4 flex-grow"
                                        >
                                            {project.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.map((tag, idx) => (
                                                <span 
                                                    key={idx}
                                                    style={{
                                                        backgroundColor: theme === 'light' ? 'rgba(15, 23, 42, 0.7)' : 'rgba(100, 116, 139, 0.5)',
                                                        color: theme === 'light' ? '#ffffff' : '#e2e8f0'
                                                    }}
                                                    className="text-xs px-2 py-1 rounded-full uppercase tracking-wider"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))
                }
            </div>
        </motion.section>
    );
}
