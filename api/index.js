const express = require("express");
const PORT = process.env.PORT || 3005;
const app = express();

app.get("/api", (req, res) => {
  res.send("Hello from api");
});

app.listen(PORT, () => {
  console.log(`Server listening on PORT: ${PORT}`);
});
