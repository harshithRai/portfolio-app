export default function Background() {
  return (
    <div
      style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none" }}
    >
      {/* base gradient wash (constant) */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(1200px 600px at 20% -10%, rgba(124,58,237,0.22), transparent 55%)," +
            "radial-gradient(1000px 600px at 90% 10%, rgba(59,130,246,0.16), transparent 55%)," +
            "radial-gradient(900px 600px at 50% 110%, rgba(16,185,129,0.10), transparent 55%)",
          opacity: 1,
        }}
      />
      {/* vignette so edges look premium */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 50% 20%, transparent 0%, rgba(0,0,0,0.35) 65%, rgba(0,0,0,0.55) 100%)",
          opacity: 0.9,
        }}
      />
    </div>
  );
}
