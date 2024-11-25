const express = require("express");

const app = express();

app.use("/",(req,res) =>{
    res.send("Lets Node.js");
})

app.use("/about", (req, res) =>{
    res.send("I am Nirvan. I am developer.")
})

app.listen(4000, () =>{
    console.log("Server is listening at 4000...")
})