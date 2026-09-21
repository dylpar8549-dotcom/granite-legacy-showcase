import { galleryItems } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { ButtonLink } from "./Button";
import { SectionHeading } from "./SectionHeading";

/*
 * GALLERY — images and captions are defined in src/lib/site-config.ts
 * (galleryItems). Replace the demo photographs there with the business's
 * own work; this component only handles layout.
 */
export function Gallery() {
  return (
    <section id="our-work" aria-labelledby="our-work-heading" className="bg-background py-24 sm:py-32">
      <div className="container-site">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Our Work"
            title="Crafted in Stone, Made to Last"
            description="A selection of memorial styles — upright monuments, markers, benches, and engraved detail — showing the range of what a lasting tribute can be."
          />
          <p className="text-sm text-muted-foreground md:pb-2">
            Memorials &middot; Custom Engraving &middot; Monuments &middot; Detail &amp; Craftsmanship
          </p>
        </div>

        <ul className="mt-14 grid grid-flow-dense grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4 md:auto-rows-[15rem] lg:auto-rows-[17rem]">
          {galleryItems.map((item) => (
            <li
              key={item.src}
              className={cn(
                "group relative overflow-hidden bg-stone-deep",
                item.tall ? "row-span-2 aspect-[4/5] md:aspect-auto" : "aspect-[4/3] md:aspect-auto",
              )}
            >
              <img
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                loading="lazy"
                decoding="async"
                className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05] motion-reduce:transition-none"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-overlay/70 via-overlay/10 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-100"
              />
              <span className="absolute inset-x-0 bottom-0 translate-y-1 p-4 text-[0.68rem] font-semibold tracking-[0.2em] text-charcoal-foreground uppercase opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 motion-reduce:transition-none sm:p-5">
                {item.category}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-12 flex justify-center">
          {/* "View More Work" — link to a full gallery page or photo album once available. */}
          <ButtonLink href="#contact" variant="outline" size="lg">
            View More Work
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
