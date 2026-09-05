exports.getLogin = (req, res, next) => {
  res.render("auth/login", { title: "Login page",isLoggedIn: false});
};

exports.postLogin = (req, res, next) => {
  console.log(req.body);
  res.cookie("isLoggedIn",true);//this cookie will be stored in client storage
  res.redirect("/");
};

exports.postLogout = (req, res, next) => {
  res.cookie("isLoggedIn",false);//this cookie will be stored in client storage and set to false making him/her logged out and redirecting them to home page...
  res.redirect("/");
};


