
const render = {
  getHome : (req,res)=>{
    res.render('home');
  },
  getLogin : (req, res) => {
    res.render('login');
  },
  getSignUp : (req, res) => {
    res.render('signup')
  }
}

module.exports = render;
