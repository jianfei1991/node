var server = require("./server.js");
var router = require("./router.js");
var requestHandlers = require("./requestHandlers");

var handle = {}
handle["/"] = requestHandlers.start;
handle['/start'] = requestHandlers.start;
handle['/upload'] = requestHandlers.upload;
handle['/show'] = requestHandlers.show;

server.start(router.route,handle);



// var http = require("http");

// http.createServer(function(request,response){
// 	response.writeHead(200,{"Content-Type":"text/plain"});
// 	response.write("Hello World");
// 	response.end();
// 	console.log(123)
// }).listen(8088)


// var http = require("http")

// function onRequest(request,response){
// 	console.log("Request received.");
// 	response.writeHead(200,{"Content_Type":"text/plain"});
// 	response.write("Hello World");
// 	response.end();
// }

// http.createServer(onRequest).listen(8088);
// console.log("Server has started");
