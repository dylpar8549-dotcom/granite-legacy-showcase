import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { business, navLinks } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { ButtonLink } from "./Button";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-300",
        scrolled || open
          ? "border-border bg-background/95 shadow-soft backdrop-blur supports-[backdrop-filter]:bg-background/85"
          : "border-transparent bg-background",
      )}
    >
      <a
        href="#main"
        className="focus-ring sr-only left-4 top-4 z-[60] rounded-sm bg-primary px-4 py-2 text-sm text-primary-foreground focus:not-sr-only focus:absolute"
      >
        Skip to content
      </a>

      <div className="container-site flex h-[4.5rem] items-center justify-between gap-6 lg:h-20">
        {/* Wordmark */}
        <a href="#home" className="focus-ring group flex flex-col leading-none" aria-label={`${business.name} — home`}>
          <span className="font-serif text-[1.35rem] font-semibold tracking-[0.08em] text-foreground sm:text-2xl">
            NEAL &amp; WHITENER
          </span>
          <span className="mt-1 font-sans text-[0.62rem] font-semibold tracking-[0.34em] text-bronze sm:text-[0.68rem]">
            MONUMENT CO.
          </span>
        </a>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="focus-ring relative py-2 text-[0.9rem] font-medium text-foreground/80 transition-colors hover:text-foreground after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-bronze after:transition-transform hover:after:scale-x-100"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={business.phoneTel}
            className="focus-ring flex items-center gap-2 px-2 text-[0.9rem] font-semibold text-foreground transition-colors hover:text-bronze"
          >
            <Phone className="size-4" aria-hidden="true" />
            {business.phoneDisplay}
          </a>
          <ButtonLink href="#contact" variant="primary">
            Request Information
          </ButtonLink>
        </div>

        {/* Mobile controls: phone is always one tap away */}
        <div className="flex items-center gap-1 lg:hidden">
          <a
            href={business.phoneTel}
            aria-label={`Call ${business.phoneDisplay}`}
            className="focus-ring flex size-11 items-center justify-center rounded-sm text-foreground transition-colors hover:bg-stone"
          >
            <Phone className="size-5" aria-hidden="true" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="focus-ring flex size-11 items-center justify-center rounded-sm text-foreground transition-colors hover:bg-stone"
          >
            {open ? <X className="size-6" aria-hidden="true" /> : <Menu className="size-6" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile nav panel */}
      <div
        id="mobile-nav"
        className={cn(
          "overflow-hidden border-t border-border bg-background transition-[max-height,opacity] duration-300 ease-out lg:hidden",
          open ? "max-h-[32rem] opacity-100" : "max-h-0 border-transparent opacity-0",
        )}
        aria-hidden={!open}
      >
        <nav aria-label="Mobile" className="container-site py-4">
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  tabIndex={open ? 0 : -1}
                  className="focus-ring block border-b border-border py-4 font-serif text-2xl font-medium text-foreground transition-colors hover:text-bronze"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-5 flex flex-col gap-3 pb-2">
            <ButtonLink href="#contact" variant="primary" size="lg" onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>
              Request Information
            </ButtonLink>
            <ButtonLink href={business.phoneTel} variant="outline" size="lg" tabIndex={open ? 0 : -1}>
              <Phone className="size-4" aria-hidden="true" />
              Call {business.phoneDisplay}
            </ButtonLink>
          </div>
        </nav>
      </div>
    </header>
  );
}
