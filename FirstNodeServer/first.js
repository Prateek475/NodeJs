const http = require('http');

function requestListner(req,response) {
  console.log(`uel : ${req.url},method : ${req.method},headers :${req.headers}`);
  // process.exit();
  response.setHeader('Content-type','text/html');
  response.write('<html>');
  response.write('<head><title>Complete Coding</title></head>');
  if(req.url == '/') {
    response.write('<h1>Welcome to Complete Coding</h1>');
  } else if(req.url.toLowerCase() == '/products') {
    response.write('<h1>Products...</h1>');
  }
  response.write('<body><h1>LIKE / SHARE / SUBSCRIBE</h1></body>');
  response.write('</html>');
  response.end();
}

const server = http.createServer(requestListner);
const port = 3000;
server.listen(port,()=> {
  console.log(`server running on address: https://localhost:${port}`);
});