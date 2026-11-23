"use client";

import { useEffect, useRef, type ReactNode } from "react";

export function HeroParallax({ children }: { children: ReactNode }) {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const motion = window.matchMedia(
      "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
    );
    let frame = 0;

    function reset() {
      cancelAnimationFrame(frame);
      hero!.style.removeProperty("--hero-parallax-x");
      hero!.style.removeProperty("--hero-parallax-y");
    }

    function move(event: PointerEvent) {
      if (!motion.matches || event.pointerType !== "mouse") return;
      const bounds = hero!.getBoundingClientRect();
      if (!bounds.width || !bounds.height) return;
      const x = Math.max(
        -1,
        Math.min(1, ((event.clientX - bounds.left) / bounds.width) * 2 - 1),
      );
      const y = Math.max(
        -1,
        Math.min(1, ((event.clientY - bounds.top) / bounds.height) * 2 - 1),
      );

      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        hero!.style.setProperty("--hero-parallax-x", `${x * 28}px`);
        hero!.style.setProperty("--hero-parallax-y", `${y * 22}px`);
      });
    }

    hero.addEventListener("pointermove", move, { passive: true });
    hero.addEventListener("pointerleave", reset);
    hero.addEventListener("pointercancel", reset);
    window.addEventListener("blur", reset);
    motion.addEventListener("change", reset);

    return () => {
      reset();
      hero.removeEventListener("pointermove", move);
      hero.removeEventListener("pointerleave", reset);
      hero.removeEventListener("pointercancel", reset);
      window.removeEventListener("blur", reset);
      motion.removeEventListener("change", reset);
    };
  }, []);

  return (
    <section ref={heroRef} className="hero" id="about">
      {children}
    </section>
  );
}
