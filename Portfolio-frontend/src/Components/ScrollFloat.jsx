// ✅ ScrollFloat.jsx
import { useLayoutEffect, useMemo, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollFloat = ({
  children,
  containerClassName = "",
  textClassName = "",
  duration = 1,
  ease = "power3.out",
  stagger = 0.03,
  start = "top 85%",
  end = "bottom 20%",
  scrub = false,
}) => {
  const containerRef = useRef(null);

  // Split text into spans for animation
  const splitText = useMemo(() => {
    if (typeof children !== "string") return children;
    return children.split("").map((char, i) => (
      <span key={i} className="inline-block opacity-0 translate-y-6">
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  }, [children]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const chars = gsap.utils.toArray(
        containerRef.current.querySelectorAll("span")
      );

      gsap.fromTo(
        chars,
        {
          opacity: 0,
          yPercent: 100,
          rotateX: 90,
        },
        {
          opacity: 1,
          yPercent: 0,
          rotateX: 0,
          ease,
          duration,
          stagger,
          transformOrigin: "50% 100%",
          scrollTrigger: {
            trigger: containerRef.current,
            start,
            end,
            scrub,
            once: !scrub,
          },
        }
      );
    });

    return () => ctx.revert();
  }, [duration, ease, stagger, start, end, scrub]);

  return (
    <h2
      ref={containerRef}
      className={`overflow-hidden leading-tight ${containerClassName}`}
    >
      <span
        className={`inline-block text-[clamp(1.6rem,4vw,3rem)] font-bold ${textClassName}`}
      >
        {splitText}
      </span>
    </h2>
  );
};

export default ScrollFloat;
