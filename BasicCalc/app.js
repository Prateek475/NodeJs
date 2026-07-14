const http = require('http');
const requestListner = require('./calc');

const server = http.createServer(requestListner);

const port = 3000;
server.listen(port,()=> {
  console.log("Server started running...");
})