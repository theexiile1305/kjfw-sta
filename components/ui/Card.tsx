import type { HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

export default function Card({ hover = false, className = "", children, ...props }: CardProps) {
  return (
    <div
      className={`rounded-card bg-white border border-neutral-200 p-6 shadow-card
        ${hover ? "transition-shadow hover:shadow-card-hover" : ""}
        ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
