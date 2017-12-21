const cookie_signature = require("cookie-signature");
require('env2')('config.env');
const qs = require('querystring');

const v_cookie = (req, res, next) => {
  const cookie = req.headers.cookie;
  console.log("the COOKIE =>",cookie);
  if (cookie) {
    let hash = cookie.split('=')[1];
    let result = cookie_signature.unsign(hash, process.env.SECRET);
    // console.log(result);
    if (result === false) {
      res.end("something wrong with your cookie");
    } else {
      req.body.unhashedCookie = result;
      console.log('req body before changing the button',req.body);
      return next();

    }
  }else{
    return next();
  }
};

module.exports = v_cookie;
