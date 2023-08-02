const http = require('http');

http.createServer(function (req,res) {
res.write("On the way to becoming fullstack AF");
res.end();
}
).listen(3000);

console.log("Server runningon port 3000!")
