/* eslint-disable jsx-a11y/role-has-required-aria-props */
/* eslint-disable @next/next/no-img-element */
"use client";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import React, { useTransition, Fragment, useState } from "react";

function LocalSwitcher() {
  const t = useTranslations("Navbar");

  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();

  const onSelectChange = (e) => {
    const nextLocale = e.target.value;
    startTransition(() => {
      router.replace(`/${nextLocale}`);
    });
  };

  return (
    <div>
      <label>
        <select
          defaultValue={localActive}
          onChange={onSelectChange}
          disabled={isPending}
        >
          <option value="es">{t('spanish')}</option>
          <option value="en">{t('english')}</option>
        </select>
      </label>
    </div>
  );
}

export default LocalSwitcher;
