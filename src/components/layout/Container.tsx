import type { ReactNode } from "react";

export default function Container({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        maxWidth: 1120,
        margin: "0 auto",
        padding: "26px 18px 80px",
      }}
    >
      {children}
    </div>
  );
}
