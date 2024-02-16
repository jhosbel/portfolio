import React from "react";
import { useTranslations } from "next-intl";

function Experience() {
  const t = useTranslations("Experience");

  //button style - className="cursor-pointer py-2 px-3 text-sm font-medium text-center text-white rounded-lg bg-[#1D4ED8] sm:w-fit hover:bg-[#1E40AF] focus:ring-4 focus:outline-none focus:ring-[#93C5FD]"

  return (
    <div className="max-w-2xl font-['system-ui'] text-slate-700">
      <h1 className="font-bold text-2xl text-indigo-400 dark:text-gray-100 mb-6 flex items-center gap-3">
        {t("experience_title")}
      </h1>
      <p className="font-bold">{t("experience_work_title_1")}</p>
      <span className="text-slate-400">{t("time_work_1")}</span>
      <ul className="list-disc flex flex-col gap-2 ml-5 mt-4">
        <li>
          {t("experience_1_li1")}
        </li>
        <li>
          {t("experience_1_li2")}
        </li>
        <a
          className="flex transition sm:w-fit bg-indigo-100 hover:bg-opacity-80 dark:bg-indigo-500 hover:dark:bg-opacity-90 text-indigo-500 dark:text-indigo-100 py-2.5 px-4 rounded-lg"
          href="https://chimba.ooo/"
          target="_blank"
        >
          Chimba Blockchain &#10142;
        </a>
        <li>
          {t("experience_1_li3")}
        </li>
        <a
          className="flex transition sm:w-fit bg-indigo-100 hover:bg-opacity-80 dark:bg-indigo-500 hover:dark:bg-opacity-90 text-indigo-500 dark:text-indigo-100 py-2.5 px-4 rounded-lg"
          href="https://explorer.chimba.ooo/"
          target="_blank"
        >
          Chimba Explorer &#10142;
        </a>
        <li>
          {t("experience_1_li4")}
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
      <p className="font-bold">{t("experience_work_title_2")}</p>
      <span className="text-slate-400">{t("time_work_2")}</span>
      <ul className="list-disc flex flex-col gap-2 ml-5 mt-4">
        <li>
          {t("experience_2_li1")}
        </li>
      </ul>
    </div>
  );
}

export default Experience;
