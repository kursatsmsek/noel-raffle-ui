"use client";
import { Button, Grid, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";

function EditUser() {
  const [userData, setUserData] = useState({
    id: "",
    name: "",
    surname: "",
    email: "",
  });

  useEffect(() => {
    // console.log("userData => ", userData);
  }, [userData]);

  const aa = (e) => {
    e.preventDefault();
    // console.log("bittititititit");
  };

  return (
    <form onSubmit={aa}>
      <Grid
        container
        rowSpacing={2}
        columnSpacing={2}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid item xs={2} sm={4} md={6}>
          <TextField
            size="small"
            label="Ad"
            placeholder="Katılımcı Adı"
            variant="outlined"
            color="error"
            name="name"
            required
            fullWidth
            value={userData.name}
            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
          />
        </Grid>
        <Grid item xs={2} sm={4} md={6}>
          <TextField
            size="small"
            label="Soyad"
            placeholder="Katılımcı Soyadı"
            variant="outlined"
            color="error"
            name="surname"
            required
            fullWidth
            value={userData.surname}
            onChange={(e) =>
              setUserData({ ...userData, surname: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={2} sm={4} md={6}>
          <TextField
            size="small"
            label="E-posta"
            placeholder="Katılımcı E-postası"
            variant="outlined"
            color="error"
            name="email"
            required
            fullWidth
            type="email"
            value={userData.email}
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={1} sm={2} md={4}>
          <Button
            size="small"
            color="error"
            style={{ height: "100%" }}
            fullWidth
            variant="contained"
            type="submit"
          >
            Kaydet
          </Button>
        </Grid>
        <Grid item xs={1} sm={2} md={2}>
          <Button
            size="small"
            color="error"
            style={{ height: "100%" }}
            fullWidth
            variant="contained"
            onClick={() => console.log("delete user")}
          >
            Sil
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default EditUser;
