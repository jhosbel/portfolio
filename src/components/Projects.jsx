/* eslint-disable @next/next/no-img-element */

import React from "react";

function Projects() {
  return (
    <div className="max-w-2xl">
      <h1 className="font-bold text-2xl text-indigo-400 dark:text-gray-100 mb-6 flex items-center gap-3">
        Proyectos
      </h1>
      <div className="mt-4">
        <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-full hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <img
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
            src="avatar-logo.jpg"
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <div className="flex justify-around">
              <img className="w-5" src="nextjs-icon.svg" alt="" />
              <img className="w-5" src="react-icon.svg" alt="" />
              <img className="w-5" src="javascript-icon.svg" alt="" />
              <img className="w-5" src="typescript-icon.svg" alt="" />
              <img className="w-5" src="nestjs-icon.svg" alt="" />
              <img className="w-5" src="bootstrap-icon.svg" alt="" />
              <img className="w-5" src="tailwind-icon.svg" alt="" />
              <img className="w-5" src="angular-icon.svg" alt="" />
              <img className="w-5" src="nodejs-icon.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-full hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <img
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
            src="avatar-logo.jpg"
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <div className="flex justify-around">
              <img className="w-5" src="nextjs-icon.svg" alt="" />
              <img className="w-5" src="react-icon.svg" alt="" />
              <img className="w-5" src="javascript-icon.svg" alt="" />
              <img className="w-5" src="typescript-icon.svg" alt="" />
              <img className="w-5" src="nestjs-icon.svg" alt="" />
              <img className="w-5" src="bootstrap-icon.svg" alt="" />
              <img className="w-5" src="tailwind-icon.svg" alt="" />
              <img className="w-5" src="angular-icon.svg" alt="" />
              <img className="w-5" src="nodejs-icon.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
