import React from "react";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
const index = () => {
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h1>Profile</h1>
        <p>I am a student</p>{" "}
        <Paper
          style={{
            width: "100px",
            marginLeft: "70%",
            backgroundColor: "white",
          }}
        >
          <MenuList style={{ color: "black", cursor: "pointer" }}>
            <MenuItem>Profile</MenuItem>
            <MenuItem>My account</MenuItem>
            <MenuItem>Logout</MenuItem>
          </MenuList>
        </Paper>
      </div>
      <br></br>

      <div style={{ display: "flex" }}>
        <div style={{ marginLeft: "10%" }}>
          <h2>About me</h2>
          <p>I am a lovely cat</p>
        </div>
        <div style={{ marginLeft: "15%" }}>
          <img src="https://www.purina.co.uk/sites/default/files/styles/ttt_image_510/public/2022-02/GettyImages-1073093932.jpg?itok=bTzsMMA1"></img>
        </div>
        <div style={{ marginLeft: "10%" }}>
          <h2>Detail</h2>
          <div style={{ display: "flex" }}>
            <p style={{ fontWeight: "bold", marginRight: "10px" }}>Name: </p>
            <p>Thinh</p>
          </div>
          <div style={{ display: "flex" }}>
            <p style={{ fontWeight: "bold", marginRight: "10px" }}>Age: </p>
            <p>22</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
