"use client";
import { Alert, Box, Button, Grid, TextField } from "@mui/material";
import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import { v4 as uuidv4 } from "uuid";
import { isEmailAvailable } from "@/util";

function SecondStep({
  raffleData,
  setRaffleData,
  handleBack,
  handleNext,
  page,
}) {
  const emptyFormData = {
    name: "",
    surname: "",
    email: "",
  };

  const [userData, setUserData] = useState(emptyFormData);

  const [lastAdded, setLastAdded] = useState("");

  const [emailError, setEmailError] = useState(false);

  const [errorMessageShow, setErrorMessageShow] = useState(false);

  const [feedback, setFeedback] = useState("");

  const submitUser = (e) => {
    if (isEmailAvailable(userData.email, raffleData.participants)) {
      e.preventDefault();

      userData.userId = uuidv4();
      let users = raffleData.participants || [];
      users.push(userData);
      setRaffleData((prevData) => {
        return { ...prevData, participants: users };
      });

      setEmailError(false);
      setLastAdded(`${userData.name} ${userData.surname}`);
      setUserData(emptyFormData);
    } else {
      e.preventDefault();
      setEmailError(true);
    }
  };

  const submitNext = () => {
    if (raffleData.participants.length < 3) {
      setFeedback(page.place.minimumParticipants);
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
              <b> {lastAdded} </b> {page.place.participantAdded}
            </div>
          ) : (
            <div className={styles.desc}>{page.place.addFirstParticipant}</div>
          )}
        </Grid>
        <Grid item xs={4} sm={8} md={12}>
          <TextField
            id="outlined-basic"
            label={page.place.name}
            placeholder={page.place.participantNamePlaceholder}
            variant="outlined"
            required
            color="error"
            name="title"
            fullWidth
            value={userData.name}
            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
          />
        </Grid>
        <Grid item xs={4} sm={8} md={12}>
          <TextField
            id="outlined-basic"
            label={page.place.surname}
            placeholder={page.place.participantSurnamePlaceholder}
            variant="outlined"
            required
            color="error"
            name="title"
            fullWidth
            value={userData.surname}
            onChange={(e) =>
              setUserData({ ...userData, surname: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={4} sm={8} md={12}>
          <TextField
            id="outlined-basic"
            label={page.place.email}
            placeholder={page.place.participantEmailPlaceholder}
            variant="outlined"
            fullWidth
            required
            type="email"
            color="error"
            name="title"
            helperText={emailError && page.place.emailAlreadyTaken}
            value={userData.email}
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
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
          <div className={styles.desc}>{page.place.dontWorry}</div>
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

export default SecondStep;
