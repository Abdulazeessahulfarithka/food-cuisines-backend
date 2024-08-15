import mongoose from "mongoose";

const ramdanIftar =new mongoose.Schema({
    
         name:{
            type:String,
            required:true
          },
          photo:{
             type:String,
             required:true,
          },

})
export default mongoose.model("ramdan",ramdanIftar)