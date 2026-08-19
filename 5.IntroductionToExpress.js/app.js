const express = require('express');
const app = express();//this app function which we just make is also taking request response so we can just treat it as request handler....

app.use('/',(req,res,next) => {
  console.log("We are in first middleware");
  next();
});

app.use('/sec',(req,res,next) => {
  console.log("We are in second middleware");
  res.send('<p>Welcome to website</p>');
});

const port = 3000;
app.listen(port,() => {
  console.log('Server is running...');
})