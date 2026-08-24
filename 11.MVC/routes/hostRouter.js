const express = require('express');
const hostRouter = express.Router();
const home = require('../controllers/hostController');


hostRouter.get("/add-home",home.getAddhome);

hostRouter.post("/add-home",home.postAddHome);

hostRouter.get('/host-home-list',home.getHostHomes);

exports.hostRouter = hostRouter;