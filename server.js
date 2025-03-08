var http = require("http");  
let port = 3000;  
let hostname = "0.0.0.0";  
let server = http.createServer(function (request, response) {  

  response.write('hello');  
  response.setHeader('Content-Type', 'text/plain');  
  response.end();  

}) ;  

server.listen(port, hostname, function () {  
  console.log("http://" + hostname + ":" + port);  
});  

