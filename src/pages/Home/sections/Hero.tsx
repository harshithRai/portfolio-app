import { motion } from "framer-motion";
import { PROFILE } from "@/data/profile";

const buttonStyle: React.CSSProperties = {
  padding: "12px 14px",
  borderRadius: 12,
  border: "1px solid rgba(255,255,255,0.12)",
  background: "rgba(255,255,255,0.06)",
  backdropFilter: "blur(10px)",
};

export default function Hero() {
  return (
    <section style={{ padding: "34px 0 10px" }}>
      <motion.h1
        initial={{ y: 14, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {PROFILE.name}
      </motion.h1>

      <motion.p
        initial={{ y: 14, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.06 }}
        style={{ marginTop: 12, fontSize: 18, color: "rgba(255,255,255,0.78)" }}
      >
        {PROFILE.role} • {PROFILE.location}
      </motion.p>

      <motion.p
        initial={{ y: 14, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.12 }}
        style={{ marginTop: 12, maxWidth: 760 }}
      >
        I build clean, reliable UI-heavy products with React + TypeScript —
        strong on component design, validations, API-driven screens, and
        shipping end-to-end.
      </motion.p>

      <motion.div
        initial={{ y: 14, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.18 }}
        style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 18 }}
      >
        <a style={buttonStyle} href={`mailto:${PROFILE.email}`}>
          Email
        </a>
        <a
          style={buttonStyle}
          href={PROFILE.github}
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a
          style={buttonStyle}
          href={PROFILE.linkedin}
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <a
          style={{ ...buttonStyle, borderColor: "rgba(124,58,237,0.45)" }}
          href="#projects"
        >
          View projects ↓
        </a>
      </motion.div>

      <div style={{ height: 18 }} />
      <hr />
    </section>
  );
}
