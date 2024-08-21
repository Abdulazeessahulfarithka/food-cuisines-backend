import express from "express";
import {createRecipe,getAllRecipes} from "../controllers/dinnerRecipe.js"
const router=express.Router()

router.post("/recipe",createRecipe)
router.get("/recipes",getAllRecipes)
export default router;