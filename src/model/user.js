const mongoose = require("mongoose");

const userScehma = new mongoose.Schema({
    firtName:{
        type: String
    },
    lastName:{
        type: String
    },
    age:{
        type: String
    }
})


const UserModel = mongoose.model("Users", userScehma);

module.exports = UserModel;