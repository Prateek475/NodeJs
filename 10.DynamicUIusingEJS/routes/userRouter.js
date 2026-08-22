const express = require('express');
const { regHomes } = require('./hostRouter');
const userRouter = express.Router();

userRouter.get("/",(req,res,next) => {
  console.log(regHomes);
  res.render('home',{regHomes : regHomes});
});

module.exports = userRouter;