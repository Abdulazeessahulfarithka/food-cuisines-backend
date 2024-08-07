import express from "express";
import {receipe,allReceipe} from "../controllers/indianCuisine.js"
const router=express.Router()

router.post("/receipe",receipe)
router.get("/allreceipe",allReceipe)
export default router;