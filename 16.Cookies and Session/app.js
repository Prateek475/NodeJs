const express = require('express');
const session = require('express-session');
const mongoDbStore = require('connect-mongodb-session')(session);
const parser = require('body-parser');
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

const DB_PATH = "mongodb+srv://prateekdixit252006_db_user:7217797616prateek@prateek0004.qyapyi9.mongodb.net/airbnb1?appName=prateek0004";

const store = new mongoDbStore({
  uri : DB_PATH,
  collection : "sessions"
});

app.use((req,res,next) => {
  console.log(req.url,req.method);
  next();
});

app.use(parser.urlencoded());
app.use(session({
  secret : "DR_RIC",
  resave : false,
  saveUninitialized : true,
  store : store
}));
app.use((req,res,next) => {
  req.isLoggedIn =req.session.isLoggedIn;//in the session it will check wether that client is logged in or not and create its value as attribute in request object which can be now used everywhere
  console.log(req.session);
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
mongoose.connect(DB_PATH).then(() => {
  console.log("Connected to mongoose which connect us to mongodb...");
  app.listen(port,()=> {
    console.log("Server is running...");
  });
}).catch(err => {
  console.log("Unable to connect to mongoose due to error: ",err);
})