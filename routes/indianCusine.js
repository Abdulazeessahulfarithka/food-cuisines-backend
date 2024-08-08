import express from "express";
import {createRecipe,getAllRecipes} from "../controllers/indianCuisine.js"
const router=express.Router()

router.post("/receipe",createRecipe)
router.get("/allreceipe",getAllRecipes)
export default router;