interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeading({ title, subtitle, centered = false }: SectionHeadingProps) {
  return (
    <div className={centered ? "text-center" : ""}>
      <h2 className="text-3xl font-bold text-neutral-900">{title}</h2>
      {subtitle && (
        <p className="mt-3 text-lg text-neutral-600 max-w-2xl leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}
