const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const cors = require("cors");
// 
const app = express();

//this will pass the info in the json format, cors = to check the id already in a server 
app.use(express.json());
app.use(cors());

//connecting to mongo database
mongoose.connect("mongodb://127.0.0.1:27017/skilltest");

// schema
const User = mongoose.model("User", {
  username: String,
  email: String,
  password: String
});

app.post("/signup", async (req, res) => {
    const {username, email, passowrd} = req.body;

    const existingUser = await User.findOne({ email });

    if(existingUser){
        return res.send("user already exist");
    }

    const hashedpassword = 
    await bcrypt.hash(passowrd, 10);
    
    await User.create({
        username,
        email,
        password : hashedpassword
    });

    res.send("signup successful");
});

app.listen(3000, () => {
    console.log("server is running on port 3000 ")
});
     
