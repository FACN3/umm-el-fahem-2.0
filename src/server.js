const express = require("express");
const app = express();
const path = require('path');
const exphbs = require('express-handlebars');
const body_parser = require("body-parser");
const mainRouter = require("./controllers/router");
const port = 3000;

app.use(body_parser());
app.set('views',path.join(__dirname,'views'));
app.set('view engine','hbs');
app.engine(
  'hbs',
  exphbs({
    extname: 'hbs',
    layoutsDir:path.join(__dirname,'views','layouts'),
    partialsDir:path.join(__dirname,'views','partials'),
    defaultLayout : 'main',
  })
)
app.use(mainRouter);

app.listen(port, () => {
  console.log(`app is running on port http://localhost:${port}`);
});
