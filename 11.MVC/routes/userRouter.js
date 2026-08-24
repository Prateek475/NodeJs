const express = require('express');
const userRouter = express.Router();
const home = require('../controllers/homes');

userRouter.get("/",home.homePage);

module.exports = userRouter;