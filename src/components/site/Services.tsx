import { SectionHeading } from "./SectionHeading";

/*
 * NOTE FOR LAUNCH: Confirm exact services with business before launch.
 * These categories are drawn from public listings and customer feedback,
 * not from an official company service list. Edit, add, or remove freely.
 */
const services = [
  {
    number: "01",
    title: "Custom Memorials",
    description:
      "Memorials shaped around the person being remembered — from classic upright designs to pieces created for a specific family and place.",
  },
  {
    number: "02",
    title: "Headstones & Grave Markers",
    description:
      "Upright headstones, flat markers, and companion memorials in granite, crafted to suit the setting and the family's wishes.",
  },
  {
    number: "03",
    title: "Personalized Engraving",
    description:
      "Names, dates, and inscriptions that read clearly and age gracefully, including engraving added to existing memorials.",
  },
  {
    number: "04",
    title: "Memorial Artwork",
    description:
      "Carved and etched designs — florals, scenes, symbols, and portraits — that give a memorial its individual character.",
  },
  {
    number: "05",
    title: "Pet Memorials",
    description:
      "Smaller granite memorials and markers to honor the companions who were part of the family.",
  },
];

export function Services() {
  return (
    <section id="services" aria-labelledby="services-heading" className="bg-stone py-24 sm:py-32">
      <div className="container-site">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="Services"
              title="Memorials, Markers & Engraving"
              description="Every memorial begins with a conversation about the person it honors. These are the kinds of work families most often ask about."
            />
          </div>

          <ul className="grid gap-px overflow-hidden border border-border bg-border lg:col-span-8 sm:grid-cols-2">
            {services.map((service, i) => (
              <li
                key={service.title}
                className={
                  "group relative flex flex-col bg-background p-7 transition-colors duration-300 hover:bg-card sm:p-9 " +
                  (i === services.length - 1 ? "sm:col-span-2" : "")
                }
              >
                <span className="font-serif text-sm font-semibold tracking-[0.2em] text-bronze">{service.number}</span>
                <h3 className="mt-5 font-serif text-2xl font-medium text-foreground sm:text-[1.75rem]">{service.title}</h3>
                <p className="mt-3 max-w-md text-[0.95rem] leading-relaxed text-muted-foreground">{service.description}</p>
                <span
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 h-0.5 w-0 bg-bronze transition-[width] duration-500 group-hover:w-full"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
