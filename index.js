import cookieParser from "cookie-parser"
import express from "express"
import session from "express-session"
import MongoStore from "connect-mongo"



const app = express()
app.use(session({
    secret:"muhammad",
    resave:false,
    saveUninitialized:false,
    store:MongoStore.create({mongoUrl:"mongodb://127.0.0.1:27017/sessiondb"}),
    cookie:{maxAge:1000*60*60*24},
}))
app.use(cookieParser())

app.get("/set-username",(req,res)=>{
    req.session.username="muhammad zeb"
    res.send("set the username in session ")
})
app.get("/get-username",(req,res)=>{
    if (req.session.username) {
        res.send(`get the username in session :${req.session.username}`)
    }else{
        res.send("no username available in session ")
    }
})
app.get("/destroy",(req,res)=>{
   req.session.destroy((err)=>{
    if (err) {
        res.status(500).send("error in destroy")
    }else{
        res.send("sucessfully destroy")
    }
   })
})

app.get("/ali",(req,res)=>{
  
})

app.listen(3000,()=>{
    console.log("http://localhost:3000");
    
})