const express = require('express');
const parser = require('body-parser');
const app = express();
const userRouter = require('./routes/userRouter');
const {hostRouter} = require('./routes/hostRouter');
const path = require('path');
const rootDir = require('./utils/pathUtil');
const errorControl = require('./controllers/error');

app.set('view engine','ejs');
app.set('views','views');

app.use(express.static(path.join(rootDir,'public')));

app.use((req,res,next) => {
  console.log(req.url,req.method);
  next();
});

app.use(parser.urlencoded());
app.use(userRouter);
app.use(hostRouter);

app.use(errorControl.get404);

const port = 3000;
app.listen(port,()=> {
  console.log("Server is running...");
});