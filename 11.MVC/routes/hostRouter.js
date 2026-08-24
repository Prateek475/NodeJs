const express = require('express');
const hostRouter = express.Router();
const home = require('../controllers/homes');


hostRouter.get("/add-home",home.getAddhome);

hostRouter.post("/add-home",home.postAddHome);

exports.hostRouter = hostRouter;