const http = require('http');

const fs = require("fs")

const url = require('url')

const express  = require("express");

const app = express()

app.get('/',(req,res) => {

    return res.send("Hello from Home Page")

})

app.get('/about',(req,res) => {
    return res.send("Hello from About Page")

})





function myHandler(req,res){
    if(req.url === '/favicon.ico') return res.end()
    const log = `${new Date()}: ${req.method} ${req.url } New Req Recived\n`;
    const myUrl = url.parse(req.url, true)
    console.log(myUrl)
 
 fs.appendFile("log.txt", log , (err, data) => {
   switch(myUrl.pathname) {
    case '/' : if( req.method === "GET" ) res.end("HomePage");
    break
    case '/about' : 
    const username = myUrl.query.myname;
  
    res.end(`Hi,  ${username}`)

    break

    case '/signup':
        if(req.method === "GET") res.end("This is a signup Form");
        else if (req.method === "POST"){
            //DB QUERY
            res.end("Signup")
        }
    default:
        res.end("404  not found")

    }

    })

}

const myServer =  http.createServer(app)


myServer.listen(8000,() => console.log("Server Started!"));
