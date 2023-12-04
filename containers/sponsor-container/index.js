"use client";
import { Grid } from "@mui/material";
import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import Image from "next/image";
import devKursat from "@/assets/devkursat.png";
import { BiCoffeeTogo } from "react-icons/bi";

function SponsorContainer({ page }) {
  return (
    <Grid container rowSpacing={1} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Grid
        item
        xs={4}
        sm={8}
        md={12}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Grid
          container
          className={styles.infoContainer}
          rowSpacing={1}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item xs={4} sm={8} md={12} className={styles.infoLeftContent}>
            <div className={styles.projectDesc}>
              <h1
                style={{
                  marginBottom: "2%",
                  fontSize: "xx-large",
                  color: "#bbf0ff",
                }}
              >
                {page.place.projectTitle}
              </h1>
              <h3>{page.place.projectDescription}</h3>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Link
                  href={process.env.NEXT_PUBLIC_GITHUB_URL}
                  style={{ color: "#bbf0ff" }}
                >
                  {page.place.clickProjectSite}
                </Link>
                <FaGithub style={{ marginLeft: "1%" }} />
              </div>
            </div>
            <hr />
            <div className={styles.projectDesc}>
              {page.place.projectTechStack}
            </div>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        item
        xs={4}
        sm={8}
        md={12}
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "2%",
          marginBottom: "2%",
        }}
      >
        <Grid
          container
          className={styles.infoContainer}
          rowSpacing={1}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item xs={4} sm={8} md={8} className={styles.infoLeftContent}>
            <div className={styles.projectDesc}>
              <h1
                style={{
                  marginBottom: "2%",
                  fontSize: "xx-large",
                  color: "#bbf0ff",
                }}
              >
                {page.place.aboutDeveloper}
              </h1>
              <h3>{page.place.kursatsimsek}</h3>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Link
                  target="_blank"
                  href={"https://www.buymeacoffee.com/kursat"}
                  style={{ color: "#bbf0ff" }}
                >
                  {page.place.clickCoffeeLink}
                </Link>
                <BiCoffeeTogo style={{ marginLeft: "1%" }} />
              </div>
            </div>
            <hr />
            <div className={styles.developerLinks}>
              <Link target="_blank" href={"https://www.github.com/kursatsmsek"}>
                <FaGithub />
              </Link>
              <Link
                target="_blank"
                href={"https://www.linkedin.com/in/kursatsmsek"}
              >
                <FaLinkedin />
              </Link>
              <Link
                target="_blank"
                href={"https://www.instagram.com/kursatsmsek"}
              >
                <FaInstagram />
              </Link>
              <Link target="_blank" href={"mailto:kursatsimsek@protonmail.ch"}>
                <MdOutlineMail />
              </Link>
            </div>
          </Grid>
          <Grid item xs={4} sm={8} md={3} className={styles.infoRightContent}>
            <Image src={devKursat} width={180} alt="dev-kursat" />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default SponsorContainer;
