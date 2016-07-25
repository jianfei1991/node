var http = require("http");
var url = require("url");

function start(route,handle){
	function OnRequest(request,response){
		var pathname = url.parse(request.url).pathname;
		console.log("收到"+pathname+"的请求");
		route(handle, pathname, response, request);
	}
	http.createServer(OnRequest).listen(8088);
	console.log("服务器已经启动");
}
exports.start = start;



// var http = require("http");
// var url = require("url");

// function start(route,handle){
// 	function OnRequest(request,response){
// 		var pathname = url.parse(request.url).pathname;
// 		console.log("收到"+pathname+"的请求");
// 		route(handle, pathname, response);

// 		// response.writeHead(200,{"Content-Type":"text/plain"});
// 		// response.write(message)
// 		// response.end();
// 	}
// 	http.createServer(OnRequest).listen(8088);
// 	console.log("server has started");
// }
// exports.start = start;