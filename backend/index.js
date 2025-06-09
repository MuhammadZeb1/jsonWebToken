import cookieParser from "cookie-parser"
import bcrypt from "bcryptjs"
import express from "express"
import  Dotenv  from "dotenv"
import jwt from "jsonwebtoken"

const app = express()
Dotenv.config()

app.use(cookieParser())
app.use(express.json)


app.get("/", async(req,res)=>{
 
})
app.get("/read",(req,res)=>{

})

app.listen(3000,()=>{
    console.log("http://localhost:3000");
    
})