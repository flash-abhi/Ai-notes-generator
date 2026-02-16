import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./utils/db.js";
dotenv.config();
const app = express();
const port = process.env.PORT || 8000;
app.get("/",(req,res)=> {
    return res.status(200).json({message: "Examnotes Ai backend is Running"})
});
app.listen(port , ()=> {
    connectDB();
    console.log("SERVER IS RUNNING ON PORT ",port);
});