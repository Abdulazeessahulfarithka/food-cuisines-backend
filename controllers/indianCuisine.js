import indianCuisine from "../model/indianCuisine.js";

export const receipe =async (req,res)=>{
try{
const {name,image}=req.body;
if(!name){
    return res.status(400).send({ message: "name is requird" });
}
if(!image){
    return res.status(400).send({ message: "image is requird" });
}
// if(!directions){
//     return res.status(400).send({ message: "directions is requird" });
// }
// if(!chefNote){
//     return res.status(400).send({ message: "chefNote is requird" });
// }
 const receipe= await new indianCuisine({name,image}).save()
 return res.status(500).send({
    success: true,
    message: "Name created successfully",
    receipe,
  });

}catch(error){
    console.log("error")
}
}
export const allReceipe=async(req,res)=>{
try{
    const recipe=await indianCuisine.find({})
    res.status(200).send({
        success: true,
        message: "All Categories List",
        recipe,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        error,
        message: "Error while getting all categories",
      });
    }
  };