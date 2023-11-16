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

function FirstStep({ raffleData, setRaffleData, handleBack, handleNext }) {
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
            label="Çekiliş Başlığı"
            placeholder="Ör: Alice'in IK Takımı @Şirket"
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
              Çekiliş Grubu Seçin
            </InputLabel>
            <Select
              color="error"
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={raffleData.group}
              label="Çekiliş Grubu Seçin"
              onChange={(e) =>
                setRaffleData({ ...raffleData, group: e.target.value })
              }
            >
              <MenuItem value={10}>Ekip - Şirket</MenuItem>
              <MenuItem value={20}>Arkadaş - Sınıf Çekilişi</MenuItem>
              <MenuItem value={30}>Aile - Akraba Çekilişi</MenuItem>
              <MenuItem value={40}>Diğer</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item md={18} width={"100%"}>
          <FormControl fullWidth>
            <InputLabel color="error" id="demo-simple-select-helper-label">
              Sektör Seçin
            </InputLabel>
            <Select
              color="error"
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={raffleData.sector}
              label="Sektör Seçin"
              onChange={(e) =>
                setRaffleData({ ...raffleData, sector: e.target.value })
              }
            >
              <MenuItem value={10}>Teknoloji</MenuItem>
              <MenuItem value={20}>Eğitim</MenuItem>
              <MenuItem value={30}>Gıda</MenuItem>
              <MenuItem value={40}>Sağlık</MenuItem>
              <MenuItem value={50}>Spor</MenuItem>
              <MenuItem value={60}>Diğer</MenuItem>
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
              Geri
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />

            <Button type="submit" color="error" variant="outlined">
              İleri
            </Button>
          </Box>
        </Grid>
      </Grid>
    </form>
  );
}

export default FirstStep;
