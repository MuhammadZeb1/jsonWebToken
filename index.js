import cookieParser from "cookie-parser"
import bcrypt from "bcryptjs"
import express from "express"
import  Dotenv  from "dotenv"

const app = express()
Dotenv.config()

app.use(cookieParser())


app.get("/", async(req,res)=>{
  // const hashPassword = await bcrypt.hash("name",10)
  const match = await bcrypt.compare("name",process.env.myP)
  console.log(match);
  res.send(`Password match: ${match}`);
})
app.get("/read",(req,res)=>{
  console.log(req.cookies);
  
  
  res.send("hello cookie ")
})
app.get("/des",(req,res)=>{
  res.clearCookie("name")

  res.send("dex")
})


app.listen(3000,()=>{
    console.log("http://localhost:3000");
    
})