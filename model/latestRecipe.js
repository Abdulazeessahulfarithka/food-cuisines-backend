import mongoose from "mongoose";

const latestReceipe =new mongoose.Schema({
    
         name:{
            type:String,
            required:true
          },
          photo:{
             type:String,
             required:true,
          },
          description:{
            type:String,
            required:true,
          },
         ingrediants:{
          type:String,
          required:true
         },
         instructions:{
           type:String,Number,
           required:true,
         },
         photo1:{
            type:String,
            required:true,
         },
          benefits:{
            type:String,
            required:true,
          },

})
export default mongoose.model("latest",latestReceipe)