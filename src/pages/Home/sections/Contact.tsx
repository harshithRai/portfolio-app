import { useState } from "react";
import Toast from "@/components/ui/Toast";
import { motion } from "framer-motion";
import { PROFILE } from "@/data/profile";

const panel: React.CSSProperties = {
  border: "1px solid rgba(255,255,255,0.10)",
  background: "rgba(10,14,24,0.55)",
  borderRadius: 18,
  padding: 18,
  boxShadow: "0 22px 70px rgba(0,0,0,0.45)",
};

const cta: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: 10,
  height: 44,
  padding: "0 14px",
  borderRadius: 14,
  border: "1px solid rgba(255,255,255,0.12)",
  background: "rgba(255,255,255,0.06)",
  backdropFilter: "blur(10px)",
};

const ctaPrimary: React.CSSProperties = {
  ...cta,
  color: "rgba(255,255,255,0.92)",
  borderColor: "rgba(124,58,237,0.45)",
  background: "rgba(124,58,237,0.14)",
  boxShadow: "0 16px 50px rgba(124,58,237,0.20)",
};

const icon: React.CSSProperties = {
  width: 22,
  height: 22,
  display: "grid",
  placeItems: "center",
  borderRadius: 10,
  background: "rgba(255,255,255,0.08)",
  border: "1px solid rgba(255,255,255,0.10)",
  fontSize: 13,
};

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1400);
    } catch {
      // fallback: open mail client if clipboard blocked
      window.location.href = `mailto:${PROFILE.email}`;
    }
  };
  return (
    <section id="contact" style={{ marginTop: 52 }}>
      <motion.div
        initial={{ y: 16, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: 14,
          alignItems: "center",
          ...panel,
        }}
      >
        <div>
          <h2 style={{ marginBottom: 6 }}>Let’s talk</h2>
          <p style={{ color: "rgba(255,255,255,0.70)" }}>
            Roles, projects, collabs — quickest way is email.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            gap: 10,
            flexWrap: "wrap",
            justifyContent: "flex-end",
          }}
        >
          <motion.button
            type="button"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={copyEmail}
            style={{
              ...ctaPrimary,
              cursor: "pointer",
              color: "rgba(255,255,255,0.92)",
              appearance: "none",
              WebkitAppearance: "none",
              outline: "none",
            }}
          >
            <span style={icon}>📋</span>
            <span style={{ fontWeight: 650 }}>Copy email</span>
          </motion.button>

          <motion.a
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            href={PROFILE.linkedin}
            target="_blank"
            rel="noreferrer"
            style={cta}
          >
            <span style={icon}>in</span>
            <span style={{ fontWeight: 650 }}>LinkedIn</span>
          </motion.a>
        </div>
      </motion.div>

      <div style={{ height: 22 }} />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: 10,
          paddingTop: 14,
          borderTop: "1px solid rgba(255,255,255,0.10)",
          color: "rgba(255,255,255,0.45)",
          fontSize: 13,
        }}
      >
        <span>
          © {new Date().getFullYear()} {PROFILE.name}
        </span>
        <span>Built with React</span>
      </div>
      <Toast show={copied} text="Email copied ✅" />
    </section>
  );
}
