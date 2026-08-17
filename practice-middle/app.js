const express = require("express");
const app = express();

app.use("/", (req, res, next) => {
  console.log("First middleware...");
  next();
});

app.use("/", (req, res, next) => {
  console.log("second middleware...");
  next();
});

app.post("/contact-us", (req, res, next) => {
  res.send("<p>Data is posted...</p>");
});

app.use("/contact-us", (req, res, next) => {
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

app.use("/", (req, res, next) => {
  res.send("<P>Response from third middleware...</P>");
});

const port = 3000;
app.listen(port, () => {
  console.log("Server is running...");
});
