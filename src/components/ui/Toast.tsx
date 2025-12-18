import { AnimatePresence, motion } from "framer-motion";

export default function Toast({ show, text }: { show: boolean; text: string }) {
  return (
    <AnimatePresence>
      {show ? (
        <motion.div
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 10, opacity: 0 }}
          transition={{ duration: 0.25 }}
          style={{
            position: "fixed",
            bottom: 20,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 9999,
            padding: "10px 14px",
            borderRadius: 14,
            border: "1px solid rgba(255,255,255,0.14)",
            background: "rgba(10,14,24,0.72)",
            backdropFilter: "blur(10px)",
            boxShadow: "0 18px 60px rgba(0,0,0,0.45)",
            color: "rgba(255,255,255,0.9)",
            fontSize: 14,
            fontWeight: 600,
          }}
        >
          {text}
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
