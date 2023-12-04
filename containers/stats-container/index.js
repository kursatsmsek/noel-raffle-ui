"use client";
import styles from "./styles.module.css";
import { Mountains_of_Christmas } from "next/font/google";
import StatBox from "@/components/stat-box";
import { Grid, Skeleton } from "@mui/material";
import SnowMan from "@/assets/logo2.png";
import Cookie from "@/assets/cookie.png";
import GiftHand from "@/assets/gift-hand.png";
import FatherChristmas from "@/assets/logo1.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getStats } from "@/util/apiCalls";

const font = Mountains_of_Christmas({ subsets: ["latin"], weight: "700" });

function StatsContainer({ page }) {
  const [data, setData] = useState({
    noelRaffleCount: 0,
    giftRaffleCount: 0,
    participantCount: 0,
    giftCount: 0,
    totalRaffleCount: 0,
  });

  useEffect(() => {
    getStatsData();
  }, []);

  const getStatsData = async () => {
    const response = await getStats();
    if (response.ok) {
      const responseData = await response.json();
      setData(responseData);
    }
  };

  return (
    <Grid container rowSpacing={1} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Grid
        item
        xs={4}
        sm={8}
        md={4}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <StatBox
          number={data.noelRaffleCount}
          description={page.place.noelRaffleCount}
          page={page}
        />
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
        <StatBox
          number={data.giftRaffleCount}
          description={page.place.giftRaffleCount}
          page={page}
        />
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
        <StatBox
          number={data.totalRaffleCount}
          description={page.place.totalRaffleCount}
          page={page}
        />
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
        <StatBox
          number={data.participantCount}
          description={page.place.participantCount}
          page={page}
        />
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
        <StatBox
          number={data.giftCount}
          description={page.place.giftCount}
          page={page}
        />
      </Grid>
    </Grid>
  );
}

export default StatsContainer;
