const Home = require("../models/home");
const Fav = require("../models/favourites");

exports.homePage = (req, res, next) => {
  Home.find().then((regHomes) => {
    res.render("store/home-list", { regHomes: regHomes, title: "Homes List" });
  });
};

exports.getIndex = (req, res, next) => {
  Home.find().then((regHomes) => {
    res.render("store/index", {
      regHomes: regHomes,
      title: "Air bnb home page",
    });
  });
};

exports.getBooking = (req, res, next) => {
  Home.find().then((regHomes) => {
    res.render("store/booking.ejs", { title: "My bookings" });
  });
};

exports.getFavouriteList = (req, res, next) => {
  Home.find().then((regHomes) => {
    Fav.find().then((fav) => {
      res.render("store/fav-list.ejs", {
        regHomes: regHomes,
        title: "My Favourites",
        fav: fav,
      });
    });
  });
};

exports.getHomeDetails = (req, res, next) => {
  const homeId = req.params.homeId;
  Home.findById(homeId).then((home) => {
    if (!home) {
      console.log("Home not found");
      res.redirect("/");
    } else {
      console.log("Home details found: ", home);
      res.render("store/home-detail.ejs", { title: "Home", home: home });
    }
  });
};

exports.postAddToFavourite = (req, res, next) => {
  console.log("Came to add favourite: ", req.body);
  const mod = new Fav({id : req.body.id});
  mod.save().then(() => {
    res.redirect("/favourites");
  }).catch(err => {
    console.log("Error occurred during saving home: ",err);
  });
};

exports.postDelFavourite = (req, res, next) => {
  const homeId = req.params.homeId;
  Fav.findOneAndDelete({id : homeId}).then(() => res.redirect("/favourites")).catch((err) => console.log("Favourite house cant be deleted due to error: ",err));
};
