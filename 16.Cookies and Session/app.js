const express = require('express');
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

app.use((req,res,next) => {
  console.log(req.url,req.method);
  next();
});

app.use(parser.urlencoded());
app.use(authRouter);
app.use(userRouter);
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