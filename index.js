import cookieParser from "cookie-parser"
import bcrypt from "bcryptjs"
import express from "express"
import  Dotenv  from "dotenv"
import jwt from "jsonwebtoken"

const app = express()
Dotenv.config()

app.use(cookieParser())


app.get("/", async(req,res)=>{
  const token = jwt.sign({email:"jjjjj@gmail.com"},
    "secret"
  )
  res.cookie("token",token)
  res.send("done")
  
  
})
app.get("/read",(req,res)=>{
 const data = jwt.verify(req.cookies.token,"secret")
 
  res.send(data)
})

app.listen(3000,()=>{
    console.log("http://localhost:3000");
    
})