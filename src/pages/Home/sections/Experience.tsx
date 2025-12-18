import { motion } from "framer-motion";
import { EXPERIENCE } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" style={{ marginTop: 44 }}>
      <h2>Experience</h2>

      <div style={{ display: "grid", gap: 14, marginTop: 14 }}>
        {EXPERIENCE.map((item) => (
          <motion.div
            key={item.company + item.period}
            initial={{ y: 14, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            style={{
              borderRadius: 18,
              border: "1px solid rgba(255,255,255,0.10)",
              background: "rgba(13,18,30,0.72)",
              boxShadow: "0 22px 70px rgba(0,0,0,0.35)",
              padding: 18,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: 12,
                flexWrap: "wrap",
              }}
            >
              <div>
                <div style={{ fontWeight: 750, fontSize: 16 }}>
                  {item.title}
                </div>
                <div style={{ color: "rgba(255,255,255,0.75)", marginTop: 3 }}>
                  {item.company} • {item.location}
                </div>
              </div>
              <div style={{ color: "rgba(255,255,255,0.55)", fontSize: 13 }}>
                {item.period}
              </div>
            </div>

            <ul style={{ marginTop: 10, color: "rgba(255,255,255,0.80)" }}>
              {item.bullets.map((b) => (
                <li key={b} style={{ marginTop: 6 }}>
                  {b}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
