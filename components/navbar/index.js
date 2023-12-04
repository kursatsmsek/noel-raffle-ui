import styles from "./styles.module.css";
import Link from "next/link";
import Logo from "@/assets/logo3.png";
import Image from "next/image";
import TemporaryDrawer from "../drawer";
import { getDictionary } from "@/lib/dictionary";
import LocaleSwitcher from "./locale-switcher";
import { FaGithub } from "react-icons/fa";
import { IoStatsChart } from "react-icons/io5";
import { FaGift } from "react-icons/fa6";
import { TbChristmasTree } from "react-icons/tb";

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
          <TbChristmasTree style={{ marginLeft: "0.5rem" }} />
        </Link>

        <Link
          href={`/${lang}/gift-raffle`}
          className={styles.linkButton}
          style={{ display: `${currentPage === "gift" && "none"}` }}
        >
          {navigation.giftRaffle}
          <FaGift style={{ marginLeft: "0.5rem" }} />
        </Link>

        <Link
          href={`/${lang}/sponsor`}
          className={styles.linkButton}
          style={{ display: `${currentPage === "sponsor" && "none"}` }}
        >
          {navigation.sponsors}
          <FaGithub style={{ marginLeft: "0.5rem" }} />
        </Link>
        <Link
          href={`/${lang}/stats`}
          className={styles.linkButton}
          style={{ display: `${currentPage === "stats" && "none"}` }}
        >
          {navigation.statistics}
          <IoStatsChart style={{ marginLeft: "0.5rem" }} />
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
