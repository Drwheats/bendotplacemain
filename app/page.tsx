import React from "react";
import Intro from "@/components/Intro";
import SectionDivider from "@/components/sectionDivider";
import Projects from "@/components/projects";
import Projects2 from "@/components/projects2";
import Skills from "@/components/skills";
import ExperienceSection from "@/components/experienceSection";
import Contact from "@/components/contact";
export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
        <SectionDivider />
        <Projects2 />
        <Projects />
        <Skills />
        <ExperienceSection />

      <Contact />
      
    </main>
  );
}
