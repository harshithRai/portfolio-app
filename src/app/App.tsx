import Background from "@/components/ui/Background";
import Aurora from "@/components/ui/Aurora";
import HomePage from "@/pages/Home/HomePage";

export default function App() {
  return (
    <>
      <Background />
      <Aurora />
      <div style={{ position: "relative", zIndex: 1 }}>
        <HomePage />
      </div>
    </>
  );
}
