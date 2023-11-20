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

function Row({ gift, raffleData, setRaffleData, page }) {
  const [open, setOpen] = useState(false);

  const [formData, setFormData] = useState({
    giftId: gift.giftId,
    giftName: gift.giftName,
    giftCount: gift.giftCount,
  });

  function editGift(e) {
    e.preventDefault();

    let gifts = raffleData.gifts;
    const updatedGifts = gifts.map((gift) => {
      if (gift.giftId === formData.giftId) {
        return { ...gift, ...formData };
      }
      return gift;
    });

    setRaffleData((prevData) => {
      return { ...prevData, gifts: updatedGifts };
    });
  }

  function deleteGift() {
    let gifts = raffleData.gifts;
    const updatedGifts = gifts.filter(
      (gift) => gift.giftId !== formData.giftId
    );

    setRaffleData((prevData) => {
      return { ...prevData, gifts: updatedGifts };
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

        <TableCell>{gift.giftName}</TableCell>
        <TableCell>{gift.giftCount}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={4}>
          <Collapse
            style={{ padding: "2% 0 2% 0" }}
            in={open}
            timeout="auto"
            unmountOnExit
          >
            <form onSubmit={editGift}>
              <Grid
                container
                rowSpacing={2}
                columnSpacing={2}
                columns={{ xs: 4, sm: 8, md: 12 }}
              >
                <Grid item xs={2} sm={4} md={6}>
                  <TextField
                    size="small"
                    label={page.place.giftName}
                    placeholder={page.place.giftName}
                    variant="outlined"
                    color="error"
                    name="name"
                    required
                    fullWidth
                    value={formData.giftName}
                    onChange={(e) =>
                      setFormData({ ...formData, giftName: e.target.value })
                    }
                  />
                </Grid>
                <Grid item xs={2} sm={4} md={6}>
                  <TextField
                    size="small"
                    label={page.place.giftCount}
                    placeholder={page.place.giftCount}
                    variant="outlined"
                    color="error"
                    name="surname"
                    type="number"
                    required
                    fullWidth
                    value={formData.giftCount}
                    onChange={(e) =>
                      setFormData({ ...formData, giftCount: e.target.value })
                    }
                  />
                </Grid>
                <Grid item xs={2} sm={4} md={6}>
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
                <Grid item xs={2} sm={4} md={6}>
                  <Button
                    size="small"
                    color="error"
                    style={{ height: "100%" }}
                    fullWidth
                    variant="contained"
                    onClick={deleteGift}
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

function GiftTable({ raffleData, setRaffleData, page }) {
  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 160 }}>
        <Table stickyHeader aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell>{page.button.edit}</TableCell>
              <TableCell>{page.place.giftName}</TableCell>
              <TableCell>{page.place.giftCount}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {raffleData.gifts?.map((gift, key) => (
              <Row
                key={key}
                gift={gift}
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
export default GiftTable;
