import { useEffect, useState, ReactNode } from "react";

interface ParallaxHeroProps {
  backgroundImage: string;
  children: ReactNode;
  className?: string;
  overlayOpacity?: number;
  parallaxStrength?: number;
}

export function ParallaxHero({
  backgroundImage,
  children,
  className = "",
  overlayOpacity = 0.5,
  parallaxStrength = 0.3,
}: ParallaxHeroProps) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className={`relative min-h-[85vh] flex items-center overflow-hidden ${className}`}>
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          transform: `translateY(${scrollY * parallaxStrength}px)`,
          willChange: "transform",
        }}
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"
        style={{ opacity: overlayOpacity }}
      />
      <div className="relative z-10 w-full">
        {children}
      </div>
    </section>
  );
}
