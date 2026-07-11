const express = require("express")

const users = require("./MOCK_DATA.json")
const app  = express()

const Port = 8000;

// Routes

app.get("/api/users", (req , res) => {
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
    return res.json({message : "User Created"})
})


app.listen(Port , () => console.log(` Server started at PORT : ${Port} `))
