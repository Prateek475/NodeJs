const http = require('http');
const requestListner = require('./first');//this is importing that function

const server = http.createServer(requestListner);
const port = 3000;
server.listen(port,()=> {
  console.log(`server running on address: https://localhost:${port}`);
});