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

async function Navbar({ lang, isGiftRaffle }) {
  const { navigation } = await getDictionary(lang);

  return (
    <header className={styles.header}>
      <div className={styles.logoDiv}>
        <Image width={110} src={Logo} alt="merry-christmas" />
      </div>
      <div className={styles.buttonsDiv}>
        <Link
          href={isGiftRaffle ? `/${lang}` : `/${lang}/gift-raffle`}
          className={styles.linkButton}
        >
          {isGiftRaffle ? navigation.noelRaffle : navigation.giftRaffle}
        </Link>
        <Link href="/login" className={styles.linkButton}>
          {navigation.sponsors}
        </Link>
        <Link href="/login" className={styles.linkButton}>
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
