/* eslint-disable @next/next/no-img-element */
"use client";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import React, { useEffect, useState } from "react";
import LocalSwitcher from "./LocalSwitcher";
import { useTranslations } from "next-intl";

function Navbar() {
  const t = useTranslations("Navbar");

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

  const handleDescargaPDF = () => {
    /* const pdfUrl = process.env.PUBLIC_URL + '/archivos/archivo.pdf'; */
    const pdfUrl = "CV_Jhosbel_Software_Developer.pdf";
    const linkDescarga = document.createElement("a");
    linkDescarga.href = pdfUrl;
    linkDescarga.download = "CV_Jhosbel_Software_Developer.pdf";
    linkDescarga.click();
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
            ? "h-20 bg-slate-50 justify-around backdrop-blur-md bg-white/30"
            : "flex-col h-full bg-slate-200"
        }`}
      >
        <div className={`${scrolling ? 'flex-row-reverse' : 'flex-row'} flex items-center gap-4`}>
          <div className="flex flex-col items-center">
            <div className="text-center">
              <span className={`${scrolling ? 'text-base' : 'text-5xl'}`}>
                {text}
                <Cursor cursorBlinking={true} />
              </span>
              <p className={`mt-4 mb-4 ${scrolling ? "hidden" : "block"}`}>{t("title")}</p>
            </div>
              <span
                className={`cursor-pointer py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-[#1D4ED8] sm:w-fit hover:bg-[#1E40AF] focus:ring-4 focus:outline-none focus:ring-[#93C5FD] ${scrolling ? "hidden" : "block"}`}
                onClick={handleDescargaPDF}
              >
                {t("download_cv")}
              </span>
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
              <a className="hover:text-red-700" href="#experience">
                {t("experience")}
              </a>
            </li>
            <li className="mr-4">
              <a className="hover:text-red-700" href="#projects">
                {t("project")}
              </a>
            </li>
            <li>
              <a className="hover:text-red-700" href="#about">
                {t("about_me")}
              </a>
            </li>
            <LocalSwitcher />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
