const http = require('http');

function requestListner(req,res) {
  if(req.url == '/') {
    res.setHeader('Content-type','text/html');
    res.write('<html>');
    res.write('<head><title>Complete Coding</title></head>');
    res.write('<body>');
    res.write('<a href = "/">Home</a>');
    res.write('<a href = "/men">Men</a>');
    res.write('<a href = "/women">Women</a>');
    res.write('<a href = "/kids">Kids</a>');
    res.write('<a href = "/cart">Cart</a>');
    res.write('</body>');
    res.write('</html>');
  } else if(req.url=='/men') {
    res.setHeader('Content-type','text/html');
    res.write('<html>');
    res.write('<head><title>Complete Coding</title></head>');
    res.write('<body>');
    res.write('<h1>Welcome to men sections</h1>');
    res.write('</body>');
    res.write('</html>');
  } else if(req.url=='/women') {
    res.setHeader('Content-type','text/html');
    res.write('<html>');
    res.write('<head><title>Complete Coding</title></head>');
    res.write('<body>');
    res.write('<h1>Welcome to women sections</h1>');
    res.write('</body>');
    res.write('</html>');
  } else if(req.url=='/kids') {
    res.setHeader('Content-type','text/html');
    res.write('<html>');
    res.write('<head><title>Complete Coding</title></head>');
    res.write('<body>');
    res.write('<h1>Welcome to kids sections</h1>');
    res.write('</body>');
    res.write('</html>');
  } else if(req.url=='/cart') {
    res.setHeader('Content-type','text/html');
    res.write('<html>');
    res.write('<head><title>Complete Coding</title></head>');
    res.write('<body>');
    res.write('<h1>Welcome to cart sections</h1>');
    res.write('</body>');
    res.write('</html>');
  }
  res.end();
}

const server= http.createServer(requestListner);
const port = 3000;
server.listen(port,() => {
  console.log("Our server at 3000 port has been started...");
});