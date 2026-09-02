const Home = require("../models/home");
const Fav = require("../models/favourites");

exports.getAddhome = (req, res, next) => {
  res.render("host/editHome", { title: "Add home to airbnb", editing: false }); //telling the view by giving title data from model to what to give to user classic work of controller view gives the resposnse back with dynamic ui and server sends the response..
};

exports.postAddHome = (req, res, next) => {
  console.log(req.body);
  const { housename, price, location, rating, photourl, description } =
    req.body;
  const mod = new Home({
    housename,
    price,
    location,
    rating,
    photourl,
    description,
  });
  mod
    .save()
    .then(() => {
      console.log("Home saved successfully...");
      res.render("host/homeAdded", { title: "Home successfully added" });
    })
    .catch((err) => {
      console.log("Error occurred: ", err);
    });
};

exports.getHostHomes = (req, res, next) => {
  Home.find().then((regHomes) => {
    res.render("host/host-home-list", {
      regHomes: regHomes,
      title: "HostHome list",
    });
  });
};

exports.getEditHome = (req, res, next) => {
  const homeId = req.params.homeId;
  const editing = req.query.editing === "true";
  Home.findById(homeId).then((home) => {
    if (!home) {
      console.log("Home not found!!!");
      return res.redirect("/host-home-list");
    } else {
      console.log(homeId, editing, home);
      res.render("host/editHome", {
        title: "Edit your home",
        editing: editing,
        home: home,
      });
    }
  });
};

exports.postEditHome = (req, res, next) => {
  const {id,housename,price,location,rating,photourl,description} = req.body;
  Home.findById(id).then((home) => {
    if (!home) {
      console.log("Home not found!!!");
      return res.redirect("/host-home-list");
    } else {
      home.housename = housename;
      home.price  = price;
      home.location = location;
      home.rating = rating;
      home.photourl = photourl;
      home.description = description;
      home.save().then(result => {
        console.log("Home updated: ",result);
      }).catch(err => {
        console.log("Error while updating home: ",err)
      });
      res.redirect("/host-home-list");
    }
  }).catch(err => console.log("Error while finding home: ",err));
};

exports.postDeleteHome = (req, res, next) => {
  const homeId = req.params.homeId;
  Home.findByIdAndDelete(homeId).then(() => {
    Fav.findOneAndDelete({id : homeId}).then(() => res.redirect("/host-home-list")).catch((err) => console.log("Favourite house cant be deleted due to error: ",err));
  }).catch(err => {
    console.log("Home cant be deleted due to error: ",err);
  });
};
