"use client";
import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import styles from "./styles.module.css";
import { TiThMenu } from "react-icons/ti";
import {
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

function TemporaryDrawer({ lang }) {
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
            <List>
              {["2023 Teknoloji Gündemi", "Sponsorlar", "Site Verileri"].map(
                (text, index) => (
                  <ListItem key={text} disablePadding>
                    <ListItemButton>
                      <ListItemText primary={text} />
                    </ListItemButton>
                  </ListItem>
                )
              )}
              <Link
                href={lang === "tr" ? "en" : "tr"}
                style={{ backgroundColor: "rgb(249, 117, 94)" }}
              >
                <ListItem disablePadding>
                  <ListItemButton>
                    <IoLanguageSharp />
                    <div style={{ marginLeft: "8px" }}>
                      {lang === "tr" ? "English" : "Türkçe"}
                    </div>
                  </ListItemButton>
                </ListItem>
              </Link>
            </List>
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
