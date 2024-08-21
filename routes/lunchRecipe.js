import express from "express";
import {createRecipe,getAllRecipes} from "../controllers/lunchRecipe.js"
const router=express.Router()

router.post("/recipe",createRecipe)
router.get("/allrecipes",getAllRecipes)
export default router;