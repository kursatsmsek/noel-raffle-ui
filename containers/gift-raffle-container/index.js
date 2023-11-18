import RaffleStepper from "@/components/stepper";
import styles from "./styles.module.css";
import { Mountains_of_Christmas } from "next/font/google";
import Image from "next/image";
import FatherChristmas from "@/assets/logo1.png";

const font = Mountains_of_Christmas({ subsets: ["latin"], weight: "700" });

function GiftRaffleContainer({ page }) {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <Image width={150} src={FatherChristmas} alt="father-christmas" />
        <h1 className={`${font.className} ${styles.title}`}>Gift Raffle</h1>
        <h2 className={styles.slogan}>{page.noel.slogan}</h2>
        <div className={styles.desc}>{page.noel.description}</div>
      </div>
      <div className={styles.box}>
        <div className={styles.raffle}>
          {/* <RaffleStepper page={page} /> */}
        </div>
      </div>
    </div>
  );
}

export default GiftRaffleContainer;
