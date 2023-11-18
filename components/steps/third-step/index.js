"use client";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { Alert, Box, Button, Checkbox, Grid, Snackbar } from "@mui/material";
import UserTable from "@/components/user-table";
import Link from "next/link";
import { useParams } from "next/navigation";
import { completeNoelRaffle } from "@/util/apiCalls";

function ThirdStep({
  raffleData,
  setRaffleData,
  handleBack,
  handleNext,
  page,
}) {
  const { lang } = useParams();

  const [checkedBox, setCheckedBox] = useState(false);

  const [sWWOpen, setSWWOpen] = useState(false); // something went wrong open ?

  const [errorMessageShow, setErrorMessageShow] = useState(false);

  const [feedback, setFeedback] = useState("");

  const submitRaffle = async (e) => {
    e.preventDefault();
    try {
      if (raffleData.participants.length > 500) {
        setFeedback(page.place.maximumParticipant);
        setErrorMessageShow(true);
        return;
      }
      raffleData.participants.forEach((participant) => delete participant.id);
      const res = await completeNoelRaffle(lang, raffleData);

      if (res.ok) {
        setErrorMessageShow(false);
        setRaffleData({
          title: "",
          group: "",
          sector: "",
          participants: "",
        });
        handleNext();
      } else {
        const responseText = await res.text();
        setFeedback(responseText);
        setErrorMessageShow(true);
      }
    } catch (error) {
      console.error(page.place.somethingWentWrong, error);
      setSWWOpen(true);
    }
  };

  return (
    <Grid container rowSpacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Grid item xs={4} sm={8} md={12}>
        <div className={styles.desc}>{page.place.checkAndCompleteRaffle}</div>
      </Grid>
      <Grid item xs={4} sm={8} md={12}>
        <UserTable
          raffleData={raffleData}
          setRaffleData={setRaffleData}
          page={page}
        />
      </Grid>

      <Grid item xs={4} sm={8} md={12}>
        <div className={styles.desc} style={{ padding: "initial" }}>
          <Checkbox
            size="small"
            color="error"
            required
            checked={checkedBox}
            onChange={(e) => setCheckedBox(e.target.checked)}
          />
          <span>
            <Link href={"#"}>{page.place.confidentialityAgreement} </Link> -
            <Link href={"#"}> {page.place.userAgreement} </Link>{" "}
            {page.place.readAndAccept}
          </span>
        </div>
      </Grid>
      {errorMessageShow && (
        <Grid item xs={4} sm={8} md={12}>
          <Alert severity="error">{feedback}</Alert>
        </Grid>
      )}
      <Grid item xs={4} sm={8} md={12} width={"100%"}>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Button
            color="error"
            onClick={handleBack}
            sx={{ mr: 1 }}
            variant="outlined"
          >
            {page.button.back}
          </Button>
          <Box sx={{ flex: "1 1 auto" }} />
          <Button
            onClick={submitRaffle}
            type="submit"
            color="error"
            variant="contained"
            disabled={!checkedBox}
          >
            {page.place.completeRaffle}
          </Button>
        </Box>
      </Grid>
      <Snackbar
        open={sWWOpen}
        autoHideDuration={2000}
        onClose={() => setSWWOpen(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={() => setSWWOpen(false)}
          severity="error"
          sx={{ width: "100%" }}
        >
          {page.place.somethingWentWrong}
        </Alert>
      </Snackbar>
    </Grid>
  );
}

export default ThirdStep;
