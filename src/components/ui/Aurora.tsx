import { motion } from "framer-motion";

export default function Aurora() {
  return (
    <div
      style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0 }}
    >
      <motion.div
        animate={{ x: [0, 30, -10, 0], y: [0, -18, 14, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          left: "10%",
          top: "10%",
          width: 520,
          height: 520,
          borderRadius: 999,
          filter: "blur(60px)",
          background:
            "radial-gradient(circle at 30% 30%, rgba(124,58,237,0.50), transparent 60%)",
          opacity: 0.44,
        }}
      />
      <motion.div
        animate={{ x: [0, -22, 18, 0], y: [0, 16, -10, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          right: "8%",
          top: "16%",
          width: 560,
          height: 560,
          borderRadius: 999,
          filter: "blur(70px)",
          background:
            "radial-gradient(circle at 60% 40%, rgba(59,130,246,0.45), transparent 60%)",
          opacity: 0.34,
        }}
      />
      <motion.div
        animate={{ x: [0, 18, -18, 0], y: [0, 22, -16, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          left: "30%",
          bottom: "6%",
          width: 620,
          height: 620,
          borderRadius: 999,
          filter: "blur(80px)",
          background:
            "radial-gradient(circle at 40% 60%, rgba(16,185,129,0.35), transparent 60%)",
          opacity: 0.24,
        }}
      />
    </div>
  );
}
