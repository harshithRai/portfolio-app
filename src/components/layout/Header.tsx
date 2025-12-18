import { motion } from "framer-motion";
import { PROFILE } from "@/data/profile";

const pillStyle: React.CSSProperties = {
  padding: "10px 14px",
  borderRadius: 999,
  border: "1px solid rgba(255,255,255,0.10)",
  background: "rgba(255,255,255,0.06)",
  backdropFilter: "blur(10px)",
};

export default function Header() {
  return (
    <motion.header
      initial={{ y: -12, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      style={{
        position: "sticky",
        top: 12,
        zIndex: 50,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 36,
      }}
    >
      <div style={{ ...pillStyle, fontWeight: 650 }}>{PROFILE.name}</div>

      <nav style={{ display: "flex", gap: 10 }}>
        <a href="#projects" style={pillStyle}>
          Projects
        </a>
        <a href="#contact" style={pillStyle}>
          Contact
        </a>
      </nav>
    </motion.header>
  );
}
