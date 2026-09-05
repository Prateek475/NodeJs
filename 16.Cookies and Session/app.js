const express = require('express');
const session = require('express-session');
const parser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();
const userRouter = require('./routes/userRouter');
const {hostRouter} = require('./routes/hostRouter');
const authRouter = require('./routes/authRouter');
const path = require('path');
const rootDir = require('./utils/pathUtil');
const errorControl = require('./controllers/error'); 
const { default: mongoose } = require('mongoose');

app.set('view engine','ejs');
app.set('views','views');

app.use(express.static(path.join(rootDir,'public')));

app.use((req,res,next) => {
  console.log(req.url,req.method);
  next();
});

app.use(parser.urlencoded());
app.use(session({
  secret : "DR_RIC",
  resave : false,
  saveUninitialized : true
}));
app.use(cookieParser());
app.use((req,res,next) => {
  req.isLoggedIn =req.cookies.isLoggedIn === "true";//agar cookie aai h then we will check wether it is logged in or not if there is no cookie then there is no nooed to check it is sure it is not logged in
  console.log(req.isLoggedIn);
  next();
})
app.use(authRouter);
app.use(userRouter);
app.use((req,res,next) => {
  if(!req.isLoggedIn) {
    return res.redirect("/login");
  }
  next();
})
app.use(hostRouter);

app.use(errorControl.get404);

const port = 3000;
const DB_PATH = "mongodb+srv://prateekdixit252006_db_user:7217797616prateek@prateek0004.qyapyi9.mongodb.net/airbnb1?appName=prateek0004"
mongoose.connect(DB_PATH).then(() => {
  console.log("Connected to mongoose which connect us to mongodb...");
  app.listen(port,()=> {
    console.log("Server is running...");
  });
}).catch(err => {
  console.log("Unable to connect to mongoose due to error: ",err);
})