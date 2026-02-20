import { useNavigate } from "react-router-dom";
import Feature from "../components/Feature";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { motion } from "motion/react";
import { useSelector } from "react-redux";
const Home = () => {
  const {userData} = useSelector((state) => state.user);
  const credits = userData?.credits;
  const navigate = useNavigate();
  console.log(userData);
  return (
    <div className="relative min-h-screen overflow-hidden bg-white text-black">
      {userData && <Navbar credits={credits} userData={userData}/>}
      {/* top */}
      <section className="max-w-7xl mx-auto px-8 pt-24 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            whileHover={{ rotateX: 6, rotateY: -6 }}
            className="transform-gpu"
            style={{ transformStyle: "preserve-3d" }}
          >
            <motion.h1
              whileHover={{ y: -4 }}
              transform="translateZ(20px)"
              textShadow="0 18px 40px rgba(0,0,0,0.25)"
              className="text-5xl lg:text-6xl font-extrabold leading-tight bg-gradient-to-br from-black/90 via-black/60 to-black/90 bg-clip-text text-transparent"
            >
              Create Smart <br /> AI Notes in Seconds.
            </motion.h1>
            <motion.p
              whileTap={{ rotateX: 0, rotateY: -30 }}
              className="mt-6 max-w-xl text-lg bg-gradient-to-br from-gray-700 via-gray-500/80 to-gray-700 bg-clip-text text-transparent"
            >
              Create structured, easy-to-review, and concept-driven notes in
              seconds using powerful AI assistance built for smarter learning.
              Turn ideas into polished, well-formatted notes instantly — powered
              by fast, intuitive AI.
            </motion.p>
          </motion.div>
          <motion.button
              onClick={() => navigate("/notes",{replace: true})}
              whileHover={{
                scale: 1.02,
              }}
              whileTap={{
                scale: 1,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="mt-4 cursor-pointer  px-10 py-3 rounded-xl flex items-center gap-3 bg-gradient-to-br from-green-500/60 via-black/80 to-black/60 border border-white/10 text-white font-semibold text-lg shadow-2xl"
            >
             Get Started
            </motion.button>
        </div>
        {/* right image part */}
        <motion.div
        initial={{opacity:0, x:60}}
        animate={{opacity:1, x:0}}
        transition={{duration:0.7}}
        whileHover={{y: -12 , rotateX: 8, rotateY: -8,scale:1.05}}
        className="transform-gpu"
        style={{ transformStyle: "preserve-3d" }}
        >
          <div className="overflow-hidden">
            <img src="image.png" alt="image1" style={{transform: "translateZ(35px)"}} className="animate-pulse"/>
          </div>
        </motion.div>
      </section>
      {/* bottom */}
      <section className="max-w-7xl mx-auto px-8 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        <Feature icon="📘" title="Exam Notes" des="Create structured, easy-to-review exam notes with AI-powered assistance." />
        <Feature icon="📂" title="Project Notes" des="Create structured, easy-to-review project notes with AI-powered assistance." />
        <Feature icon="📊" title="Charts & Graphs" des="Visualize data with AI-generated charts and graphs for better understanding and presentations." />
        <Feature icon="⬇️" title="Download PDFs" des="Download your notes in clean, well-formatted PDFs for easy offline access and printing." />
      </section>
      <Footer/>
    </div>
  );
};

export default Home;
