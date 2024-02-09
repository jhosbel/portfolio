import React, { useState } from "react";

function About() {
  const [titulo, setTitulo] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleEnvioCorreo = (event) => {
    event.preventDefault(); // Evitar que el formulario se envíe automáticamente

    // Correo de destino
    const destinatario = "jhosbel.vargas@gmail.com";

    // Mostrar los datos en la consola
    console.log([
      [`Correo destino: ${destinatario}`],
      [`Título: ${titulo}`],
      [`Mensaje: ${mensaje}`],
    ]);
  };

  const hanldeSendEmail = () => {
    // Envía el correo con los datos actuales
    window.location.href = `mailto:jhosbel.vargas@gmail.com?subject=${titulo}&body=${mensaje}`;

    // Limpia los campos de entrada después de un pequeño retraso
    setTimeout(() => {
      setTitulo("");
      setMensaje("");
    }, 100);
  };

  return (
    <div className="max-w-2xl">
      <h1>Acerca de mi</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
        maiores veniam excepturi corrupti tenetur expedita minus laborum
        obcaecati facere ratione deserunt alias dolorum est delectus repellendus
        eius velit, pariatur natus? Magni distinctio perspiciatis fugiat vel nam
        non commodi blanditiis nulla libero doloribus eos, velit ex maxime
        nobis. Eos beatae deserunt excepturi consectetur.
      </p>
      <h1>Acerca de mi</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
        maiores veniam excepturi corrupti tenetur expedita minus laborum
        obcaecati facere ratione deserunt alias dolorum est delectus repellendus
        eius velit, pariatur natus? Magni distinctio perspiciatis fugiat vel nam
        non commodi blanditiis nulla libero doloribus eos, velit ex maxime
        nobis. Eos beatae deserunt excepturi consectetur.
      </p>
      <h1>Acerca de mi</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
        maiores veniam excepturi corrupti tenetur expedita minus laborum
        obcaecati facere ratione deserunt alias dolorum est delectus repellendus
        eius velit, pariatur natus? Magni distinctio perspiciatis fugiat vel nam
        non commodi blanditiis nulla libero doloribus eos, velit ex maxime
        nobis. Eos beatae deserunt excepturi consectetur.
      </p>
      <h1>Acerca de mi</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
        maiores veniam excepturi corrupti tenetur expedita minus laborum
        obcaecati facere ratione deserunt alias dolorum est delectus repellendus
        eius velit, pariatur natus? Magni distinctio perspiciatis fugiat vel nam
        non commodi blanditiis nulla libero doloribus eos, velit ex maxime
        nobis. Eos beatae deserunt excepturi consectetur.
      </p>
      <div>
        <label htmlFor="titulo">titulo</label>
        <input
          type="text"
          id="titulo"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
        />
        <label htmlFor="mensaje">mensaje</label>
        <textarea
          cols="20"
          rows="10"
          id="mensaje"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          className="mb-4 block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
        ></textarea>
        <a
          onClick={hanldeSendEmail}
          className="cursor-pointer py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-[#1D4ED8] sm:w-fit hover:bg-[#1E40AF] focus:ring-4 focus:outline-none focus:ring-[#93C5FD]"
        >
          Enviar correo
        </a>
      </div>
    </div>
  );
}

export default About;
