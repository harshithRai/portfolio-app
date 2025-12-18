import { useState } from "react";
import Lightbox from "@/components/ui/Lightbox";
import { motion } from "framer-motion";
import type { Project } from "@/types/project";
import ImageCarousel from "@/components/ui/ImageCarousel";

export default function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<{ src: string; alt: string } | null>(
    null
  );
  return (
    <motion.article
      initial={{ y: 18, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      whileHover={{ y: -4 }}
      style={{
        border: "1px solid rgba(255,255,255,0.10)",
        background: "rgba(255,255,255,0.06)",
        borderRadius: 18,
        padding: 18,
        boxShadow: "0 24px 70px rgba(0,0,0,0.35)",
        marginBottom: 16,
      }}
    >
      <h3 style={{ fontSize: 22 }}>{project.title}</h3>
      <p style={{ marginTop: 6, color: "rgba(255,255,255,0.70)" }}>
        {project.subtitle}
      </p>

      <p style={{ marginTop: 12 }}>{project.description}</p>

      <ul style={{ marginTop: 12 }}>
        {project.highlights.map((h) => (
          <li key={h} style={{ marginTop: 6 }}>
            {h}
          </li>
        ))}
      </ul>

      <div style={{ marginTop: 12, color: "rgba(255,255,255,0.62)" }}>
        {project.stack.join(" • ")}
      </div>

      <ImageCarousel images={project.images} />

      {project.links?.some((l) => l.href && l.href !== "#") ? (
        <div
          style={{ display: "flex", gap: 12, marginTop: 12, flexWrap: "wrap" }}
        >
          {project.links
            .filter((l) => l.href && l.href !== "#")
            .map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                style={{
                  padding: "10px 12px",
                  borderRadius: 12,
                  border: "1px solid rgba(255,255,255,0.12)",
                  background: "rgba(13,18,30,0.72)",
                }}
              >
                {l.label}
              </a>
            ))}
        </div>
      ) : null}
      <Lightbox
        open={open}
        src={active?.src ?? ""}
        alt={active?.alt ?? ""}
        onClose={() => setOpen(false)}
      />
    </motion.article>
  );
}
