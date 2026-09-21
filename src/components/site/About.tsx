import { business, images } from "@/lib/site-config";
import { ButtonLink } from "./Button";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="bg-background py-24 sm:py-32">
      <div className="container-site grid items-center gap-14 lg:grid-cols-12 lg:gap-20">
        <div className="relative lg:col-span-5 lg:order-2">
          <div className="absolute -left-4 -top-4 hidden h-full w-full border border-bronze/40 sm:block" aria-hidden="true" />
          <img
            src={images.about.src}
            alt={images.about.alt}
            width={images.about.width}
            height={images.about.height}
            loading="lazy"
            decoding="async"
            className="relative aspect-[4/5] w-full object-cover shadow-soft"
          />
        </div>

        <div className="lg:col-span-7 lg:order-1 lg:pr-8">
          <SectionHeading eyebrow="About" title="A Memorial Should Be Personal." />
          <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>
              Choosing a memorial is one of the most personal decisions a family makes. It is a way of saying, in
              stone, who someone was and what they meant to the people who loved them. It deserves patience, care,
              and a conversation rather than a catalog.
            </p>
            <p>
              {business.name} is a local monument maker in Blue Ridge, Georgia, serving families throughout the
              North Georgia mountains. This website concept is designed to help visitors get to know the business,
              understand the kinds of memorials available, and take a first, unhurried step toward creating a lasting
              tribute.
            </p>
            <p>
              Whether you are planning ahead, honoring a recent loss, or adding to an existing family plot, a
              conversation is the best place to begin.
            </p>
          </div>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#contact" variant="primary">
              Request Information
            </ButtonLink>
            <ButtonLink href="#services" variant="ghost" className="px-2 sm:px-4">
              Explore memorial options &rarr;
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
