import React from "react";
import styles from "./styles.module.css";
import { MdOutlineQueryStats } from "react-icons/md";
import { Skeleton } from "@mui/material";

function StatBox({ number, description, page }) {
  return (
    <div
      className={styles.statBox}
      style={{ padding: `${number === 0 ? 0 : "2%"}` }}
    >
      {number === 0 ? (
        <Skeleton variant="rectangular" width={"100%"} height={200} />
      ) : (
        <>
          <div className={styles.statBoxUntilNow}>{page.place.untilNow}</div>
          <div className={styles.statBoxNumber}>{number}</div>
          <div className={styles.statBoxDescription}>{description}</div>
          <div className={styles.statBoxIcon}>
            <MdOutlineQueryStats />
          </div>
        </>
      )}
    </div>
  );
}

export default StatBox;
