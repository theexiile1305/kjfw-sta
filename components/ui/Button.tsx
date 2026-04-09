import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
}

export default function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-button px-6 py-3 text-sm font-semibold " +
    "transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 " +
    "disabled:pointer-events-none disabled:opacity-50";

  const variants: Record<string, string> = {
    primary: "bg-fire-500 text-white hover:bg-fire-600 focus-visible:outline-fire-500",
    secondary: "bg-navy-700 text-white hover:bg-navy-800 focus-visible:outline-navy-700",
    outline:
      "border-2 border-fire-500 text-fire-600 hover:bg-fire-50 focus-visible:outline-fire-500",
  };

  return (
    <button className={`${base} ${variants[variant] ?? ""} ${className}`} {...props}>
      {children}
    </button>
  );
}
