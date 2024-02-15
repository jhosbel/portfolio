/* eslint-disable jsx-a11y/role-has-required-aria-props */
/* eslint-disable @next/next/no-img-element */
"use client";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import React, { useTransition, Fragment, useState } from "react";
import { useCountries } from "use-react-countries";
import { Select, Option } from "@material-tailwind/react";

function LocalSwitcher() {
  const t = useTranslations("Navbar");
  const { countries } = useCountries();

  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();

  const onSelectChange = (e) => {
    const nextLocale = e.target.value;
    startTransition(() => {
      router.replace(`/${nextLocale}`);
    });
  };

  // United States and Spain

  const filterSpain = countries[91].name;
  const filterSpainFlag = countries[91].flags;
  const [selectedLocale, setSelectedLocale] = useState(null);

  const handleLocaleChange = (locale) => {
    setSelectedLocale(locale);
  };

  return (
    <div>
      <label>
        <select
          defaultValue={localActive}
          onChange={onSelectChange}
          disabled={isPending}
        >
          <option value="es">{t("spanish")}</option>
          <option value="en">{t("english")}</option>
        </select>
      </label>
      {/* <div className="w-72">
        <Select
          defaultValue={localActive}
          onChange={(e) => onSelectChange(e)}
          disabled={isPending}
        >
          <Option key={countries[91].languages[0]} value='es' className="flex items-center gap-2">
              <img
                src={countries[91].flags.svg}
                alt={countries[91].languages[0]}
                className="h-5 w-5 rounded-full object-cover"
              />
              {t("spanish")}
            </Option>
            <Option key={countries[195].languages[0]} value='en' className="flex items-center gap-2">
              <img
                src={countries[195].flags.svg}
                alt={countries[195].languages[0]}
                className="h-5 w-5 rounded-full object-cover"
              />
              {t("english")}
            </Option>
        </Select>
      </div> */}
    </div>
  );
}

export default LocalSwitcher;
