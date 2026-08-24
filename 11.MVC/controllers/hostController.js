const Home = require('../models/home');

exports.getAddhome = (req,res,next) => {
  res.render('host/addHome',{title : "Add home to airbnb"});//telling the view by giving title data from model to what to give to user classic work of controller view gives the resposnse back with dynamic ui and server sends the response..
}
exports.postAddHome = (req,res,next) => {
  console.log(req.body);
  const mod = new Home(req.body.housename,req.body.price,req.body.location,req.body.rating,req.body.photourl);
  mod.save();
  res.render('host/homeAdded',{title : "Successfull home added"});
}

exports.getHostHomes = (req,res,next) => {
  Home.fetchAll(registerHomes => {
    res.render('host/host-home-list',{regHomes : registerHomes,title : "HostHome list"});
  });
}
