const express = require('express');
const userRouter = express.Router();
const home = require('../controllers/userController');

userRouter.get("/",home.homePage);
userRouter.get("/bookings",home.getBooking);
userRouter.get("/index",home.getIndex);
userRouter.get("/favourites",home.getFavouriteList);
userRouter.get("/homes/:homeId",home.getHomeDetails);
userRouter.post("/favourites",home.postAddToFavourite);
userRouter.post("/fav/delete-home/:homeId",home.postDelFavourite);

module.exports = userRouter;