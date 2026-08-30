const Home = require('../models/home');
const Fav = require('../models/favourites');

exports.getAddhome = (req,res,next) => {
  res.render('host/editHome',{title : "Add home to airbnb",editing:false});//telling the view by giving title data from model to what to give to user classic work of controller view gives the resposnse back with dynamic ui and server sends the response..
}

exports.postAddHome = (req,res,next) => {
  console.log(req.body);
  const mod = new Home(req.body.housename,req.body.price,req.body.location,req.body.rating,req.body.photourl,req.body.description);
  mod.save(false).then(()=> {
    res.render('host/homeAdded',{title : "Successfull home added"});
  }).catch((error)=> {
    console.log("Error adding home...");
  });
}

exports.getHostHomes = (req,res,next) => {
  Home.fetchAll().then(([regHomes,fields]) => {
   res.render('host/host-home-list',{regHomes : regHomes,title : "HostHome list"});
  });
}

exports.getEditHome = (req,res,next) => {
  const homeId = req.params.homeId;
  const editing = req.query.editing === "true";
  Home.findById(homeId).then(([rows]) => {
    const home = rows[0];
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
  const mod = new Home(req.body.housename,req.body.price,req.body.location,req.body.rating,req.body.photourl,req.body.description);
  mod.id = req.body.id;
  mod.save(true).then(() => {
    res.redirect('/host-home-list');
  }).catch((error) => {
    console.log("Error adding home: ",error);
  });
}

exports.postDeleteHome = (req,res,next) => {
  const homeId = req.params.homeId;
  Home.delHome(homeId).then(([rows]) => {
    Fav.delFavourites(homeId,() => {
    res.redirect('/host-home-list');
  })
  }).catch((error) => {
    console.log("Error while deleting: ",error);
  });;
}


