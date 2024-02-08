/* eslint-disable @next/next/no-img-element */
"use client";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import React, { useEffect, useState } from "react";

function Navbar() {
  const [scrolling, setScrolling] = useState(false);

  const [text] = useTypewriter({
    words: ["Jhosbel Vargas"],
    loop: 1,
    cursor: true,
    cursorBlinking: true,
    typeSpeed: 100,
    delaySpeed: 1000,
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <div
        className={`fixed top-0 w-full py-4 transition-all duration-1000 justify-center items-center flex ${
          scrolling
            ? "h-20 bg-slate-50 justify-around backdrop-blur-sm bg-white/30"
            : "flex-col h-full bg-slate-200"
        }`}
      >
        <div className="flex items-center gap-4">
          <div className={`${scrolling ? "hidden" : "block"}`}>
            <div className="text-center">
              <span className="text-5xl">
                {text}
                <Cursor cursorBlinking={true} />
              </span>
              <p className="mt-4">Apasionado desarrollador software</p>
            </div>
          </div>
          <img
            onClick={scrollToTop}
            src="avatar-logo.jpg"
            alt="avatar"
            className={`transition-all duration-1000 ${
              scrolling
                ? "w-16 rounded-full justify-around cursor-pointer"
                : "w-40"
            }`}
          />
        </div>
        <div className={`${scrolling ? "" : "mt-20"}`}>
          <ul className="flex justify-around">
            <li className="mr-4">
              <a href="#experience">Experiencia</a>
            </li>
            <li className="mr-4">
              <a href="#projects">Proyectos</a>
            </li>
            <li>
              <a href="#about">Acerca de mi</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
