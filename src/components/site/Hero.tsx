import { ChevronDown, Phone } from "lucide-react";
import { business, images } from "@/lib/site-config";
import { ButtonLink } from "./Button";

export function Hero() {
  return (
    <section id="home" aria-labelledby="hero-heading" className="relative isolate flex min-h-[88svh] items-end overflow-hidden bg-charcoal sm:min-h-[calc(100svh-4.5rem)] lg:min-h-[calc(100svh-5rem)]">
      <img
        src={images.hero.src}
        alt={images.hero.alt}
        width={images.hero.width}
        height={images.hero.height}
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 -z-20 size-full object-cover object-[28%_center] sm:object-center"
      />
      {/* Layered gradient keeps text readable without darkening the whole photo */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-t from-overlay/85 via-overlay/35 to-overlay/5 sm:bg-gradient-to-r sm:from-overlay/80 sm:via-overlay/45 sm:to-overlay/5"
      />

      <div className="container-site relative pb-24 pt-28 sm:pb-28 sm:pt-36 lg:pb-32">
        {/* Single subtle disclosure — the only demo notice on the page */}
        <p className="mb-8 inline-flex items-center gap-2 rounded-sm border border-charcoal-foreground/25 bg-overlay/30 px-3 py-1.5 text-[0.7rem] font-medium tracking-wide text-charcoal-foreground/85 backdrop-blur-sm">
          Website concept demo — photography is for demonstration purposes.
        </p>

        <div className="max-w-2xl">
          <h1 id="hero-heading" className="font-serif text-[2.75rem] leading-[1.02] font-medium text-charcoal-foreground text-balance sm:text-6xl lg:text-7xl">
            Honoring Lives. Creating Lasting Memorials.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-charcoal-foreground/85 sm:text-xl">
            Thoughtfully designed memorials that help families preserve the memory of the people they love.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <ButtonLink href="#our-work" variant="light" size="lg">
              View Our Work
            </ButtonLink>
            <ButtonLink href={business.phoneTel} variant="lightOutline" size="lg">
              <Phone className="size-4" aria-hidden="true" />
              Call {business.phoneDisplay}
            </ButtonLink>
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to next section"
        className="focus-ring animate-cue absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-charcoal-foreground/80 hover:text-charcoal-foreground sm:flex"
      >
        <span className="text-[0.65rem] font-semibold tracking-[0.3em] uppercase">Scroll</span>
        <ChevronDown className="size-5" aria-hidden="true" />
      </a>
    </section>
  );
}
