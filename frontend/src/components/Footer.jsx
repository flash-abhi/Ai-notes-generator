import React from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="z-10 mx-6 mb-6 mt-2 rounded-2xl bg-gradient-to-br from-black/90 via-black/75 to-black/90 backdrop-blur-2xl border border-white/10 px-8 py-8 shadow-[0_25px_60px_rgba(0,0,0,0.7)]"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        <motion.div
          whileHover={{ scale: 1.001 }}
          className="flex flex-col gap-4 transform-gpu"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div
            className="flex items-center gap-3 cursor-pointer"
            style={{ transform: "translateZ(20px)" }}
          >
            <img
              src="logo.png"
              alt="Logo"
              className="w-12 h-12 object-contain"
            />
            <span
              className="text-lg font-semibold bg-gradient-to-br from-white via-gray-300 to-white bg-clip-text text-transparent"
              style={{ textShadow: "0 6px 18px rgba(0,0,0,0.4)" }}
            >
              Exam Notes <span className="text-gray-100">AI</span>
            </span>
          </div>
          <p className="text-sm text-gray-300 max-w-sm">
            ExamNotes AI helps students generate exam-focused notes, revision
            material, diagrams, and printable PDFs using AI.
          </p>
        </motion.div>
        <div className="text-center">
          <h1 className="text-lg font-semibold text-white mb-4">Quick Links</h1>
          <ul className="text-center">
            <li className="text-gray-300 hover:text-white transition-colors">
              <span
                onClick={() => navigate("/notes")}
                className="cursor-pointer"
              >
                Notes
              </span>
            </li>
            <li className="text-gray-300 hover:text-white transition-colors">
              <span
                onClick={() => navigate("/history")}
                className="cursor-pointer"
              >
                History
              </span>
            </li>
            <li className="text-gray-300 hover:text-white transition-colors">
              <span
                onClick={() => navigate("/pricing")}
                className="cursor-pointer"
              >
                Add Credits
              </span>
            </li>
          </ul>
        </div>
        <div className="text-center">
          <h1 className="text-lg font-semibold text-white mb-4">
            Policy & Support
          </h1>
          <ul className="text-center">
            <li className="text-gray-300 hover:text-white transition-colors cursor-pointer">
              Privacy Policy
            </li>
            <li className="text-gray-300 hover:text-white transition-colors cursor-pointer">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=ac7336591@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                eng.support@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="h-px bg-gray-500 my-4 " />
      <p className="text-center text-gray-200 text-sm mt-4">
        © <span className="text-purple-300">{new Date().getFullYear()}</span> Exam Notes AI. All
        rights reserved. Made with ❤️ by Abhishek Chauhan
      </p>
    </motion.footer>
  );
};

export default Footer;
