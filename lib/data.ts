import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import {FaCog} from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import boardImage from "@/public/boardportfolioimage.png";
import monsImage from "@/public/monsportfolioimage.png";
import calendarImage from "@/public/calendarportfolioimage.png";
import techpic1 from "@/public/techpic1.jpg";
import techpic2 from "@/public/techpic2.jpg";
import techpic3 from "@/public/techpic3.jpg";

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
            "Managed the IT infrastructure/tech stack for digital marketing freelancers, including Google Workspace/Office 365, Hubspot, and our Zoho IT helpdesk.",
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
        title: "IT Coordinator Role",
        location: "Toronto",
        description:
            "Worked as an IT coordinator for a Toronto fintech company. Ran their helpdesk/managed IT services, and managed various IT projects relating to IT infrastructure, automations/integrations as well as cybersecurtity/compliance.",
        icon: React.createElement(FaCog),
        date: "2024 - present",
    },
    {
        title: "IT Specialist Role",
        location: "Toronto",
        description:
            "Worked as an IT specialist for a Toronto apparel company, taking on greater autonomy, proposing my own IT projects, and having complete ownership/management of my company's tech stack. ",
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

export const serviceData = [
    {
        title: "Support & Troubleshooting",
        description:
            "Remote and onsite support for Mac/Windows devices, mobile devices, printers, networks, software, email, accounts, and day-to-day technical issues. ",
        tags: ["Mac", "Windows", "Networking", "Email Deliverability", "Troubleshooting"],
        imageUrl: techpic1,
        href: "https://board.ben.place/"
    },
    {
        title: "Systems and Administration",
        description:
            "Microsoft 365 and Google Workspace support, user on/offboarding, device and account management, permissions, software deployment/integration, backups and day to day administration.",
        tags: ["Office 365", "Google Workspace", "Onboarding", "Offboarding", "Mobile Device Management" ],
        imageUrl: techpic2,
        href: "https://mons.ben.place/"
    },
    {
        title: "Projects and Infrastructure",
        description:
            "Office setups, network deployments, migrations androllouts, cloud implementations, web development and other one-time IT projects.",
        tags: ["Office Setup", "Email Marketing", "Web Development", "SaaS migrations", "Workflow automations"] ,
        imageUrl: techpic3,
        href: "https://calendar.ben.place/"
    },
] as const;

export const skillsData = [
    "Device Management",
    "Cybersecurity",
    "Automations",
    "Integrations",
    "Software Development",
    "React/Node.js",
    "Python",
    "SaaS Administration",
    "Office 365",
    "Google Workspace",
    "IAM/SSO",
    "Git",
    "Helpdesk/IT Support",
] as const;