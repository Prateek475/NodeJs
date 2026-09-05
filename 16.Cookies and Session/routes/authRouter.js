const express = require('express');
const authRouter = express.Router();
const auth = require('../controllers/authController');


authRouter.get("/login",auth.getLogin);
authRouter.post("/login",auth.postLogin);
authRouter.post("/logout",auth.postLogout);

module.exports = authRouter;