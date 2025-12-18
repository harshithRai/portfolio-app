import { motion, AnimatePresence } from "framer-motion";

type Props = {
  open: boolean;
  src: string;
  alt: string;
  onClose: () => void;
};

export default function Lightbox({ open, src, alt, onClose }: Props) {
  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 999,
            background: "rgba(0,0,0,0.68)",
            backdropFilter: "blur(6px)",
            display: "grid",
            placeItems: "center",
            padding: 16,
          }}
        >
          <motion.img
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.98, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            src={src}
            alt={alt}
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: "min(1100px, 96vw)",
              maxHeight: "88vh",
              borderRadius: 16,
              border: "1px solid rgba(255,255,255,0.14)",
              boxShadow: "0 40px 120px rgba(0,0,0,0.65)",
            }}
          />
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
