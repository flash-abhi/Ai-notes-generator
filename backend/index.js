import express from "express";
import dotenv from "dotenv";
dotenv.config();
import { connectDB } from "./utils/db.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import { authRouter } from "./routes/auth.route.js";
import { userRouter } from "./routes/user.routes.js";
const app = express();
const port = process.env.PORT || 8000;
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended: true}));
app.use(cors({
    origin : "http://localhost:5173",
    methods: ["GET","POST","PUT","DELETE","OPTIONS"],
    credentials: true,
}

));
app.get("/",(req,res)=> {
    return res.status(200).json({message: "Examnotes Ai backend is Running"})
});
app.use("/api/auth",authRouter);
app.use("/api/user",userRouter);
app.listen(port , ()=> {
    connectDB();
    console.log("SERVER IS RUNNING ON PORT ",port);
});