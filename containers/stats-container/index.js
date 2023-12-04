"use client";
import styles from "./styles.module.css";
import { Mountains_of_Christmas } from "next/font/google";
import StatBox from "@/components/stat-box";
import { Grid } from "@mui/material";
import SnowMan from "@/assets/logo2.png";
import Cookie from "@/assets/cookie.png";
import GiftHand from "@/assets/gift-hand.png";
import FatherChristmas from "@/assets/logo1.png";
import Image from "next/image";

const font = Mountains_of_Christmas({ subsets: ["latin"], weight: "700" });

function StatsContainer({ page }) {
  return (
    <Grid container rowSpacing={1} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Grid
        item
        xs={4}
        sm={8}
        md={4}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <StatBox number={100} description={"Toplam Çekiliş"} />
      </Grid>
      <Grid
        item
        xs={4}
        sm={8}
        md={4}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image width={150} src={FatherChristmas} alt="father-christmas" />
      </Grid>
      <Grid
        item
        xs={4}
        sm={8}
        md={4}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <StatBox number={99} description={"Toplam Hediye"} />
      </Grid>

      <Grid
        item
        xs={4}
        sm={8}
        md={4}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image width={150} src={SnowMan} alt="snow-man" />
      </Grid>
      <Grid
        item
        xs={4}
        sm={8}
        md={4}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <StatBox number={99} description={"Toplam Hediye"} />
      </Grid>
      <Grid
        item
        xs={4}
        sm={8}
        md={4}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image width={150} src={Cookie} alt="cookie-man" />
      </Grid>

      <Grid
        item
        xs={4}
        sm={8}
        md={4}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <StatBox number={100} description={"Toplam Çekiliş"} />
      </Grid>
      <Grid
        item
        xs={4}
        sm={8}
        md={4}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image width={150} src={GiftHand} alt="gift-hand" />
      </Grid>
      <Grid
        item
        xs={4}
        sm={8}
        md={4}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <StatBox number={99} description={"Toplam Hediye"} />
      </Grid>
    </Grid>
  );
}

export default StatsContainer;
