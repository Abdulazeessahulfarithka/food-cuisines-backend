import indianCuisine from "../model/indianCuisine.js";

export const recipe =async (req,res)=>{
try{
const {name,ingredients,directions,chefNote}=req.body;
if(!name){
    return res.status(400).send({ message: "name is requird" });
}
if(!ingredients){
    return res.status(400).send({ message: "ingredients is requird" });
}
if(!directions){
    return res.status(400).send({ message: "directions is requird" });
}
if(!chefNote){
    return res.status(400).send({ message: "chefNote is requird" });
}
 const recipe= await new indianCuisine({name,ingredients,directions,chefNote}).save()
 return res.status(500).send({
    success: true,
    message: "Name created successfully",
    recipe,
  });

}catch(error){
    console.log("error")
}
}