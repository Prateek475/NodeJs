exports.getLogin = (req, res, next) => {
  res.render("auth/login", { title: "Login page"});
};

exports.postLogin = (req, res, next) => {
  res.redirect("/");
};


