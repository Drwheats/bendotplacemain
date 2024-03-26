import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import boardImage from "@/public/boardportfolioimage.png";
import monsImage from "@/public/monsportfolioimage.png";
import calendarImage from "@/public/calendarportfolioimage.png";

export const navBarCategories = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Experience",
        hash: "#experience",
    },
    {
        name: "Contact",
        hash: "#contact",
    },
] as const;

export const experiencesData = [
    {
        title: "Graduated bootcamp",
        location: "Miami, FL",
        description:
            "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
        icon: React.createElement(LuGraduationCap),
        date: "2019",
    },
    {
        title: "Front-End Developer",
        location: "Orlando, FL",
        description:
            "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
        icon: React.createElement(CgWorkAlt),
        date: "2019 - 2021",
    },
    {
        title: "Full-Stack Developer",
        location: "Houston, TX",
        description:
            "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
        icon: React.createElement(FaReact),
        date: "2021 - present",
    },
] as const;

export const projectsData = [
    {
        title: "React Imageboard",
        description:
            "An imageboard written in React. Uses a RESTful api to validate and serve content from my node/express server. My first real project.",
        tags: ["React", "Node.js"],
        imageUrl: boardImage,
    },
    {
        title: "Draft League",
        description:
            "A central hub to manage the Pokemon draft league that I play with my friends. It's written in react, and it communicates with my node/express API server, using a Google Sheet document as the database.",
        tags: ["JavaScript", "React", "Node.js", ],
        imageUrl: monsImage,
    },
    {
        title: "Local Theatre Calendar",
        description:
            "Shows what's playing in downtown Toronto cinemas. Uses my node/express API server, and I collect the data with a scraper that automatically runs every week. Hastily turned into a React app. ",
        tags: ["JavaScript", "Node.js", ],
        imageUrl: calendarImage,
    },
] as const;

export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Git",
    "Tailwind",
    "Prisma",
    "MongoDB",
    "Redux",
    "GraphQL",
    "Apollo",
    "Express",
    "PostgreSQL",
    "Python",
    "Django",
    "Framer Motion",
] as const;