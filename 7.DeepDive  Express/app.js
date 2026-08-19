const express = require('express');
const parser = require('body-parser');
const app = express();

app.get("/contact-us", (req, res, next) => {
  res.send(`<!DOCTYPE html>
            <html lang="en">
            <head>
              <title>Document</title>
            </head>
            <body>
              <form action="/contact-us" method="post">
                <input type="text" placeholder="Enter the name" name="name">
                <input type="text" placeholder="Enter the email-id" name="email">
                <button type="submit">Submit</button>
              </form>
            </body>
            </html>`);
});

app.use(parser.urlencoded());//wo saara chunk wala kaam express.js ne kar lia by parsing the whole req from client which came..

app.post("/contact-us", (req, res, next) => {
  console.log("Data from client: ",req.url,req.method,req.body);
  res.send("<p>Data is posted...</p>");
});

const port = 3000;
app.listen(port,()=> {
  console.log("Server is running...");
});