const express = require('express');
const hostRouter = express.Router();
const home = require('../controllers/hostController');


hostRouter.get("/add-home",home.getAddhome);

hostRouter.post("/add-home",home.postAddHome);

hostRouter.get('/host-home-list',home.getHostHomes);

hostRouter.get('/host/edit-home/:homeId',home.getEditHome);

hostRouter.post('/host/edit-home',home.postEditHome);

hostRouter.post('/host/delete-home/:homeId',home.postDeleteHome);

exports.hostRouter = hostRouter;