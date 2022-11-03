const express = require("express");
const app = express();
const req = require("express/lib/request");
const res = require("express/lib/response");
app.use(express.json());
var cors = require("cors");
app.use(cors());
const messages = [
  {
    author: "SC",
    text: "Hello SC",
  },
  {
    author: "PAO",
    text: "Hello PAO",
  },
  {
    author: "Capcom",
    text: "hello Capcom",
  },
];
app.get("/messages/:forum", (req, res) => {
  if (req.params && req.params.forum === "nasa") {
    res.send(messages);
  }
  return res.status(400).send({ error: "Unknown Forum" });
});

app.get("/messages/:forum", (req, res) => {
  if (req.params && req.params.forum === "nasa") {
    res.send(messages);
  }
  return res.status(400).send({ error: "Unknown Forum" });
});
app.post("/messages/:forum", (req, res) => {
  if (req.params && req.params.forum === "nasa") {
    messages.push(req.body);
  }
  return res.status(400).send({ error: "Unknown Forum" });
});
app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(8000, () => console.log("listening port 8000"));
