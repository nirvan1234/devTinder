const express = require("express");

const app = express();

// we can handle Auth Middleware for GET, POST , DELETE , PUT , PATCH we want all the methods should be Authorized
app.use("/admin",(req, res , next) =>{
    const token = "xyz";
    const isAuthorized = token === "xyz";
    if(!isAuthorized){
        res.status(401).send("unauthorized");
    }else{
       next();
    }
    
})

// app.use("/about", (req, res) =>{
//     res.send("I am Nirvan. I am developer.")
// })

//order matters in nodeJS uncomment below code to see it will no go further as it get request it return it not go further
// app.use("/",(req,res) =>{
//     res.send("Lets Node.js");
// })

//Throws Error if we send response from both as once TCI/IP connection is closed then it won't be posssible to send reponse again
app.get("/user",
//Basically this is middleware where we want to do something before request is send
 (req, res , next) =>{
    console.log("handling the route user 1!");
    // res.send({firstName:"Nirvan", lastName:"Pandagre"});
    next();
} ,
(req, res) =>{
    console.log("handling the route user 2!");
    res.send({firstName:"shilpa", lastName:"Khupse"});
});


app.get("/admin/getAllData",(req, res) =>{
    //logic of checking if req is out
    // const token = "xyz";
    // const isAuthorized = token === "xyz";
    // if(isAuthorized){
       res.send("All Data Sent");
    // }else{
    //    res.status(401).send("unauthorized");
    // }
})


//we can send any no from url and it will get recieved here as req.params http://localhost:4000/user/786
// app.get("/user/:userId", (req, res) =>{
//     console.log(req.params);
//     res.send({firstName:"Nirvan", lastName:"Pandagre"})
// } );

//we can also send from url any query for ex : http://localhost:4000/user?userId=922 you can get it as query
// app.get("/user/", (req, res) =>{
//     console.log(req.query);
//     res.send({firstName:"Nirvan", lastName:"Pandagre"})
// } );

// this will allow http://localhost:4000/user/ac and http://localhost:4000/user/abc to work b? optional now
// app.get("/user/ab?c", (req, res) =>{
//     res.send({firstName:"krishna", lastName:"Das"})
// } );

// we can subsitute as much y as we want to http://localhost:4000/user/xyyyyyyyyyyyyz 
// app.get("/user/xy+z", (req, res) =>{
//     res.send({firstName:"Gopala", lastName:"Das"})
// } );

//we can subsitute anything in place of * http://localhost:4000/user/pqxyzr
// app.get("/user/pq*r", (req, res) =>{
//     res.send({firstName:"khanaiya", lastName:"Das"})
// } );

//moreover we can add regex also
// app.get("/*fly$/", (req, res) =>{
//     res.send({firstName:"khanaiya", lastName:"Das"})
// } );

app.post("/user", (req, res) =>{
    res.send("Data send successfully ")

})

app.delete("/user",(req, res) =>{
    res.send("Delete successfully")
})

//this will allow all the req to run above it
// app.use("/",(req,res) =>{
//     res.send("Lets Node.js");
// })

//Error handling should always be done at the last if Try and Catch break this at end will handle error
app.use("/", (err,req,res,next) =>{
    if(err){
        res.status(500).send("Something went Wrong")
    }
})

app.listen(4000, () =>{
    console.log("Server is listening at 4000...")
})