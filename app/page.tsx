import Blogs from "@/components/Blogs";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import Intro from "@/components/intro";
export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <Blogs />
      <Projects />
      <Contact />
    </main>
  );
}
