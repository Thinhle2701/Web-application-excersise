import React, { useEffect, useState } from "react";
import crash from "./assets/crash.png";
import kick from "./assets/kick.png";
import snare from "./assets/snare.png";
import tom1 from "./assets/tom1.png";
import tom2 from "./assets/tom2.png";
import crashAudio from "./assets/crash.mp3";
import kickAudio from "./assets/kick-bass.mp3";
import snareAudio from "./assets/snare.mp3";
import tom1Audio from "./assets/tom-1.mp3";
import tom2Audio from "./assets/tom-2.mp3";
const Drum = () => {
  useEffect(() => {
    document.addEventListener("keydown", detectKeyDown, true);
  }, []);
  const detectKeyDown = (e) => {
    switch (e.key) {
      case "a":
        crashPlay();
        break;
      case "A":
        crashPlay();
        break;
      case "b":
        kickPlay();
        break;
      case "B":
        kickPlay();
        break;
      case "c":
        snarePlay();
        break;
      case "C":
        snarePlay();
        break;
      case "d":
        tom1Play();
        break;
      case "D":
        tom1Play();
        break;
      case "e":
        tom2Play();
        break;
      case "E":
        tom2Play();
        break;
      default:
      // code block
    }
  };
  const crashPlay = () => {
    new Audio(crashAudio).play();
  };
  const kickPlay = () => {
    new Audio(kickAudio).play();
  };
  const snarePlay = () => {
    new Audio(snareAudio).play();
  };
  const tom1Play = () => {
    new Audio(tom1Audio).play();
  };
  const tom2Play = () => {
    new Audio(tom2Audio).play();
  };
  function handleKeyPress(e) {
    console.log(e.target.value);
  }
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Drum</h1>
      <div
        style={{ position: "relative", textAlign: "center", color: "white" }}
      >
        <div style={{ display: "flex", marginLeft: "40px" }}>
          <button
            onClick={() => {
              crashPlay();
            }}
          >
            <img src={crash} style={{ width: "250px", height: "200px" }}></img>
            <div
              style={{
                top: "50%",
                left: "40%",
                transform: "translate(-50%, -110%)",
                color: "brown",
                fontSize: "40px",
                marginLeft: "50%",
              }}
            >
              A
            </div>
          </button>

          <button
            onClick={() => {
              kickPlay();
            }}
            style={{ marginLeft: "20px" }}
          >
            <img src={kick} style={{ width: "250px", height: "200px" }}></img>
            <div
              style={{
                top: "50%",
                left: "40%",
                transform: "translate(-50%, -110%)",
                color: "brown",
                fontSize: "40px",
                marginLeft: "50%",
              }}
            >
              B
            </div>
          </button>

          <button
            onClick={() => {
              snarePlay();
            }}
            style={{ marginLeft: "20px" }}
          >
            <img src={snare} style={{ width: "250px", height: "200px" }}></img>
            <div
              style={{
                top: "50%",
                left: "40%",
                transform: "translate(-50%, -110%)",
                color: "brown",
                fontSize: "40px",
                marginLeft: "50%",
              }}
            >
              C
            </div>
          </button>
          <button
            style={{ marginLeft: "20px" }}
            onClick={() => {
              tom1Play();
            }}
          >
            <img src={tom1} style={{ width: "250px", height: "200px" }}></img>
            <div
              style={{
                top: "50%",
                left: "40%",
                transform: "translate(-50%, -110%)",
                color: "blue",
                fontSize: "40px",
                marginLeft: "50%",
              }}
            >
              D
            </div>
          </button>
          <button
            style={{ marginLeft: "20px" }}
            onClick={() => {
              tom2Play();
            }}
          >
            <img src={tom2} style={{ width: "250px", height: "200px" }}></img>
            <div
              style={{
                top: "50%",
                left: "40%",
                transform: "translate(-50%, -110%)",
                color: "blue",
                fontSize: "40px",
                marginLeft: "50%",
              }}
            >
              E
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Drum;
