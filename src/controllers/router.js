const express = require('express');
const router = express.Router();
const path = require("path");
const rend = require('./render');
const loginQuery = require('../../database/queries/loginQuery');
const hashPassAndAdd = require('../authentication/hashPass');
const verifyCookie = require('../authentication/verify');

router.use("/static", express.static(path.join(__dirname, "..", "..", "/public")));

router.get("/",verifyCookie, rend.getHome);
router.get("/login", rend.getLogin);
router.get("/signup", rend.getSignUp);
router.post("/login", (req, res) => {
  loginQuery(req.body.user_name, req.body.password, (err, result) => {
    if(err) console.log(err);
    res.setHeader('Set-Cookie', `cookie=${result}`);
    res.redirect('/');
  })
})
router.post('/add_user',(req,res)=>{
  hashPassAndAdd(req.body);
  res.redirect('/');
})

module.exports = router;
