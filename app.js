const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const cors=require("cors");

dotenv.config({path : './config.env'});
const DB = process.env.DATABASE;
const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())
const port=process.env.PORT || 8000;
mongoose.connect("mongodb+srv://rezboey:12345@cluster0.chok5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority/", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}); 

// const db =mongoose.connection;
// db.connect(function(err) {
//     if (err) {throw err;}
//     console.log("DB Connected!");
//   });
// db.on("error", console.log("DB not connected"));
// db.once("open", function(){
//     console.log("DB connected")
// });
// () => {
//     console.log("DB connected")
// })

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const User = new mongoose.model("User", userSchema)

//Routes
app.post("/login", (req, res)=> {
    const { email, password} = req.body
    User.findOne({ email: email}, (err, user) => {
        if(user){
            if(password === user.password ) {
                res.send({user})
            } else {
                res.send({ message: "Password didn't match"})
            }
        } else {
            res.send({message: "User not registered"})
        }
    })
})

app.post("/register", (req, res)=> {
    const { name, email, password} = req.body
    User.findOne({email: email}, (err, user) => {
        if(user){
            res.send({message: "User already registerd"})
        } else {
            const user = new User({
                name,
                email,
                password
            })
            user.save(err => {
                if(err) {
                    res.send(err)
                } else {
                    res.send( { message: "Successfully Registered, Please login now." })
                }
            })
        }
    })
    
})

if(process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"));
    const path = require("path")
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

app.listen(port,() => {
    console.log("BE started at port port")
})