const Home = require('../models/home');
const Fav = require('../models/favourites');

exports.homePage = (req,res,next) => {
  Home.fetchAll().then(([regHomes,fields]) => {
    res.render('store/home-list',{regHomes : regHomes,title : "Homes List"});
  });
}

exports.getIndex = (req,res,next) => {
  Home.fetchAll().then(([regHomes,fields]) => {
   res.render('store/index',{regHomes : regHomes,title : "Air bnb home page"});
  });
}

exports.getBooking = (req,res,next) => {
  Home.fetchAll().then(([regHomes,fields]) => {
   res.render('store/booking.ejs',{title : "My bookings"});
  });
}

exports.getFavouriteList = (req,res,next) => {
  Home.fetchAll().then(([regHomes,fields]) => {
   Fav.getFavourites(fav => {
      res.render('store/fav-list.ejs',{regHomes : regHomes,title : "My Favourites",fav: fav});
    });
  });
}

exports.getHomeDetails = (req,res,next) => {
  const homeId = req.params.homeId;
  Home.findById(homeId).then(([rows]) => {
    const home = rows[0];
    if(!home) {
      console.log("Home not found");
      res.redirect('/');
    } else {
      console.log("Home details found: ",home);
      res.render('store/home-detail.ejs',{title : "Home",home: home});
      }
  });
}

exports.postAddToFavourite = (req,res,next) => {
  console.log("Came to add favourite: ",req.body);
  Fav.addToFavourite(req.body.id,()=>{
    res.redirect('/favourites');
  });
}

exports.postDelFavourite = (req,res,next) => {
  const homeId = req.params.homeId;
  Fav.delFavourites(homeId,() => {
    res.redirect('/favourites');
  });
}