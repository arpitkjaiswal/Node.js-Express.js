const express = require("express")

const users = require("./MOCK_DATA.json")
const app  = express()

const Port = 8000;

// Routes

app.get("/api/users", (req , res) => {
    return res.json(users);
});

app.get("/users", (req,res) => {
    return res.json(users);
})



app.listen(Port , () => console.log(` Server started at PORT : ${Port} `))
