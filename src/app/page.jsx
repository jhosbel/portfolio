"use client";

import Projects from "@/components/Projects";
import Navbar from "../components/Navbar";
import About from "@/components/About";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="min-h-screen max-w-5xl mx-auto">
        <div className="mt-20">
          <div id="experience" className="mt-20 flex justify-center pt-40">
            <Experience />
          </div>
          <div id="projects" className="flex justify-center pt-40">
            <Projects />
          </div>
          <div id="about" className="mb-40 flex justify-center pt-40">
            <About />
          </div>
        </div>
      </div>
    </main>
  );
}
