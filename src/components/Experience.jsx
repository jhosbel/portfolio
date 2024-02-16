import React from "react";

function Experience() {

  //button style - className="cursor-pointer py-2 px-3 text-sm font-medium text-center text-white rounded-lg bg-[#1D4ED8] sm:w-fit hover:bg-[#1E40AF] focus:ring-4 focus:outline-none focus:ring-[#93C5FD]"

  return (
    <div className="max-w-2xl font-['system-ui'] text-slate-700">
      <h1 className="font-bold text-2xl text-indigo-400 dark:text-gray-100 mb-6 flex items-center gap-3">Experiencia</h1>
      <p className="font-bold">Desarrollador Front-End • CHIMBA Blockchain</p>
      <span className="text-slate-400">Nov 2022 - Ene 2024</span>
      <ul className="list-disc flex flex-col gap-2 ml-5 mt-4">
        <li>
          El proyecto de CHIMBA Blockchain esta diseñada usando el Cosmos SDK.
        </li>
        <li>
          Website diseñado en Angular, mostrando la información del usuario
          sobre el proyecto, como también los enlaces para poder registrarse y
          descargar la app y extensión de la web3, estilizada usando CSS guiado
          por el diseño.
        </li>
        <a
          className="flex transition sm:w-fit bg-indigo-100 hover:bg-opacity-80 dark:bg-indigo-500 hover:dark:bg-opacity-90 text-indigo-500 dark:text-indigo-100 py-2.5 px-4 rounded-lg"
          href="https://chimba.ooo/"
          target="_blank"
        >
          Chimba Blockchain &#10142;
        </a>
        <li>
          Chimba Explorer diseñado en React, estilizada usando Chakra UI, el
          explorador sirve para que los usuarios puedan ver sus transacciones y
          el número de bloques de la cadena.
        </li>
        <a
          className="flex transition sm:w-fit bg-indigo-100 hover:bg-opacity-80 dark:bg-indigo-500 hover:dark:bg-opacity-90 text-indigo-500 dark:text-indigo-100 py-2.5 px-4 rounded-lg"
          href="https://explorer.chimba.ooo/"
          target="_blank"
        >
          Chimba Explorer &#10142;
        </a>
        <li>
          Amazonia diseñado en React, usando el SDK de Cosmos para conectansode
          a travez de la web3, te permite realizar transacciones como enviar
          tokens, crear y votar propuestas, realizar tareas, etc. fue estilizada
          usando Bootstrap.
        </li>
        <a
          className="flex transition sm:w-fit bg-indigo-100 hover:bg-opacity-80 dark:bg-indigo-500 hover:dark:bg-opacity-90 text-indigo-500 dark:text-indigo-100 py-2.5 px-4 rounded-lg"
          href="https://amazonia.chimba.ooo/"
          target="_blank"
        >
          Amazonia &#10142;
        </a>
      </ul>
      <br />
      <p className="font-bold">Desarrollador Full-Stack • OTCMarket</p>
      <span className="text-slate-400">Nov 2023 - Ene 2024</span>
      <ul className="list-disc flex flex-col gap-2 ml-5 mt-4">
        <li>
          OTCMarket es una aplicación web diseñada para que los usuarios puedan
          resumir grandes bloques de texto usando la API de OpenAI y publicarlas
          en distintas redes sociales sin necesidad de entrar en las mismas para
          publicarlas, usando Next.js para hacer el Frontend y NestJS para hacer
          el Backend usando Tailwind para estilizarla.
        </li>
      </ul>
    </div>
  );
}

export default Experience;
