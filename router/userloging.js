import express from "express";
import { getUser } from "../controller/userloging.js";

const router = express.Router();

router.get("/loging", getUser);
export default router;
