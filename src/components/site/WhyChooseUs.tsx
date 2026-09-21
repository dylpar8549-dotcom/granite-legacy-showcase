import { Compass, Gem, HandHeart, Ruler } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

/*
 * These themes reflect what customers commonly mention in public feedback.
 * They are written as descriptions, not as official company slogans.
 */
const values = [
  {
    icon: HandHeart,
    title: "Personal Service",
    text: "A local business where families speak directly with the people who will make their memorial.",
  },
  {
    icon: Ruler,
    title: "Attention to Detail",
    text: "Lettering, spacing, and finish are the difference between a marker and a memorial worth returning to.",
  },
  {
    icon: Compass,
    title: "Thoughtful Guidance",
    text: "Clear, patient help with decisions many families are making for the first time.",
  },
  {
    icon: Gem,
    title: "Quality Craftsmanship",
    text: "Granite memorials made to stand in the North Georgia weather for generations.",
  },
];

export function WhyChooseUs() {
  return (
    <section aria-labelledby="why-heading" className="bg-background py-24 sm:py-32">
      <div className="container-site">
        <SectionHeading
          align="center"
          eyebrow="Why Families Choose a Local Monument Maker"
          title="Care in Every Step"
        />
        <ul className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map(({ icon: Icon, title, text }) => (
            <li
              key={title}
              className="group border border-border bg-card p-8 transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:border-bronze/50 hover:shadow-soft motion-reduce:transform-none"
            >
              <span className="flex size-12 items-center justify-center rounded-full bg-stone text-bronze transition-colors group-hover:bg-bronze group-hover:text-accent-foreground">
                <Icon className="size-5" strokeWidth={1.6} aria-hidden="true" />
              </span>
              <h3 className="mt-6 font-serif text-2xl font-medium text-foreground">{title}</h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-muted-foreground">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
