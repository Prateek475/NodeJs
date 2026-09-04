exports.getLogin = (req, res, next) => {
  res.render("auth/login", { title: "Login page",isLoggedIn: false});
};

exports.postLogin = (req, res, next) => {
  console.log(req.body);
  res.cookie("isLoggedIn",true);//this cookie will be stored in client storage
  res.redirect("/");
};


