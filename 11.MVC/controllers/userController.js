const Home = require('../models/home');

exports.homePage = (req,res,next) => {
  Home.fetchAll(registerHomes => {
    console.log(registerHomes);
    res.render('store/home-list',{regHomes : registerHomes,title : "Homes List"});
  });
}

exports.getIndex = (req,res,next) => {
  Home.fetchAll(registerHomes => {
    res.render('store/index',{regHomes : registerHomes,title : "Air bnb home page"});
  });
}

exports.getBooking = (req,res,next) => {
  Home.fetchAll(registerHomes => {
    res.render('store/booking.ejs',{title : "My bookings"});
  });
}

exports.getFavouriteList = (req,res,next) => {
  Home.fetchAll(registerHomes => {
    res.render('store/fav-list.ejs',{regHomes : registerHomes,title : "My Favourites"});
  });
}