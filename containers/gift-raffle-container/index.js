import styles from "./styles.module.css";
import { Mountains_of_Christmas } from "next/font/google";
import Image from "next/image";
import GiftRaffle from "@/assets/gift-raffle.png";
import GiftRaffleStepper from "@/components/gift-stepper";

const font = Mountains_of_Christmas({ subsets: ["latin"], weight: "700" });

function GiftRaffleContainer({ page }) {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <Image width={150} src={GiftRaffle} alt="father-christmas" />
        <h1 className={`${font.className} ${styles.title}`}>
          {page.gift.title}
        </h1>
        <h2 className={styles.slogan}>{page.gift.slogan}</h2>
        <div className={styles.desc}>{page.gift.description}</div>
      </div>
      <div className={styles.box}>
        <div className={styles.raffle}>
          <GiftRaffleStepper page={page} />
        </div>
      </div>
    </div>
  );
}

export default GiftRaffleContainer;
