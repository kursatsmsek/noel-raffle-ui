"use client";
import styles from "./styles.module.css";
import { Mountains_of_Christmas } from "next/font/google";
import StatBox from "@/components/stat-box";
import { Grid } from "@mui/material";

const font = Mountains_of_Christmas({ subsets: ["latin"], weight: "700" });

function StatsContainer({ page }) {
  return (
    <Grid container rowSpacing={1} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Grid
        item
        xs={4}
        sm={8}
        md={6}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <StatBox number={100} description={"Toplam Çekiliş"} />
      </Grid>
      <Grid
        item
        xs={4}
        sm={8}
        md={6}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <StatBox number={99} description={"Toplam Hediye"} />
      </Grid>
      <Grid
        item
        xs={4}
        sm={8}
        md={12}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <StatBox number={99} description={"Toplam Hediye"} />
      </Grid>
      <Grid
        item
        xs={4}
        sm={8}
        md={6}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <StatBox number={100} description={"Toplam Çekiliş"} />
      </Grid>
      <Grid
        item
        xs={4}
        sm={8}
        md={6}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <StatBox number={99} description={"Toplam Hediye"} />
      </Grid>
    </Grid>
  );
}

export default StatsContainer;
