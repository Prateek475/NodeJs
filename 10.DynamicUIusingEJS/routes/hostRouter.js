const express = require('express');
const hostRouter = express.Router();


hostRouter.get("/add-home",(req,res,next) => {
  res.render('addHome',{title : "Add home to airbnb"});
});

const regHomes = [];

hostRouter.post("/add-home",(req,res,next) => {
  console.log(req.body);
  regHomes.push({housename : req.body.housename});
  res.render('homeAdded',{title : "Successfull home added"});
});

exports.hostRouter = hostRouter;
exports.regHomes = regHomes;