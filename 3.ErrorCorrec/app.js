const http = require('http');
const logic = require('./log');

const server = http.createServer((req,res) => {
  logic();
});

server.listen(3000,()=> {
  console.log('Server is running...');
})