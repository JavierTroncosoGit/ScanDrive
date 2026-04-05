"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Inicializar Lenis para lograr un scroll más suave y lento (luxurious feel)
    const lenis = new Lenis({
      duration: 2,           // Hacemos que la animación de scroll tome más tiempo (slower)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Curva de easing fluida
      smoothWheel: true,
      wheelMultiplier: 0.8,  // Reducimos la velocidad del wheel
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Interceptar clics en enlaces de ancla para que Lenis controle el scroll hacia ellos
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");
      
      if (!anchor) return;
      
      const href = anchor.getAttribute("href");
      // Solo si es un ancla interna de esta página y no un link a un sitio diferente o a "/"
      if (href && href.startsWith("#") && href.length > 1) {
        e.preventDefault();
        // Offset de -80px con respecto al 'top' porque el header fijo mide h-20 (80px)
        lenis.scrollTo(href, { offset: -80, duration: 2 });
      }
    };

    document.documentElement.addEventListener("click", handleAnchorClick);

    return () => {
      document.documentElement.removeEventListener("click", handleAnchorClick);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
