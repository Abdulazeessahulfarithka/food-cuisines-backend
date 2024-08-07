import express from "express";
import {recipe,recipeGet} from "../controllers/indianCuisine.js"
const router=express.Router()

router.post("/recipe",recipe)
router.get("/recipeget",recipeGet)
export default router;