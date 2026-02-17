import React, { useState } from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import TopicForm from "../components/TopicForm";
import { CgSpinnerTwo } from "react-icons/cg";

const Notes = () => {
  const {userData} = useSelector((state)=> state.user);
  const credits = userData.credits;
  const navigate = useNavigate();
  const [result,setResult] = useState(null);
  const [loading,setLoading] = useState(false);
  const [error,setError] = useState("");
  return (
    <>
    <motion.header
      initial={{
        opacity: 0,
        y: -15,
      }}
      animate={{
        opacity: 1,
        y: 10,
        x: 0,
      }}
      transition={{
        duration: 1,
        delay: 0.2,
      }}
      className="flex justify-between shadow-2xl shadow-black mx-2 mt-2 rounded-2xl bg-black/80 backdrop-blur-xl border border-white/10 px-4 py-4 "
    >
      <div
        className="flex flex-col cursor-pointer"
        onClick={() => navigate("/")}
      >
        <div className="flex gap-2">
          <img src="logo.png" alt="logo" className="w-10 h-8" />
          <h1 className="text-xl flex gap-2font-bold bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
            <span>ENG</span> <div className="w-3 h-3 mx-2 rounded-full animate-ping bg-white"></div>
          </h1>
        </div>
        <p className="text-xs text-gray-300  mt-1">Exam Notes Generator</p>
      </div>
      <div className="flex items-center gap-2">
        <button onClick={() => navigate("/pricing")} className="flex items-center gap-2 px-2 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm">
          <span className="text-xl">💎</span>
          <span className="text-[16px]">{credits}</span>
          <motion.span
            className="ml-2 h-5 w-5 flex items-center justify-center rounded-full bg-white text-xs text-black font-bold"
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 1 }}
          >
            ➕
          </motion.span>
        </button>
        <button onClick={() => navigate("/history")} className="px-4 py-3 rounded-full text-sm font-medium bg-white/10 border border-white/20 text-white hover:bg-white/20 transition flex items-center gap-2">
           📚 Notes
        </button>
      </div>
    </motion.header>
    <motion.div
    initial={{opacity:0,y:20}}
    animate={{opacity: 1, y: 0}}
    className="my-12 flex justify-around"
    > 
      <TopicForm loading={loading} setResult={setResult} setLoading={setLoading} setError={setError}/>
      <div className="hidden md:block "><img src="boy.png" className="h-100 w-70" /></div>
    </motion.div>
    {result && <motion.div className="h-64 rounded-2xl flex flex-col items-center justify-center bg-white/60 backdrop-blur-lg border border-dashed border-gray-300 text-gray-500 shadow-inner">
      <span className="text-4xl mb-3">📘</span>
      <p className="text-sm">Generated notes will appear here</p>
    </motion.div> }
    </>
  );
};

export default Notes;
