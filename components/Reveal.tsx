"use client";
import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  y = 28,
  className
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function ImageReveal({ children, className }: { children: ReactNode; className?: string }) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ clipPath: "inset(8% 6% 8% 6% round 2px)", opacity: 0.4 }}
      whileInView={{ clipPath: "inset(0% 0% 0% 0% round 2px)", opacity: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      style={{ overflow: "hidden" }}
    >
      {children}
    </motion.div>
  );
}

export function Masked({
  lines,
  className,
  lineClassName,
  delay = 0,
  stagger = 0.12,
  as: Tag = "div"
}: {
  lines: ReactNode[];
  className?: string;
  lineClassName?: string;
  delay?: number;
  stagger?: number;
  as?: "div" | "h1" | "h2" | "p";
}) {
  const reduce = useReducedMotion();
  if (reduce) return <Tag className={className}>{lines.map((l, i) => <span key={i} className="block">{l}</span>)}</Tag>;
  return (
    <Tag className={className} aria-label={undefined}>
      {lines.map((l, i) => (
        <span key={i} className={`mask-line ${lineClassName ?? ""}`}>
          <motion.span
            initial={{ y: "112%" }}
            whileInView={{ y: "0%" }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 1.05, delay: delay + i * stagger, ease: [0.22, 1, 0.36, 1] }}
          >
            {l}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
