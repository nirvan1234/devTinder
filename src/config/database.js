const mongoose = require("mongoose");

const uri = "mongodb+srv://nirvan:nirvanadev@podify.7khfe.mongodb.net/"



const connectDB = async() =>{
    await mongoose.connect("mongodb+srv://nirvan:nirvanadev@podify.7khfe.mongodb.net/")
}

module.exports = connectDB;

// connectDB().then( () =>{
//     console.log("Database connection established");
// }).catch(() =>{
//     console.log("Database connection cannnot be established");
// })