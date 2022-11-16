import React, { useState, useEffect } from "react";
import axios from "axios";
const Main = () => {
  const [messages, setMessages] = useState([{ author: "", text: "" }]);
  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");
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
  const addMessage = async () => {
    axios
      .post("http://localhost:8000/messages/nasa", {
        author: author,
        text: text,
      })
      .then(function (response) {
        setMessages(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });
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
      <input
        onChange={(e) => {
          setAuthor(e.target.value);
        }}
        placeholder="Author"
        style={{ display: "block" }}
      ></input>
      <input
        onChange={(e) => {
          setText(e.target.value);
        }}
        placeholder="Text"
        style={{ display: "block" }}
      ></input>
      <button onClick={() => addMessage()}>Add Message</button>
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
