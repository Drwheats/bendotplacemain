import React from "react";
import Intro from "@/components/Intro";
import SectionDivider from "@/components/sectionDivider";
import AboutMe from "@/components/about";
import Projects from "@/components/projects";
export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
        <SectionDivider />
        <AboutMe />
        <Projects />
    </main>
  );
}
