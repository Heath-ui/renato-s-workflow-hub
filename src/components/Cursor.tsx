import { useEffect, useState } from "react";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };

    window.addEventListener("mousemove", handleMouseMove);
    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Outer glow circle */}
      <div
        className="pointer-events-none fixed w-8 h-8 rounded-full border-2 mix-blend-screen z-50"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
          borderColor: isDark ? "hsl(185 80% 55%)" : "hsl(185 80% 40%)",
          boxShadow: isDark
            ? "0 0 20px hsl(185 80% 55% / 0.5)"
            : "0 0 20px hsl(185 80% 40% / 0.4)",
        }}
      />
      {/* Inner dot */}
      <div
        className="pointer-events-none fixed w-1.5 h-1.5 rounded-full z-50"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
          backgroundColor: isDark ? "hsl(185 80% 55%)" : "hsl(185 80% 40%)",
        }}
      />
    </>
  );
};

export default Cursor;
