
import http from 'http';


let i = 10;

http.createServer((request, response) => {
	response.setHeader('Content-Type', 'text/html');
	response.statusCode = 200;
	
	if(i<0 ){
		response.write("Amount of requests is exceeded")
	} else{
		response.write(String(i--));
	}
	response.end();
}).listen(3000);




