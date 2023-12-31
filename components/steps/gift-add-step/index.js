"use client";
import { Alert, Box, Button, Grid, TextField } from "@mui/material";
import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import { v4 as uuidv4 } from "uuid";

function GiftAddStep({
  raffleData,
  setRaffleData,
  handleBack,
  handleNext,
  page,
}) {
  const emptyFormData = {
    giftId: "",
    name: "",
    count: 1,
  };

  const [formData, setFormData] = useState(emptyFormData);

  const [lastAdded, setLastAdded] = useState("");

  const [errorMessageShow, setErrorMessageShow] = useState(false);

  const [feedback, setFeedback] = useState("");

  const submitUser = (e) => {
    e.preventDefault();
    if (formData.count < 1) {
      setFeedback(page.place.minimumGiftCount);
      setErrorMessageShow(true);
      return;
    }
    let gifts = raffleData.gifts || [];
    formData.giftId = uuidv4();
    gifts.push(formData);
    setRaffleData((prevData) => {
      return { ...prevData, gifts: gifts };
    });
    setLastAdded(formData.name);
    setFormData(emptyFormData);
  };

  const submitNext = () => {
    if (raffleData.gifts.length < 1) {
      setFeedback(page.place.minimumGifts);
      setErrorMessageShow(true);
      return;
    }
    handleNext();
  };

  return (
    <form onSubmit={submitUser}>
      <Grid
        container
        rowSpacing={2}
        columnSpacing={2}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid item xs={4} sm={8} md={12}>
          {lastAdded !== "" ? (
            <div className={styles.desc}>
              <b> {lastAdded} </b> {page.place.giftAdded}
            </div>
          ) : (
            <div className={styles.desc}>{page.place.addFirstGift}</div>
          )}
        </Grid>
        <Grid item xs={4} sm={8} md={12}>
          <TextField
            label={page.place.giftName}
            placeholder={page.place.giftName}
            variant="outlined"
            required
            color="error"
            fullWidth
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </Grid>
        <Grid item xs={4} sm={8} md={12}>
          <TextField
            label={page.place.giftCount}
            fullWidth
            type="number"
            required
            variant="outlined"
            value={formData.count}
            onChange={(e) =>
              setFormData({ ...formData, count: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={4} sm={8} md={12}>
          <Button
            color="error"
            style={{ height: "100%" }}
            fullWidth
            variant="contained"
            type="submit"
          >
            {page.button.add}
          </Button>
        </Grid>
        {errorMessageShow && (
          <Grid item xs={4} sm={8} md={12}>
            <Alert severity="warning">{feedback}</Alert>
          </Grid>
        )}
        <Grid item xs={4} sm={8} md={12}>
          <div className={styles.desc}>{page.place.dontWorryGift}</div>
        </Grid>
        <Grid item xs={4} sm={8} md={12} width={"100%"}>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="error"
              onClick={handleBack}
              sx={{ mr: 1 }}
              variant="outlined"
            >
              {page.button.back}
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />

            <Button onClick={submitNext} color="error" variant="outlined">
              {page.button.next}
            </Button>
          </Box>
        </Grid>
      </Grid>
    </form>
  );
}

export default GiftAddStep;
