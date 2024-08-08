import express from "express";
import { createRecipe, getRecipe } from "../controllers/latestRecipe.js";

const router = express.Router();

router.post("/recipe", createRecipe);
router.get("/recipes", getRecipe);

export default router;
