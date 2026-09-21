import { cn } from "@/lib/utils";

interface Props {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "default" | "light";
  className?: string;
}

export function SectionHeading({ eyebrow, title, description, align = "left", tone = "default", className }: Props) {
  const light = tone === "light";
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && <p className={cn("eyebrow mb-4", light && "text-bronze-soft")}>{eyebrow}</p>}
      <h2
        className={cn(
          "font-serif text-4xl leading-[1.08] font-medium text-balance sm:text-5xl",
          light ? "text-charcoal-foreground" : "text-foreground",
        )}
      >
        {title}
      </h2>
      <span className={cn("rule-bronze mt-6", align === "center" && "mx-auto")} />
      {description && (
        <p className={cn("mt-6 text-base leading-relaxed sm:text-lg", light ? "text-charcoal-foreground/75" : "text-muted-foreground")}>
          {description}
        </p>
      )}
    </div>
  );
}
