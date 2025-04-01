import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skill";
import Intro from "@/components/intro";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      {/* <SectionDivider /> */}
      <Projects />
      {/* <Skills /> */}
      {/* <Experience /> */}
      <Contact />
    </main>
  );
}
