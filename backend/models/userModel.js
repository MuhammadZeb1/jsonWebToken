import mongoose from "mongoose";

const userSchema =new mongoose.Schema({
    userName:{
        type:String
    },
     password:{
        type:String
    }
})

const user = mongoose.model("user",userSchema)
export default user