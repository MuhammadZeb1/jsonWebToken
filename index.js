import cookieParser from "cookie-parser"
import express from "express"

const app = express()
app.use(cookieParser())

app.get("/",(req,res)=>{
    res.cookie("name","muhammad")
    res.cookie("ali","lhan")
    res.send("hello")
})

app.get("/ali",(req,res)=>{
   console.log(req.cookies)
    res.send("hello.hellio")
})

app.listen(3000,()=>{
    console.log("http://localhost:3000");
    
})