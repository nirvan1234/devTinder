const express = require("express");

const app = express();

// app.use("/about", (req, res) =>{
//     res.send("I am Nirvan. I am developer.")
// })

// app.use("/",(req,res) =>{
//     res.send("Lets Node.js");
// })

app.get("/user", (req, res) =>{
    res.send({firstName:"Nirvan", lastName:"Pandagre"})
} );

app.post("/user", (req, res) =>{
    res.send("Data send successfully ")
})

app.delete("/user",(req, res) =>{
    res.send("Delete successfully")
})

app.listen(4000, () =>{
    console.log("Server is listening at 4000...")
})