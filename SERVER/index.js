const http = require('http');

const fs = require("fs")

const myServer =  http.createServer( (req,res) => {
 const log = `${new Date()}:  ${req.url } New Req Recived\n`;
 fs.appendFile("log.txt", log, (err, data) => {
   switch(req.url){
    case '/' : res.end("HomePage");
    break
    case '/about' : res.end("I am Arpit Jaiswal")
    break
    default:
        res.end("404  not found")

   }

 })
   
  
});


myServer.listen(8000,() => console.log("Server Started!"));
