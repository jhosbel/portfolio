import React from "react";

function Experience() {
  return (
    <div className="max-w-2xl">
      <h1>Experiencia</h1>
      <p>Front-End Developer • CHIMBA Blockchain</p>
      <span>Nov 2022 - Ene 2024</span>
      <ul className="list-disc flex flex-col gap-2 ml-5">
        <li>
          El proyecto de CHIMBA Blockchain esta diseñada usando el Cosmos SDK.
        </li>
        <li>
          Website diseñado en Angular, mostrando la información del usuario
          sobre el proyecto, como también los enlaces para poder registrarse y
          descargar la app y extensión de la web3, estilizada usando CSS guiado
          por el diseño.
        </li>
        <li>
          Chimba Explorer diseñado en React, estilizada usando Chakra UI, el
          explorador sirve para que los usuarios puedan ver sus transacciones y
          el número de bloques de la cadena.
        </li>
        <li>
          Amazonia diseñado en React, usando el SDK de Cosmos para conectansode
          a travez de la web3, te permite realizar transacciones como enviar
          tokens, crear y votar propuestas, realizar tareas, etc. fue estilizada
          usando Bootstrap.
        </li>
      </ul>
      <p>Full-Stack Developer • OTCMarket</p>
      <span>Nov 2023 - Ene 2024</span>
      <ul className="list-disc flex flex-col gap-2 ml-5">
        <li>
          OTCMarket es una aplicación web diseñada para que los usuarios puedan
          resumir grandes bloques de texto usando la API de OpenAI y publicarlas en distintas redes
          sociales sin necesidad de entrar en las mismas para publicarlas,
          usando Next.js para hacer el Frontend y NestJS para hacer el Backend
          usando Tailwind para estilizarla.
        </li>
      </ul>
    </div>
  );
}

export default Experience;
