// import cookieParser from "cookie-parser"
import express from "express"
// import session from "express-session"
// import MongoStore from "connect-mongo"
import bcrypt from "bcryptjs"
import mongoose from "mongoose"

import User from "./models/userModel.js";

mongoose.connect('mongodb://127.0.0.1:27017/mu-crud', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('MongoDB connected successfully');
})
.catch((err) => {
  console.error('MongoDB connection error:', err);
});
const app = express()
app.use(express.urlencoded({extended:false}))
app.use(express.json())
// app.use(session({
//     secret:"muhammad",
//     resave:false,
//     saveUninitialized:false,
//     store:MongoStore.create({mongoUrl:"mongodb://127.0.0.1:27017/sessiondb"}),
//     cookie:{maxAge:1000*60*60*24},
// }))
// app.use(cookieParser())


app.get("/",(req,res)=>{
  const name = req.body
  console.log("kkkk",name);
  
   res.send("khan")
})
app.get("/login",(req,res)=>{
   
})
app.get("/register",(req,res)=>{
  
})

app.post("/register", async (req, res) => {
    console.log("req. body ",req.body);
    
  const { userName, password } = req.body;

  try {
    const hashPassword = await bcrypt.hash(password, 10);
    const user = new User({
      userName,
      password:hashPassword,
    }) 
    await user.save()
    res.send(user);
  } catch (err) {
    res.status(500).send("Error hashing password");
  }
});
app.post("/login",async(req,res)=>{
  const {userName,password}=req.body;
const user = await User.findOne({ userName })

  res.send(user)
})


app.listen(3000,()=>{
    console.log("http://localhost:3000");
    
})