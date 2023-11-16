import { Alert, Button, Grid } from "@mui/material";
import Image from "next/image";
import React from "react";
import Cookie from "@/assets/cookie.png";

function SuccessStep({ handleReset }) {
  return (
    <form onSubmit={handleReset}>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 6, sm: 12, md: 18 }}>
        <Grid
          item
          md={18}
          width={"100%"}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Image width={250} src={Cookie} alt="cookie-man" />
        </Grid>
        <Grid item md={18} width={"100%"}>
          <Alert severity="success">
            Çekiliş başarıyla tamamlandı. Lütfen e-postalarınızı kontrol edin.
          </Alert>
        </Grid>
        <Grid item md={18} width={"100%"}>
          <Button fullWidth type="submit" color="error" variant="outlined">
            Yeni Çekiliş
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default SuccessStep;
