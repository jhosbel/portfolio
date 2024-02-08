"use client"

import Projects from "@/components/Projects";
import Navbar from "../components/Navbar";
import About from "@/components/About";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <main className="min-h-screen max-w-5xl mx-auto">
      <div>
        <Navbar />
        <div className="mt-96">
          <div id="experience" className="mb-96 mt-96 flex justify-center pt-40">
            <Experience />
          </div>
          <div id="projects" className="mb-96 mt-96 flex justify-center pt-40">
            <Projects />
          </div>
          <div id="about" className="mb-96 mt-96 flex justify-center pt-40">
            <About />
          </div>
        </div>
      </div>
    </main>
  );
}