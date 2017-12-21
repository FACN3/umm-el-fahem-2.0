
const render = {
  getHome : (req,res)=>{
    console.log('req in render', req.body);
    let obj = {loggedIn: false }
    if(req.body.unhashedCookie){
      obj.loggedIn=true;
      obj.name = JSON.parse(req.body.unhashedCookie).name;
    }
    console.log('ob before render into navbar => ', obj);
    res.render('home',obj );
  },
  getLogin : (req, res) => {
    res.render('login');
  },
  getSignUp : (req, res) => {
    res.render('signup')
  }
}

module.exports = render;
