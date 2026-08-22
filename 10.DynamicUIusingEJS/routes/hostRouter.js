const express = require('express');
const hostRouter = express.Router();
const path = require('path');
const rootDir = require('../utils/pathUtil');

hostRouter.get("/add-home",(req,res,next) => {
  res.sendFile(path.join(rootDir,'views','addHome.html'));
});

const regHomes = [];

hostRouter.post("/add-home",(req,res,next) => {
  console.log(req.body);
  regHomes.push({housename : req.body.housename});
  res.sendFile(path.join(rootDir,'views','homeAdded.html'));
});

exports.hostRouter = hostRouter;
exports.regHomes = regHomes;