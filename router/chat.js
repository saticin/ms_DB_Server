import express from "express";
import { messageSave } from "../controller/chat.js";

const router = express.Router();
router.post("/messagesave", messageSave);
export default router;
