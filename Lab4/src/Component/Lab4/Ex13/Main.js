import React, { useState, useEffect } from "react";
import axios from "axios";
const Main = () => {
  const [messages, setMessages] = useState([{ author: "", text: "" }]);
  useEffect(() => {}, []);
  const [forum, setForum] = useState("");
  const fectchMessageNasa = async () => {
    await axios
      .get("http://localhost:8000/messages/nasa")
      .then((res) => {
        setMessages(res.data);
      })
      .catch((error) => console.log(error));
  };
  const fectchMessage = async () => {
    const url = "http://localhost:8000/messages/" + forum;
    await axios
      .get(url)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => setMessages([]));
  };
  console.log(messages);
  return (
    <div>
      <button onClick={() => fectchMessageNasa()}>Nasa</button>
      <button
        onClick={() => {
          setForum("notNasa");
          fectchMessage();
        }}
      >
        Not Nasa
      </button>
      <input></input>
      {messages.map((m) => (
        <div>
          <div>{m.author}</div>
          <div>{m.text}</div>
        </div>
      ))}
    </div>
  );
};

export default Main;
