import { motion } from "motion/react";
function Feature({ icon, title, des }) {
  return (
    <motion.div
      whileHover={{
        scale: 1.02,
      }}
      whileTap={{
        scale: 1,
        rotateY: 60,
        rotateX: 60
      }}
      transition={{duration:0.5}}
      style={{ transformStyle: "preserve-3d" }}
      className="relative rounded-2xl p-6 bg-gradient-to-br from-black/90 via-black/80 to-black/90 backdrop-blur-2xl border border-white/10 text-white"
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity pointer-events-none" />
      <div className="relative z-10" style={{ transform: "translateZ(30px)" }}>
        <div className="text-lg font-semibold mb-2">{icon}</div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-300 text-sm leading-relaxed">{des}</p>
      </div>
    </motion.div>
  );
}
export default Feature;