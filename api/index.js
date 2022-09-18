const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const path = require("path");

app.get("/api", (req, res) => {
  res.json({ message: "Hello from Express!" });
});

app.get("/account", (req, res) => {
  res.redirect("/account");
});

app.listen(PORT, () => {
  console.log(`Server listening on PORT: ${PORT}`);
});
