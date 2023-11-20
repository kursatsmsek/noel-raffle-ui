"use client";
import {
  Alert,
  Box,
  Button,
  Grid,
  InputAdornment,
  TextField,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import { v4 as uuidv4 } from "uuid";
import { isEmailAvailable } from "@/util";
import { NumberInput } from "@mui/base/Unstable_NumberInput/NumberInput";

function GiftAddStep({
  raffleData,
  setRaffleData,
  handleBack,
  handleNext,
  page,
}) {
  const emptyFormData = {
    giftName: "",
    giftCount: 1,
  };

  const [formData, setFormData] = useState(emptyFormData);

  const [lastAdded, setLastAdded] = useState("");

  const [errorMessageShow, setErrorMessageShow] = useState(false);

  const [feedback, setFeedback] = useState("");

  const submitUser = (e) => {
    e.preventDefault();
    let gifts = raffleData.gifts || [];
    gifts.push(formData);
    setRaffleData((prevData) => {
      return { ...prevData, gifts: gifts };
    });
    setLastAdded(formData.giftName);
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
            label={"Hediye Adı"}
            placeholder={"Hediye Adı"}
            variant="outlined"
            required
            color="error"
            name="title"
            fullWidth
            value={formData.giftName}
            onChange={(e) =>
              setFormData({ ...formData, giftName: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={4} sm={8} md={12}>
          <TextField
            label="Hediye Sayısı"
            fullWidth
            type="number"
            required
            variant="outlined"
            value={formData.giftCount}
            onChange={(e) =>
              setFormData({ ...formData, giftCount: e.target.value })
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
