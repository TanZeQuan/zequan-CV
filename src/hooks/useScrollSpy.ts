import { useEffect, useState } from "react";

type Options = {
  rootMargin?: string; // 控制“提前/延后”触发高亮
  threshold?: number | number[];
  defaultActiveId?: string;
};

export function useScrollSpy(
  sectionIds: string[],
  options: Options = {}
) {
  const {
    rootMargin = "-20% 0px -65% 0px", // ✅ 常用：靠近顶部就算当前区块
    threshold = [0, 0.1, 0.25, 0.5, 1],
    defaultActiveId = sectionIds[0] ?? "",
  } = options;

  const [activeId, setActiveId] = useState(defaultActiveId);

  useEffect(() => {
    if (!sectionIds.length) return;

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // 找出目前“最可见”的 section
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0));

        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        } else {
          // 若没有 intersecting（例如快速滚动），fallback 用最近的 top
          const y = window.scrollY + window.innerHeight * 0.25;
          let nearest = elements[0].id;
          let minDist = Number.POSITIVE_INFINITY;

          for (const el of elements) {
            const rect = el.getBoundingClientRect();
            const top = rect.top + window.scrollY;
            const dist = Math.abs(top - y);
            if (dist < minDist) {
              minDist = dist;
              nearest = el.id;
            }
          }
          setActiveId(nearest);
        }
      },
      { root: null, rootMargin, threshold }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [rootMargin, sectionIds, threshold]);

  return activeId;
}
