const express = require("express");
const app = express();
const body_parser = require("body-parser");
const port = 3000;
const mainRouter = require("./router");

app.use(body_parser());
app.use(mainRouter);

app.listen(port, () => {
  console.log(`app is running on port http://localhost:${port}`);
});
