import { motion } from "framer-motion";
import { PROJECTS } from "@/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";

export default function Projects() {
  return (
    <section id="projects" style={{ marginTop: 26 }}>
      <motion.h2
        initial={{ y: 12, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        Projects
      </motion.h2>

      <div style={{ height: 14 }} />

      {PROJECTS.map((p) => (
        <ProjectCard key={p.title} project={p} />
      ))}
    </section>
  );
}
