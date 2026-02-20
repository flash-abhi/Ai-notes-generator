import express from "express";
import dotenv from "dotenv";
dotenv.config();
import { connectDB } from "./utils/db.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import { authRouter } from "./routes/auth.route.js";
import { userRouter } from "./routes/user.routes.js";
import { notesRouter } from "./routes/generate.route.js";
import { pdfRouter } from "./routes/pdf.route.js";
import { creditRouter } from "./routes/credits.routes.js";
import { stripeWebhook } from "./controllers/credits.controller.js";
const app = express();
const port = process.env.PORT || 8000;
app.post("/api/credits/webhook",express.raw({type: "application/json"}),stripeWebhook)
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended: true}));
app.use(cors({
    origin : process.env.CLIENT_URL,
    methods: ["GET","POST","PUT","DELETE","OPTIONS"],
    credentials: true,
}

));
app.get("/",(req,res)=> {
    return res.status(200).json({message: "Examnotes Ai backend is Running"})
});
app.use("/api/auth",authRouter);
app.use("/api/user",userRouter);
app.use("/api/notes",notesRouter);
app.use("/api/pdf",pdfRouter);
app.use("/api/credit",creditRouter)
app.listen(port , ()=> {
    connectDB();
    console.log("SERVER IS RUNNING ON PORT ",port);
});