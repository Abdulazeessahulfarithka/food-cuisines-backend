import express from "express";
import * as dotenv from "dotenv";
import db from "./conFig/db.js"
import indianCuisine from "./routes/indianCusine.js";

dotenv.config()
const app=express();
//database connection
db()

//PORT
const PORT=process.env.PORT

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/",(req,res)=>{
    res.send("hello world")
})

app.use("/api/cateogry",indianCuisine)
app.listen(PORT,()=> console.log(`server is connected ${PORT}`))