import { useCallback, useEffect, useRef } from "react";

const ScrollStack = ({ children, className = "" }) => {
  const scrollerRef = useRef(null);
  const cardsRef = useRef([]);
  const animationFrameRef = useRef(null);

  const updateCardTransforms = useCallback(() => {
    if (!cardsRef.current.length) return;

    const scrollTop = window.scrollY;
    const containerHeight = window.innerHeight;
    const stackPosition = containerHeight * 0.2;

    cardsRef.current.forEach((card, i) => {
      if (!card) return;

      const rect = card.getBoundingClientRect();
      const cardTop = rect.top + scrollTop;
      const triggerStart = cardTop - stackPosition - 30 * i;
      const triggerEnd = cardTop - containerHeight * 0.1;

      const progress = Math.max(
        0,
        Math.min(1, (scrollTop - triggerStart) / (triggerEnd - triggerStart))
      );

      const targetScale = 0.85 + i * 0.03;
      const scale = 1 - progress * (1 - targetScale);

      const isPinned = scrollTop >= triggerStart && rect.top > stackPosition;
      let translateY = 0;

      if (isPinned) {
        translateY = scrollTop - cardTop + stackPosition + 30 * i;
      }

      const transform = `translate3d(0, ${translateY}px, 0) scale(${scale})`;
      card.style.transform = transform;
    });

    animationFrameRef.current = requestAnimationFrame(updateCardTransforms);
  }, []);

  useEffect(() => {
    const cards = Array.from(document.querySelectorAll(".scroll-stack-card"));
    cardsRef.current = cards;

    cards.forEach((card, i) => {
      if (i < cards.length - 1) {
        card.style.marginBottom = "100px";
      }
      card.style.willChange = "transform";
      card.style.transformOrigin = "top center";
    });

    animationFrameRef.current = requestAnimationFrame(updateCardTransforms);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [updateCardTransforms]);

  return (
    <div className={`relative w-full ${className}`.trim()} ref={scrollerRef}>
      <div className="pt-[20vh] px-4 md:px-8 pb-[50rem] min-h-screen">
        {children}
        <div className="scroll-stack-end w-full h-px" />
      </div>
    </div>
  );
};

export default ScrollStack;
