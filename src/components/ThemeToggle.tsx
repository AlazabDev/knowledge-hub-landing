import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window === "undefined") return true;
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) root.classList.add("dark");
    else root.classList.remove("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setIsDark((v) => !v)}
      aria-label="تبديل الوضع"
      className="gold-border bg-transparent hover:bg-primary/10 relative overflow-hidden"
    >
      <Sun className={`w-5 h-5 transition-all ${isDark ? "scale-0 rotate-90" : "scale-100 rotate-0"} absolute`} />
      <Moon className={`w-5 h-5 transition-all ${isDark ? "scale-100 rotate-0" : "scale-0 -rotate-90"} absolute`} />
    </Button>
  );
};
