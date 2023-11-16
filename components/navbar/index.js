import styles from "./styles.module.css";
import Link from "next/link";
import Logo from "@/assets/logo3.png";
import Image from "next/image";
import TemporaryDrawer from "../drawer";
import { getDictionary } from "@/lib/dictionary";
import { GrLanguage } from "react-icons/gr";
import { IoLanguageSharp } from "react-icons/io5";

async function Navbar({ lang }) {
  const { navigation } = await getDictionary(lang);

  return (
    <header className={styles.header}>
      <div className={styles.logoDiv}>
        <Image width={110} src={Logo} alt="merry-christmas" />
      </div>
      <div className={styles.buttonsDiv}>
        <Link href={`/${lang}`} className={styles.linkButton}>
          {navigation.giftRaffle}
        </Link>
        <Link href="/login" className={styles.linkButton}>
          {navigation.sponsors}
        </Link>
        <Link href="/login" className={styles.linkButton}>
          {navigation.statistics}
        </Link>
        <Link
          href={lang === "tr" ? "en" : "tr"}
          style={{ backgroundColor: "rgb(249, 117, 94)" }}
          className={styles.linkButton}
        >
          <IoLanguageSharp />
          <div style={{ marginLeft: "8px" }}>
            {lang === "tr" ? "English" : "Türkçe"}
          </div>
        </Link>
      </div>
      <div className={styles.hamburgerMenu}>
        <TemporaryDrawer lang={lang} />
      </div>
    </header>
  );
}

export default Navbar;
