
const render = {
  getHome : (req,res)=>{
    res.render('home', {loggedIn: true,name:""});
  },
  getLogin : (req, res) => {
    res.render('login');
  },
  getSignUp : (req, res) => {
    res.render('signup')
  }
}

module.exports = render;
