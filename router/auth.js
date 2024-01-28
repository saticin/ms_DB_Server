import express from "express";
import {
  register,
  loging,
  logout,
  authenticateuser,
} from "../controller/auth.js";

const router = express.Router();

router.post("/register", register);
router.post("/loging", loging);
router.post("/logout", logout);
router.post("/authenticate", authenticateuser);
export default router;
