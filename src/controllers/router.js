const express = require('express');
const router = express.Router();
const path = require("path");
const rend = require('./render');


router.use("/static", express.static(path.join(__dirname, "..","..", "/public")));

router.get("/", rend.getHome);
router.get("/login", rend.getLogin);
router.get("/signup", rend.getSignUp);


module.exports = router;
