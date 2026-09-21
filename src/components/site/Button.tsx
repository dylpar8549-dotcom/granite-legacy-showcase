import { cva, type VariantProps } from "class-variance-authority";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "focus-ring inline-flex items-center justify-center gap-2 rounded-sm font-sans text-sm font-semibold tracking-wide transition-colors duration-200 disabled:pointer-events-none disabled:opacity-60",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground hover:bg-bronze",
        bronze: "bg-bronze text-accent-foreground hover:bg-primary",
        outline: "border border-foreground/40 bg-transparent text-foreground hover:border-foreground hover:bg-foreground hover:text-primary-foreground",
        light: "bg-background text-foreground hover:bg-bronze hover:text-accent-foreground",
        lightOutline: "border border-charcoal-foreground/60 bg-transparent text-charcoal-foreground hover:bg-charcoal-foreground hover:text-charcoal",
        ghost: "text-foreground hover:text-bronze",
      },
      size: {
        md: "h-11 px-6",
        lg: "h-12 px-7 text-[0.95rem]",
        sm: "h-9 px-4 text-xs",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

type Variants = VariantProps<typeof buttonVariants>;

export function ButtonLink({
  className,
  variant,
  size,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & Variants) {
  return <a className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}

export function Button({
  className,
  variant,
  size,
  type = "button",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & Variants) {
  return <button type={type} className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}
