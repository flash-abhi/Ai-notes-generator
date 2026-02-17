import express from "express";
import { googleAuth, Logout } from "../controllers/auth.controller.js";

export const authRouter = express.Router();

authRouter.post("/google",googleAuth);
authRouter.get("/logout",Logout);

