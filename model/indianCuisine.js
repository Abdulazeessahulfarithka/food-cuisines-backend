import mongoose from "mongoose";

const indianSchema=new mongoose.Schema({
  
    name:{
        type:String,
        required:true,
    },
    ingredients:{
        type:String,
        required:true,
    },
    directions:{
        type:String,
        required:true,
    },
    chefNote:{
        type:String,
        required:true,
    },
})
export default mongoose.model("indian",indianSchema)