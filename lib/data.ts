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
        title: "Helpdesk/Project Manager",
        location: "Toronto",
        description:
            "Worked a help desk role in Toronto, Ontario.",
        icon: React.createElement(CgWorkAlt),
        date: "2022 - 2024",
    },
    {
        title: "Graduated University",
        location: "York University, Toronto",
        description:
            "Graduated from York University with a Computer Science degree. ",
        icon: React.createElement(LuGraduationCap),
        date: "2024",
    },
    {
        title: "Freelance web developer",
        location: "Toronto",
        description:
            "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind and MySQL. I'm open to full-time opportunities.",
        icon: React.createElement(FaReact),
        date: "2024 - present",
    },

] as const;

export const projectsData = [
    {
        title: "React Imageboard",
        description:
            "An imageboard written in React. Uses a RESTful api to validate and serve content from my node/express server. My first real project.",
        tags: ["React", "Node.js"],
        imageUrl: boardImage,
        href: "https://board.ben.place/"
    },
    {
        title: "Draft League",
        description:
            "A frontend for my friends Pokemon draft league. It's written in react, and it communicates with my node/express API server, and uses a Google Sheet document as a database.",
        tags: ["JavaScript", "React", "Node.js", ],
        imageUrl: monsImage,
        href: "https://mons.ben.place/"
    },
    {
        title: "Local Theatre Calendar",
        description:
            "Shows what's playing in downtown Toronto cinemas. Uses my node/express API server, and I collect the data with a scraper that automatically runs every week. Hastily turned into a React app. ",
        tags: ["TypeScript", "React", "Node.js", ],
        imageUrl: calendarImage,
        href: "https://calendar.ben.place/"
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
    "MongoDB",
    "GraphQL",
    "Express",
    "MySQL",
    "Python",
    "Django",
    "Framer Motion",
] as const;