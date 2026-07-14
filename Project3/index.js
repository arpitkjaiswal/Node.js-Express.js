const express = require("express")
const fs = require("fs")
const mangoose = require("mongoose")
const users = require("./MOCK_DATA.json")
const app  = express()

const Port = 8000;

// Middleware - it is a function which will run before the route handler

app.use(express.urlencoded({extended : false}))

app.use((req, res, next) => {
    fs.appendFile("./logs.txt", `${new Date().toISOString()} : ${req.ip} - ${req.method} ${req.path}\n`, 
    (err) => {
        if (err) {
            console.error("Error writing to log file:", err);
        }
        next();
    });
});

app.use((req, res, next) => {
    if (req.method === 'POST' && !req.body.first_name ) {
        return res.status(400).json({ error: "All fields are required" });
    }   
   // console.log("Request body:", req.myProperty);
    next();
});

// Routes

app.get("/api/users", (req , res) => {
   
    res.setHeader("X-MyName", "Luffy"); // Custom header
    // Always add X to custom headers to avoid conflicts with standard headers
    return res.json(users);
});

app.get("/users", (req,res) => {
   const html = `
   <ul>
      ${users.map((user) =>`<li>${user.first_name}</li>` ).join("")}
   </ul>
   `
   return res.send(html);
}) 

app.route("/api/users/:id")
.get((req, res) => {
const id = Number(req.params.id);
const user  = users.find((user) => user.id === id);
if(!user) {
    return res.status(404).json({message : "User not found"})
}

return res.json(user)

})
.patch((req,res) => {

   // it will update the user with the given id

    return res.json(user)
})
.delete((req,res) => {

    // it will delete the user with the given id

    return res.json(user)
})

app.post("/api/users", (req,res) => {
     
    const body = req.body;
    users.push({...body , id : users.length + 1});
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users),(err, data) => {
        if(err) throw err;
          return res.status(201).json({message : "User Created" , id : users.length})
    })
  
})


app.listen(Port , () => console.log(` Server started at PORT : ${Port} `))
