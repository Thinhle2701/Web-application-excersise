import React from "react";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Grid from "@mui/material/Grid";
const index = () => {
  return (
    <div>
      <Paper
        style={{ textAlign: "center", marginLeft: "20%", marginRight: "20%" }}
      >
        <h1 style={{}}>Header</h1>
      </Paper>
      <div style={{ display: "flex" }}>
        <Paper style={{ width: "200px", marginLeft: "20%" }}>
          <div>
            <MenuList style={{ color: "black", cursor: "pointer" }}>
              <MenuItem>Profile</MenuItem>
              <MenuItem>My account</MenuItem>
              <MenuItem>Logout</MenuItem>
              <MenuItem>Login</MenuItem>
            </MenuList>
          </div>
        </Paper>
        <div>
          <Grid style={{ marginLeft: "15%" }}>
            <Paper style={{ width: "300px" }}>
              <h1 style={{ textAlign: "center" }}>Main Content 1</h1>
            </Paper>
          </Grid>
          <Grid style={{ marginLeft: "15%" }}>
            <Paper style={{ width: "300px" }}>
              <h1 style={{ textAlign: "center" }}>Main Content 2</h1>
            </Paper>
          </Grid>
        </div>
        <div>
          <Grid style={{ marginLeft: "40%" }}>
            <Paper style={{ width: "300px" }}>
              <h1 style={{ textAlign: "center" }}>Main Content 1</h1>
            </Paper>
          </Grid>
          <Grid style={{ marginLeft: "40%" }}>
            <Paper style={{ width: "300px" }}>
              <h1 style={{ textAlign: "center" }}>Main Content 2</h1>
            </Paper>
          </Grid>
        </div>
      </div>
      <Paper
        style={{ textAlign: "center", marginLeft: "20%", marginRight: "20%" }}
      >
        <h1 style={{}}>Footer</h1>
      </Paper>
    </div>
  );
};

export default index;
