import mongoose  from "mongoose";
const userSchema = new mongoose.Schema({
    name:{    type:String,  required : true},
    id:{ type:Number,  required : true},
    email:{ type:String,  required : true},
    userName:{ type:String,  required : true}

})
export default mongoose.model("User",userSchema)