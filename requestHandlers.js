var querystring = require("querystring");
var fs = require("fs");
var formidable = require("formidable");

function start(response){
	console.log("请求处理‘start’.");

	var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" '+
    'content="text/html; charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload" enctype="multipart/form-data" '+
    'method="post">'+
    '<input type="file" name="upload">'+
    '<input type="submit" value="Upload file" />'+
    '</form>'+
    '</body>'+
    '</html>';

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
}

function upload(response, request){
	console.log("请求处理'upload' was called.");

	var form = new formidable.IncomingForm();
	console.log("about to parse");
	form.parse(request,function(error,fields,files){
		console.log("parsing done");
		fs.renameSync(files.upload.path,"/tmp/test.png");
		response.writeHead(200,{"Content-Type":"text/html"});
		response.write("收到图片：<br/>")
		response.end();
	});
}

function show(response){
	console.log("请求处理'show' was called.");
	fs.readFile("/tmp/test.png","binary",function(error,file){
		if(error){
			console.log('error')
			response.writeHead(500,{"Content-Type":"text/plain"});
			response.write(error + "\n");
			response.end();
		} else {
			console.log('succ')
			response.writeHead(200,{"Content-Type" : "image/png"});
			response.write(file, "binary");
			response.end();
		}
	})
}

exports.start = start;
exports.upload = upload;
exports.show = show;









// var querystring = require("querystring");

// function start(response){
// 	console.log("请求处理‘start’.");

// 	var body = '<html>'+
//     '<head>'+
//     '<meta http-equiv="Content-Type" content="text/html; '+
//     'charset=UTF-8" />'+
//     '</head>'+
//     '<body>'+
//     '<form action="/upload" method="post">'+
//     '<textarea name="text" rows="20" cols="60"></textarea>'+
//     '<input type="submit" value="Submit text" />'+
//     '</form>'+
//     '</body>'+
//     '</html>';

//     response.writeHead(200, {"Content-Type": "text/html"});
//     response.write(body);
//     response.end();
// }

// function upload(response, postData){
// 	console.log("请求处理'upload' was called.");
// 	response.writeHead(200,{"Content-Type":"text/plain"});

// 	response.write("You've sent the text: "+
// 		querystring.parse(postData).text);
// 	// response.write("You've sent:"+postData);
// 	response.end();
// 	// return "hello upload"
// }

// exports.start = start;
// exports.upload = upload;








// var exec = require("child_process").exec;

// function start(response){
// 	console.log("Request handler 'start' was called.");

// 	exec("find /",
// 		{timeout:10000,maxBuffer:20000*1024},
// 		function(error,stdout,stderr){
// 			response.writeHead(200,{"Content-Type":"text/plain"});
// 			response.write(stdout);
// 			response.end();
// 		});
// }

// function upload(response){
// 	console.log("Request handler 'upload' was called.");
// 	response.writeHead(200,{"Content-Type":"text/plain"});
// 	response.write("hello upload");
// 	response.end();
// 	// return "hello upload"
// }

// exports.start = start;
// exports.upload = upload;




// var exec = require("child_process").exec;

// function start(response){
// 	console.log("Request handler 'start' was called.");

// 	exec("ls -lah",function(error,stdout,stderr){
// 		response.writeHead(200,{"Content-Type":"text/plain"});
// 		response.write(stdout);
// 		response.end();
// 	});
// 	// function sleep(sleepTime){
// 	// 	var startTime = new Date().getTime();
// 	// 	while(new Date().getTime() < startTime + sleepTime);
// 	// }

// 	// sleep(3000)
// 	// return "hello start";
// }

// function upload(response){
// 	console.log("Request handler 'upload' was called.");
// 	response.writeHead(200,{"Content-Type":"text/plain"});
// 	response.write("hello upload");
// 	response.end();
// 	// return "hello upload"
// }

// exports.start = start;
// exports.upload = upload;