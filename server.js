const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/skilltest")
.then(() => {
    console.log("MongoDB Connected");
})
.catch((err) => {
    console.log(err);
});

const User = mongoose.model("User", {
    username: String,
    email: String,
    password: String
});

//signup page
app.post("/signup", async (req, res) => {

    try {

        console.log(req.body);

        const username = req.body.username;
        const email = req.body.email;
        const password = req.body.password;

        if(!password){
            return res.send("Password missing");
        }

        const existingUser =
            await User.findOne({ email });

        if(existingUser){
            return res.send("User already exists");
        }

        const hashedPassword =
            await bcrypt.hash(password, 10);

        await User.create({
            username,
            email,
            password: hashedPassword
        });

        res.send("Signup successful");

    } catch(err){

        console.log(err);

        res.status(500).send(err.message);
    }
});

//login page
app.post("/login", async (req, res) => {

    const { username, password } = req.body;

    // check user
    const user = await User.findOne({ username });

    if(!user){
        return res.send("User not found");
    }

    // compare password
    const isMatch = await bcrypt.compare(password, user.password);

    if(!isMatch){
        return res.send("Wrong password");
    }

    // success
    res.send("Login successful");

});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});