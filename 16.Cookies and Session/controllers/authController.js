exports.getLogin = (req, res, next) => {
  res.render("auth/login", { title: "Login page",isLoggedIn: false});
};

exports.postLogin = (req, res, next) => {
  console.log(req.body);
  req.session.isLoggedIn = true;
  // res.cookie("isLoggedIn",true);
  //this cookie will be stored in client storage
  res.redirect("/");
};

exports.postLogout = (req, res, next) => {
  req.session.destroy(() => {
    res.redirect("/login");
  });//this will destroy that session associeated with client from database only isLoggedin part id and cookie data will remain,bczz in req we have cookie from clinet storing unique id which help identify document of specific client and then that things isLoggedIn in session collection get destroyed and then client get redirected to login page
};


