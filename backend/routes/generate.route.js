import express from "express";
import { isAuth } from '../middlewares/isAuth.js';
import { generateNotes } from "../controllers/generate.controller.js";

export const notesRouter = express.Router();

notesRouter.post("/generate-notes",isAuth,generateNotes);
