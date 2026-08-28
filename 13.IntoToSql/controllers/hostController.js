const Home = require('../models/home');
const Fav = require('../models/favourites');

exports.getAddhome = (req,res,next) => {
  res.render('host/editHome',{title : "Add home to airbnb",editing:false});//telling the view by giving title data from model to what to give to user classic work of controller view gives the resposnse back with dynamic ui and server sends the response..
}

exports.postAddHome = (req,res,next) => {
  console.log(req.body);
  const mod = new Home(req.body.housename,req.body.price,req.body.location,req.body.rating,req.body.photourl);
  mod.save(false);
  res.render('host/homeAdded',{title : "Successfull home added"});
}

exports.getHostHomes = (req,res,next) => {
  Home.fetchAll().then(([regHomes,fields]) => {
   res.render('host/host-home-list',{regHomes : regHomes,title : "HostHome list"});
  });
}

exports.getEditHome = (req,res,next) => {
  const homeId = req.params.homeId;
  const editing = req.query.editing === "true";
  Home.findById(homeId,home => {
    if(!home) {
      console.log("Home not found!!!");
      return res.redirect('/host-home-list');
    } else {
      console.log(homeId,editing,home);
      res.render('host/editHome',{title : "Edit your home",editing:editing,home: home});
    }
  });
}

exports.postEditHome = (req,res,next) => {
  const mod = new Home(req.body.housename,req.body.price,req.body.location,req.body.rating,req.body.photourl);
  mod.id = req.body.id;
  mod.save(true);
  res.redirect('/host-home-list');
}

exports.postDeleteHome = (req,res,next) => {
  const homeId = req.params.homeId;
  Home.delHome(homeId);
  Fav.delFavourites(homeId,() => {
    res.redirect('/host-home-list');
  });
}


