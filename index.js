import express from "express";

import authRouter from "./router/auth.js";
import authChat from "./router/chat.js";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

dotenv.config({ path: "./config.env" });

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use("/api/users", authRouter);
app.use("/api/chat", authChat);

app.get("/", (req, res) => {
  res.send("server started ....");
});
const PORT = process.env.SERVER_PORT || 3002;
app.listen(PORT, () => {
  console.log(`API working on ${PORT} ....`);
});
