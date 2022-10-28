const express = require("express");
const PORT = process.env.PORT || 3005;
const app = express();
const { createCard } = require("./scripts");

app.get("/api", (req, res) => {
  res.send("Hello from api");
});

app.get("/createCard", (req, res) => {
  const newCard = createCard("Ann", "1111");
  res.send(newCard);
});

app.listen(PORT, () => {
  console.log(`Server listening on PORT: ${PORT}`);
});
