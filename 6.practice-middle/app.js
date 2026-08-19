const express = require("express");
const app = express();
const parse = require('body-parser');
const getData = require('./routes/getting');
const postData = require('./routes/posting');
const errorRoute = require('./routes/error');


app.use(parse.urlencoded());
app.use(postData);
app.use(getData);
app.use(errorRoute);

const port = 3000;
app.listen(port, () => {
  console.log("Server is running...");
});
