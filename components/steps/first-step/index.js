"use client";
import React from "react";
import Image from "next/image";
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import FatherChristmas from "@/assets/logo2.png";

function FirstStep({
  raffleData,
  setRaffleData,
  handleBack,
  handleNext,
  page,
}) {
  return (
    <form style={{ width: "100%" }} onSubmit={handleNext}>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 6, sm: 12, md: 18 }}>
        <Grid
          item
          md={18}
          width={"100%"}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Image width={150} src={FatherChristmas} alt="father-christmas" />
        </Grid>
        <Grid item md={18} width={"100%"}>
          <TextField
            id="outlined-basic"
            label={page.place.raffleTitle}
            placeholder={page.place.raffleTitlePlaceholder}
            variant="outlined"
            fullWidth
            required
            color="error"
            name="title"
            value={raffleData.title}
            onChange={(e) =>
              setRaffleData({ ...raffleData, title: e.target.value })
            }
          />
        </Grid>
        <Grid item md={18} width={"100%"}>
          <FormControl fullWidth>
            <InputLabel color="error" id="demo-simple-select-helper-label">
              {page.place.chooseRaffleGroup}
            </InputLabel>
            <Select
              color="error"
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={raffleData.group}
              label={page.place.chooseRaffleGroup}
              onChange={(e) =>
                setRaffleData({ ...raffleData, group: e.target.value })
              }
            >
              <MenuItem value={10}>{page.place.teamCompany}</MenuItem>
              <MenuItem value={20}>{page.place.friendsClassmates} </MenuItem>
              <MenuItem value={30}>{page.place.family}</MenuItem>
              <MenuItem value={40}>{page.place.other}</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item md={18} width={"100%"}>
          <FormControl fullWidth>
            <InputLabel color="error" id="demo-simple-select-helper-label">
              {page.place.chooseSector}
            </InputLabel>
            <Select
              color="error"
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={raffleData.sector}
              label={page.place.chooseSector}
              onChange={(e) =>
                setRaffleData({ ...raffleData, sector: e.target.value })
              }
            >
              <MenuItem value={10}>{page.place.technology}</MenuItem>
              <MenuItem value={20}>{page.place.education}</MenuItem>
              <MenuItem value={30}>{page.place.food}</MenuItem>
              <MenuItem value={40}>{page.place.health}</MenuItem>
              <MenuItem value={50}>{page.place.sport}</MenuItem>
              <MenuItem value={60}>{page.place.other}</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item md={18} width={"100%"}>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="error"
              disabled
              onClick={handleBack}
              sx={{ mr: 1 }}
              variant="outlined"
            >
              {page.button.back}
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />

            <Button type="submit" color="error" variant="outlined">
              {page.button.next}
            </Button>
          </Box>
        </Grid>
      </Grid>
    </form>
  );
}

export default FirstStep;
