"use client";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import {
  Alert,
  Box,
  Button,
  Checkbox,
  Collapse,
  Grid,
  Snackbar,
} from "@mui/material";
import UserTable from "@/components/user-table";
import Link from "next/link";
import { useParams } from "next/navigation";
import { completeGiftRaffle, completeNoelRaffle } from "@/util/apiCalls";
import GiftTable from "@/components/gift-table";

function ThirdStep({
  raffleData,
  setRaffleData,
  handleBack,
  handleNext,
  page,
  withGiftEdit,
}) {
  const { lang } = useParams();

  const [checkedBox, setCheckedBox] = useState(false);

  const [checkedBoxDisabled, setCheckedBoxDisabled] = useState(false);

  const [sWWOpen, setSWWOpen] = useState(false); // something went wrong open ?

  const [userTableOpen, setUserTableOpen] = useState(false);

  const [giftTableOpen, setGiftTableOpen] = useState(false);

  const [errorMessageShow, setErrorMessageShow] = useState(false);

  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    if (raffleData.participants.length < 3) {
      setCheckedBox(false);
      setCheckedBoxDisabled(true);
    }
    if (withGiftEdit) {
      if (raffleData.gifts.length < 1) {
        setCheckedBox(false);
        setCheckedBoxDisabled(true);
      }
    }
  }, [raffleData]);

  const submitRaffle = async (e) => {
    e.preventDefault();
    try {
      if (raffleData.participants.length > 500) {
        setFeedback(page.place.maximumParticipant);
        setErrorMessageShow(true);
        return;
      }
      raffleData.participants.forEach((participant) => delete participant.id);
      let res = undefined;
      if (withGiftEdit) {
        res = await completeGiftRaffle(lang, raffleData);
      } else {
        res = await completeNoelRaffle(lang, raffleData);
      }

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
        <div className={styles.desc}>
          {withGiftEdit
            ? page.place.checkAndCompleteGiftRaffle
            : page.place.checkAndCompleteRaffle}
        </div>
      </Grid>
      {withGiftEdit ? (
        <>
          <Grid item xs={4} sm={8} md={12}>
            <Alert
              style={{ cursor: "pointer" }}
              severity="info"
              onClick={() => {
                setGiftTableOpen(false);
                setUserTableOpen(!userTableOpen);
              }}
            >
              {page.place.clickShowParticipantTable}
            </Alert>
          </Grid>
          <Grid item xs={4} sm={8} md={12}>
            <Collapse in={userTableOpen}>
              <UserTable
                raffleData={raffleData}
                setRaffleData={setRaffleData}
                page={page}
              />
            </Collapse>
          </Grid>
          {withGiftEdit && (
            <Grid item xs={4} sm={8} md={12}>
              <Alert
                style={{ cursor: "pointer" }}
                severity="info"
                onClick={() => {
                  setUserTableOpen(false);
                  setGiftTableOpen(!giftTableOpen);
                }}
              >
                {page.place.clickShowGiftTable}
              </Alert>
            </Grid>
          )}
          {withGiftEdit && (
            <Grid item xs={4} sm={8} md={12}>
              <Collapse in={giftTableOpen}>
                <GiftTable
                  raffleData={raffleData}
                  setRaffleData={setRaffleData}
                  page={page}
                />
              </Collapse>
            </Grid>
          )}
        </>
      ) : (
        <Grid item xs={4} sm={8} md={12}>
          <UserTable
            raffleData={raffleData}
            setRaffleData={setRaffleData}
            page={page}
          />
        </Grid>
      )}
      <Grid item xs={4} sm={8} md={12}>
        <div className={styles.desc} style={{ padding: "initial" }}>
          <Checkbox
            size="small"
            color="error"
            required
            disabled={checkedBoxDisabled}
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
      {raffleData.participants.length < 3 && (
        <Grid item xs={4} sm={8} md={12}>
          <Alert severity="error">{page.place.minimumParticipants}</Alert>
        </Grid>
      )}
      {withGiftEdit && raffleData.gifts.length < 1 && (
        <Grid item xs={4} sm={8} md={12}>
          <Alert severity="error">{page.place.minimumGifts}</Alert>
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
