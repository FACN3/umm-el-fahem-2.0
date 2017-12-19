const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
const fs = require("fs");
const body_parser = require("body-parser");
console.log("path", __dirname + "/public");
// app.use(body_parser());

app.use("/static", express.static(path.join(__dirname, "..", "/public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "/public/index.html"));
});

app.listen(port, () => {
  console.log(`app is running on port http://localhost:${port}`);
});
