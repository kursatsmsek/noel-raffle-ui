import Link from "next/link";
import { getDictionary } from "@/lib/dictionary";
import LangChange from "../lang-change";

export default async function Header({ lang }) {
  const { navigation } = await getDictionary(lang);

  return (
    <header className="py-6">
      <nav className="container flex items-center justify-between">
        <ul className="flex gap-x-8">
          <li>
            <Link href={`/${lang}`}>{navigation.home}</Link>
          </li>
          <li>
            <Link href={`/${lang}/about`}>{navigation.about}</Link>
          </li>
        </ul>
        <LangChange />
      </nav>
    </header>
  );
}
