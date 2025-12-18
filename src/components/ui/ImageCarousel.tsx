import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Img = { src: string; alt: string };

export default function ImageCarousel({ images }: { images: Img[] }) {
  const safe = useMemo(() => images ?? [], [images]);
  const [active, setActive] = useState(0);

  const prev = () => setActive((i) => (i - 1 + safe.length) % safe.length);
  const next = () => setActive((i) => (i + 1) % safe.length);

  if (!safe.length) return null;

  return (
    <div style={{ marginTop: 14 }}>
      {/* main image */}
      <div
        style={{
          position: "relative",
          borderRadius: 16,
          overflow: "hidden",
          border: "1px solid rgba(255,255,255,0.10)",
          background: "rgba(255,255,255,0.04)",
        }}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={safe[active].src}
            src={safe[active].src}
            alt={safe[active].alt}
            initial={{ opacity: 0, scale: 0.995 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.995 }}
            transition={{ duration: 0.22 }}
            style={{ width: "100%", display: "block" }}
            loading="lazy"
          />
        </AnimatePresence>

        {/* arrows */}
        {safe.length > 1 ? (
          <>
            <button
              onClick={prev}
              aria-label="Previous image"
              style={arrowStyle("left")}
            >
              ‹
            </button>
            <button
              onClick={next}
              aria-label="Next image"
              style={arrowStyle("right")}
            >
              ›
            </button>
          </>
        ) : null}
      </div>

      {/* thumbnails */}
      {safe.length > 1 ? (
        <div
          style={{
            display: "flex",
            gap: 10,
            marginTop: 10,
            overflowX: "auto",
            paddingBottom: 6,
          }}
        >
          {safe.map((img, idx) => {
            const isActive = idx === active;
            return (
              <button
                key={img.src}
                onClick={() => setActive(idx)}
                aria-label={`Open image ${idx + 1}`}
                style={{
                  padding: 0,
                  borderRadius: 12,
                  border: isActive
                    ? "1px solid rgba(124,58,237,0.55)"
                    : "1px solid rgba(255,255,255,0.10)",
                  background: "transparent",
                  cursor: "pointer",
                  overflow: "hidden",
                  flex: "0 0 auto",
                  boxShadow: isActive
                    ? "0 10px 35px rgba(124,58,237,0.18)"
                    : "none",
                }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  style={{
                    height: 64,
                    width: 110,
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}

function arrowStyle(side: "left" | "right"): React.CSSProperties {
  return {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    ...(side === "left" ? { left: 10 } : { right: 10 }),
    height: 38,
    width: 38,
    borderRadius: 12,
    border: "1px solid rgba(255,255,255,0.12)",
    background: "rgba(10,14,24,0.45)",
    backdropFilter: "blur(10px)",
    color: "rgba(255,255,255,0.92)",
    cursor: "pointer",
    fontSize: 22,
    lineHeight: "36px",
  };
}
