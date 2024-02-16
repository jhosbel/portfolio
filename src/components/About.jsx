import React from "react";
import Swal from "sweetalert2";
import Image from "next/image";
import { useTranslations } from "next-intl";

function About() {
  const destinatario = "jhosbel.vargas@gmail.com";
  const t = useTranslations("About");

  const handleCopyText = (e) => {
    e.preventDefault();
    navigator.clipboard
      .writeText(destinatario)
      .then(() => {
        console.log("Texto copiado al portapapeles:", destinatario);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Texto copiado",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.error("Error al copiar texto:", error);
      });
  };

  return (
    <div className="max-w-2xl">
      <h1 className="font-bold text-2xl text-indigo-400 dark:text-gray-100 mb-6 flex items-center gap-3">
        Acerca de mi
      </h1>
      <p>{t("about_me_description")}</p>
      <br />
      <h1 className="font-bold text-2xl text-indigo-400 dark:text-gray-100 mb-6 flex items-center gap-3">
        Redes Sociales
      </h1>
      <div className="grid grid-cols-5 gap-2">
        <div className="rounded-md border-4 transition bg-indigo-100 hover:bg-opacity-80 text-[#007EBB] hover:border-indigo-500 hover:scale-105">
          <a
            href="https://www.linkedin.com/in/jhosbel-vargas-a82212239/"
            target="_blank"
            className="flex flex-col p-2 items-center justify-center font-bold"
          >
            <Image
              src="linkedin-icon.svg"
              alt="LinkedIn"
              width="24"
              height="24"
            />
            LinkedIn
          </a>
        </div>
        <div className="rounded-md border-4 transition bg-indigo-100 hover:bg-opacity-80 text-[#000000] hover:border-indigo-500 hover:scale-105">
          <a
            href="https://github.com/jhosbel"
            target="_blank"
            className="flex flex-col p-2 items-center justify-center font-bold"
          >
            <Image src="github-icon2.svg" alt="GitHub" width="24" height="24" />
            GitHub
          </a>
        </div>
        <div className="rounded-md border-4 transition bg-indigo-100 hover:bg-opacity-80 text-[#000000] hover:border-indigo-500 hover:scale-105">
          <a
            href="https://github.com/jhosbelvargas"
            target="_blank"
            className="flex flex-col p-2 items-center justify-center font-bold"
          >
            <Image src="github-icon2.svg" alt="GitHub" width="24" height="24" />
            GitHub
          </a>
        </div>
        <div className="rounded-md border-4 transition bg-indigo-100 hover:bg-opacity-80 text-[#00AAEC] hover:border-indigo-500 hover:scale-105">
          <a
            href="https://twitter.com/jhosbelvargas"
            target="_blank"
            className="flex flex-col p-2 items-center justify-center font-bold"
          >
            <Image
              src="twitter-icon.svg"
              alt="Twitter"
              width="24"
              height="24"
            />
            Twitter
          </a>
        </div>
        <div className="rounded-md border-4 transition bg-indigo-100 hover:bg-opacity-80 text-[#4460A0] hover:border-indigo-500 hover:scale-105">
          <a
            href="https://www.facebook.com/jhosbel.vargas/"
            target="_blank"
            className="flex flex-col p-2 items-center justify-center font-bold"
          >
            <Image
              src="facebook-icon.svg"
              alt="Facebook"
              width="24"
              height="24"
            />
            Facebook
          </a>
        </div>
      </div>
      <br />
      <div>
        <h1 className="font-bold text-2xl text-indigo-400 dark:text-gray-100 mb-6 flex items-center gap-3">
          Email
        </h1>
        <div className="flex gap-2">
          <input
            type="text"
            disabled
            placeholder={`${destinatario}`}
            className="bg-black/5 dark:bg-white/5 w-full py-1.5 px-3 rounded-lg grid place-items-center text-slate-600 dark:text-slate-300"
          />
          <div className="flex gap-2">
            <div>
              <a
                href={`mailto:${destinatario}`}
                className="flex transition bg-indigo-100 hover:bg-opacity-80 dark:bg-indigo-500 hover:dark:bg-opacity-90 text-indigo-500 dark:text-indigo-100 py-2.5 px-4 rounded-lg"
              >
                Enviar
              </a>
            </div>
            <div>
              <a
                href="#"
                onClick={handleCopyText}
                className="flex transition bg-indigo-100 hover:bg-opacity-80 dark:bg-indigo-500 hover:dark:bg-opacity-90 text-indigo-500 dark:text-indigo-100 py-2.5 px-4 rounded-lg"
              >
                Copiar
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
