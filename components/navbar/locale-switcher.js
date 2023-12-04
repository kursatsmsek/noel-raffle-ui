"use client";

import Link from "next/link";
import styles from "./styles.module.css";
import { usePathname } from "next/navigation";

import { i18n } from "@/i18n.config";
import { IoLanguageSharp } from "react-icons/io5";

export default function LocaleSwitcher({ lang }) {
  const pathName = usePathname();

  const redirectedPathName = (locale) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <Link
      href={redirectedPathName(lang === "tr" ? "en" : "tr")}
      style={{ backgroundColor: "rgb(249, 117, 94)" }}
      className={styles.linkButton}
    >
      <IoLanguageSharp style={{ marginRight: "0.5rem" }} />
      {lang === "tr" ? "English" : "Türkçe"}
    </Link>
  );
}
