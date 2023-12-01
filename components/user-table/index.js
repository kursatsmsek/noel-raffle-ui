import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import { FaRegEdit } from "react-icons/fa";
import { Button, Grid, TextField } from "@mui/material";

function Row({ user, raffleData, setRaffleData, page }) {
  const [open, setOpen] = useState(false);

  const [userData, setUserData] = useState({
    userId: user.userId,
    name: user.name,
    surname: user.surname,
    email: user.email,
  });

  function editUser(e) {
    e.preventDefault();

    let users = raffleData.participants;
    console.log("d users => ", users);
    const updatedUsers = users.map((participant) => {
      if (participant.userId === userData.userId) {
        return { ...participant, ...userData };
      }
      return participant;
    });
    console.log("d updatedUsers => ", updatedUsers);

    setRaffleData((prevData) => {
      return { ...prevData, participants: updatedUsers };
    });
  }

  function deleteUser() {
    let users = raffleData.participants;
    const updatedUsers = users.filter(
      (participant) => participant.userId !== userData.userId
    );

    setRaffleData((prevData) => {
      return { ...prevData, participants: updatedUsers };
    });
  }

  return (
    <>
      <TableRow>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            <FaRegEdit />
          </IconButton>
        </TableCell>

        <TableCell>{user.name}</TableCell>
        <TableCell>{user.surname}</TableCell>
        <TableCell>{user.email}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={4}>
          <Collapse
            style={{ padding: "2% 0 2% 0" }}
            in={open}
            timeout="auto"
            unmountOnExit
          >
            {/* <EditUser /> */}
            <form onSubmit={editUser}>
              <Grid
                container
                rowSpacing={2}
                columnSpacing={2}
                columns={{ xs: 4, sm: 8, md: 12 }}
              >
                <Grid item xs={2} sm={4} md={6}>
                  <TextField
                    size="small"
                    label={page.place.name}
                    placeholder={page.place.participantNamePlaceholder}
                    variant="outlined"
                    color="error"
                    name="name"
                    required
                    fullWidth
                    value={userData.name}
                    onChange={(e) =>
                      setUserData({ ...userData, name: e.target.value })
                    }
                  />
                </Grid>
                <Grid item xs={2} sm={4} md={6}>
                  <TextField
                    size="small"
                    label={page.place.surname}
                    placeholder={page.place.participantSurnamePlaceholder}
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
                    label={page.place.email}
                    placeholder={page.place.participantEmailPlaceholder}
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
                    {page.button.save}
                  </Button>
                </Grid>
                <Grid item xs={1} sm={2} md={2}>
                  <Button
                    size="small"
                    color="error"
                    style={{ height: "100%" }}
                    fullWidth
                    variant="contained"
                    onClick={deleteUser}
                  >
                    {page.button.delete}
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

function UserTable({ raffleData, setRaffleData, page }) {
  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 260 }}>
        <Table stickyHeader aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell>{page.button.edit}</TableCell>
              <TableCell>{page.place.name}</TableCell>
              <TableCell>{page.place.surname}</TableCell>
              <TableCell>{page.place.email}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {raffleData.participants?.map((user) => (
              <Row
                key={user.userId}
                user={user}
                raffleData={raffleData}
                setRaffleData={setRaffleData}
                page={page}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
export default UserTable;
