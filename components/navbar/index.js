import styles from "./styles.module.css";
import Link from "next/link";
import Logo from "@/assets/logo3.png";
import Image from "next/image";
import TemporaryDrawer from "../drawer";
import { getDictionary } from "@/lib/dictionary";
import { GrLanguage } from "react-icons/gr";
import { IoLanguageSharp } from "react-icons/io5";
import { usePathname } from "next/navigation";
import LocaleSwitcher from "./locale-switcher";

async function Navbar({ lang, currentPage }) {
  const { navigation } = await getDictionary(lang);

  return (
    <header className={styles.header}>
      <div className={styles.logoDiv}>
        <Image width={110} src={Logo} alt="merry-christmas" />
      </div>
      <div className={styles.buttonsDiv}>
        <Link
          href={`/${lang}`}
          className={styles.linkButton}
          style={{ display: `${currentPage === "noel" && "none"}` }}
        >
          {navigation.noelRaffle}
        </Link>

        <Link
          href={`/${lang}/gift-raffle`}
          className={styles.linkButton}
          style={{ display: `${currentPage === "gift" && "none"}` }}
        >
          {navigation.giftRaffle}
        </Link>

        <Link href="/login" className={styles.linkButton}>
          {navigation.sponsors}
        </Link>
        <Link
          href={`/${lang}/stats`}
          className={styles.linkButton}
          style={{ display: `${currentPage === "stats" && "none"}` }}
        >
          {navigation.statistics}
        </Link>
        <LocaleSwitcher lang={lang} />
      </div>
      <div className={styles.hamburgerMenu}>
        <TemporaryDrawer lang={lang} />
      </div>
    </header>
  );
}

export default Navbar;
