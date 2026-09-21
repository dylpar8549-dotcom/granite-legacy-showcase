import { Navigation, Phone } from "lucide-react";
import { business, directionsUrl, navLinks } from "@/lib/site-config";
import { ButtonLink } from "./Button";

export function SiteFooter() {
  return (
    <footer className="bg-charcoal text-charcoal-foreground">
      <div className="container-site grid gap-12 py-16 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-5">
          <p className="font-serif text-2xl font-semibold tracking-[0.08em]">NEAL &amp; WHITENER</p>
          <p className="mt-1 text-[0.68rem] font-semibold tracking-[0.34em] text-bronze-soft">MONUMENT CO.</p>
          <address className="mt-6 not-italic leading-relaxed text-charcoal-foreground/75">
            {business.address.street}
            <br />
            {business.address.city}, {business.address.state} {business.address.zip}
            <br />
            <a href={business.phoneTel} className="focus-ring mt-2 inline-block text-charcoal-foreground hover:text-bronze-soft">
              {business.phoneDisplay}
            </a>
          </address>
        </div>

        <nav aria-label="Footer" className="md:col-span-3">
          <p className="text-xs font-semibold tracking-[0.2em] text-charcoal-foreground/50 uppercase">Navigate</p>
          <ul className="mt-4 space-y-2.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="focus-ring text-charcoal-foreground/80 transition-colors hover:text-charcoal-foreground">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-4">
          <p className="text-xs font-semibold tracking-[0.2em] text-charcoal-foreground/50 uppercase">Reach Us</p>
          <div className="mt-4 flex flex-col gap-3">
            <ButtonLink href={business.phoneTel} variant="light">
              <Phone className="size-4" aria-hidden="true" />
              Call {business.phoneDisplay}
            </ButtonLink>
            <ButtonLink href={directionsUrl} target="_blank" rel="noopener noreferrer" variant="lightOutline">
              <Navigation className="size-4" aria-hidden="true" />
              Get Directions
            </ButtonLink>
          </div>
          {/* SOCIAL LINKS: populate business.social in src/lib/site-config.ts to show them here. */}
          {business.social.length > 0 && (
            <ul className="mt-6 flex gap-4">
              {business.social.map((s) => (
                <li key={s.url}>
                  <a href={s.url} target="_blank" rel="noopener noreferrer" className="focus-ring text-sm text-charcoal-foreground/80 hover:text-charcoal-foreground">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="border-t border-charcoal-foreground/10">
        <div className="container-site flex flex-col gap-2 py-6 text-xs text-charcoal-foreground/50 sm:flex-row sm:items-center sm:justify-between">
          <p>Website concept demo.</p>
          <p>
            {business.name} &middot; {business.address.city}, {business.address.state}
          </p>
        </div>
      </div>
    </footer>
  );
}
