"use client";
import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import styles from "./styles.module.css";
import { TiThMenu } from "react-icons/ti";
import {
  Box,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import Sock from "@/assets/sock.png";
import Image from "next/image";
import Link from "next/link";
import { IoLanguageSharp } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { IoStatsChart } from "react-icons/io5";
import { FaGift } from "react-icons/fa6";
import { TbChristmasTree } from "react-icons/tb";
import LocaleSwitcher from "../navbar/locale-switcher";

function TemporaryDrawer({ navigation, lang, currentPage }) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className={styles.hamburger}>
      <Button
        style={{
          marginRight: "1rem",
          fontSize: "xx-large",
        }}
        variant="text"
        color="info"
      >
        <TiThMenu onClick={() => setDrawerOpen(true)} />
      </Button>
      <Drawer
        anchor="bottom"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <div className={styles.drawerContent}>
          <div className={styles.menuItems}>
            <Box
              padding={1}
              style={{ display: `${currentPage === "noel" && "none"}` }}
            >
              <Link href={`/${lang}`}>{navigation.noelRaffle}</Link>
            </Box>

            <Box
              padding={1}
              style={{ display: `${currentPage === "gift" && "none"}` }}
            >
              <Link
                href={`/${lang}/gift-raffle`}
                style={{ display: `${currentPage === "gift" && "none"}` }}
              >
                {navigation.giftRaffle}
              </Link>
            </Box>

            <Box
              padding={1}
              style={{ display: `${currentPage === "sponsor" && "none"}` }}
            >
              <Link
                href={`/${lang}/sponsor`}
                style={{ display: `${currentPage === "sponsor" && "none"}` }}
              >
                {navigation.sponsors}
              </Link>
            </Box>

            <Box
              padding={1}
              style={{ display: `${currentPage === "stats" && "none"}` }}
            >
              <Link
                href={`/${lang}/stats`}
                style={{
                  display: `${currentPage === "stats" && "none"}`,
                }}
              >
                {navigation.statistics}
              </Link>
            </Box>

            <LocaleSwitcher lang={lang} />
          </div>
          <div className={styles.sockImage}>
            <Image src={Sock} width={120} alt="noel-sock" />
          </div>
        </div>
      </Drawer>
    </div>
  );
}

export default TemporaryDrawer;
