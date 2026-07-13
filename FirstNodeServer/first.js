const http = require('http');
const fs = require('fs');

function requestListner(req,response) {
  console.log(`url : ${req.url},method : ${req.method},headers :${req.headers}`);
  // process.exit();
  if(req.url == '/') {
    response.setHeader('Content-type','text/html');
    response.write('<html>');
    response.write('<head><title>Complete Coding</title></head>');
    response.write('<body>');
    response.write('<h1>Welcome to Complete Coding</h1>');
    response.write('<h1>Enter your details</h1>');
    response.write('<form action="/submit-form" method ="POST">');
    response.write('<input type="text" placeholder="Enter your name" name ="username"> <br>');
    response.write('<label for ="gender">Gender</label> <br>');
    response.write('<label for ="male">Male</label>');
    response.write('<input type="radio" name ="gender" value="male" id="male"/>');
    response.write('<label for ="female">Female</label>');
    response.write('<input type="radio" name ="gender" value="female" id="female"/>');
    
    response.write('<br><input type="submit" value="Submit"/>');
    response.write('</form>');
  } else if(req.url.toLowerCase() == '/products') {
    response.setHeader('Content-type','text/html');
    response.write('<html>');
    response.write('<head><title>Complete Coding</title></head>');
    response.write('<body>');
    response.write('<h1>Products...</h1>');
  } else if(req.url.toLowerCase() == '/submit-form' && req.method =='POST') {
    fs.writeFileSync('user.txt','Prateek Dixit');
    response.statusCode = 302;
    response.setHeader('Location','/');
  }
  response.write('<h1>LIKE / SHARE / SUBSCRIBE</h1>');
  response.write('</body>');
  response.write('</html>');
  response.end();
}

const server = http.createServer(requestListner);
const port = 3000;
server.listen(port,()=> {
  console.log(`server running on address: https://localhost:${port}`);
});