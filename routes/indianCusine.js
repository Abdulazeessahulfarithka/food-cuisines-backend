import express from "express";
import {recipe} from "../controllers/indianCuisine.js"
const router=express.Router()

router.post("/recipe",recipe)
export default router;