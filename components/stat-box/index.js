import React from "react";
import styles from "./styles.module.css";
import { IoStatsChart } from "react-icons/io5";
import { MdOutlineQueryStats } from "react-icons/md";

function StatBox({ number, description }) {
  return (
    <div className={styles.statBox}>
      <div className={styles.statBoxNumber}>{number}</div>
      <div className={styles.statBoxDescription}>{description}</div>
      <div className={styles.statBoxIcon}>
        <MdOutlineQueryStats />
      </div>
    </div>
  );
}

export default StatBox;
