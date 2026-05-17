"use client";
import { useScroll, useMotionValueEvent } from "motion/react";
import React, { useEffect, useRef, useState, useCallback } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const mobileRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const desktopRef = useRef<HTMLDivElement>(null);
  const dotRefs = useRef<(HTMLDivElement | null)[]>([]);
  const pathRef = useRef<SVGPathElement>(null);

  const [mobileHeight, setMobileHeight] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const [svgPath, setSvgPath] = useState("");
  const [svgDims, setSvgDims] = useState({ w: 0, h: 0 });
  const [pathLen, setPathLen] = useState(0);
  const [scrollFill, setScrollFill] = useState(0);

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    if (mobileRef.current) {
      setMobileHeight(mobileRef.current.getBoundingClientRect().height);
    }
  }, []);

  const buildPath = useCallback(() => {
    if (!desktopRef.current) return;
    const containerRect = desktopRef.current.getBoundingClientRect();

    const pts = dotRefs.current
      .map((d) => {
        if (!d) return null;
        const r = d.getBoundingClientRect();
        return {
          x: r.left - containerRect.left + r.width / 2,
          y: r.top - containerRect.top + r.height / 2,
        };
      })
      .filter(Boolean) as { x: number; y: number }[];

    if (pts.length < 2) return;

    let d = `M ${pts[0].x} ${pts[0].y}`;
    for (let i = 0; i < pts.length - 1; i++) {
      const a = pts[i];
      const b = pts[i + 1];
      const midY = (a.y + b.y) / 2;
      d += ` C ${a.x} ${midY}, ${b.x} ${midY}, ${b.x} ${b.y}`;
    }

    setSvgPath(d);
    setSvgDims({
      w: containerRect.width,
      h: containerRect.height,
    });
  }, []);

  useEffect(() => {
    if (!isDesktop) return;
    const timer = setTimeout(buildPath, 150);
    window.addEventListener("resize", buildPath);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", buildPath);
    };
  }, [isDesktop, buildPath, data]);

  useEffect(() => {
    if (pathRef.current && svgPath) {
      setPathLen(pathRef.current.getTotalLength());
    }
  }, [svgPath]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0%", "end 100%"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => setScrollFill(v));

  const mobileFill = mobileHeight * scrollFill;

  return (
    <div
      className="w-full bg-[var(--bg-card)] font-sans md:px-10 shadow-xl rounded-2xl"
      ref={containerRef}
    >
      {isDesktop ? (
        <div ref={desktopRef} className="relative w-full pb-20 pt-10">
          {svgPath && (
            <svg
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: svgDims.w,
                height: svgDims.h,
                pointerEvents: "none",
                zIndex: 0,
                overflow: "visible",
              }}
            >
              <defs>
                <filter id="neonGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>
              <path
                d={svgPath}
                fill="none"
                stroke="rgba(0,229,255,0.15)"
                strokeWidth="5"
                strokeLinecap="round"
              />
              <path
                ref={pathRef}
                d={svgPath}
                fill="none"
                stroke="#00e5ff"
                strokeWidth="5"
                strokeLinecap="round"
                strokeDasharray={pathLen}
                strokeDashoffset={pathLen - pathLen * scrollFill}
                filter="url(#neonGlow)"
              />
            </svg>
          )}

          <div className="relative flex flex-col gap-28 py-10">
            {data.map((item, i) => {
              const dotOnRight = i % 2 === 0;
              return (
                <div
                  key={i}
                  className="relative flex items-center w-full"
                >
                  {dotOnRight ? (
                    <>
                      <div className="flex-1 pr-12">
                        <div className="relative bg-[rgba(10,10,10,0.4)] backdrop-blur-sm border border-[var(--border-secondary)] rounded-2xl p-6 shadow-lg w-full">
                          <h3 className="text-2xl font-bold text-[var(--text-tertiary)] mb-4">
                            {item.title}
                          </h3>
                          <div className="text-sm text-[var(--text-secondary)]">
                            {item.content}
                          </div>
                        </div>
                      </div>
                      <div
                        ref={(el) => { dotRefs.current[i] = el; }}
                        className="shrink-0 w-6 h-6 rounded-full bg-[#1a1e23ff] z-10"
                        style={{
                          boxShadow: "0 0 0 4px var(--bg-card), 0 0 0 7px #00e5ff",
                        }}
                      />
                    </>
                  ) : (
                    <>
                      <div
                        ref={(el) => { dotRefs.current[i] = el; }}
                        className="shrink-0 w-6 h-6 rounded-full bg-[#1a1e23ff] z-10"
                        style={{
                          boxShadow: "0 0 0 4px var(--bg-card), 0 0 0 7px #00e5ff",
                        }}
                      />
                      <div className="flex-1 pl-12">
                        <div className="relative bg-[rgba(10,10,10,0.4)] backdrop-blur-sm border border-[var(--border-secondary)] rounded-2xl p-6 shadow-lg w-full">
                          <h3 className="text-2xl font-bold text-[var(--text-tertiary)] mb-4">
                            {item.title}
                          </h3>
                          <div className="text-sm text-[var(--text-secondary)]">
                            {item.content}
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div ref={mobileRef} className="relative max-w-7xl mx-auto pb-20">
          {data.map((item, index) => (
            <div key={index} className="flex justify-start pt-10 gap-0">
              <div className="sticky flex flex-col z-40 items-center top-40 self-start">
                <div className="h-10 w-10 rounded-full bg-[var(--bg-secondary)] flex items-center justify-center relative left-3">
                  <div className="h-4 w-4 rounded-full bg-[var(--bg-tertiary)] border border-[var(--border-secondary)] p-2" />
                </div>
              </div>
              <div className="relative pl-10 pr-4 w-full">
                <h3 className="block text-2xl mb-4 text-left font-bold text-[var(--text-tertiary)]">
                  {item.title}
                </h3>
                {item.content}
              </div>
            </div>
          ))}
          <div
            style={{ height: mobileHeight + "px" }}
            className="absolute left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-[var(--border-secondary)] to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
          >
            <div
              style={{
                height: mobileFill + "px",
                opacity: scrollFill > 0.05 ? 1 : 0,
              }}
              className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-[var(--accent-purple)] via-[var(--accent-blue)] to-transparent from-[0%] via-[10%] rounded-full transition-opacity duration-300"
            />
          </div>
        </div>
      )}
    </div>
  );
};
