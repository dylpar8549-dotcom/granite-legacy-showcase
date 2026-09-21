import { SectionHeading } from "./SectionHeading";

/*
 * Conceptual website flow — confirm actual process with business before launch.
 */
const steps = [
  {
    title: "Share Your Ideas",
    text: "Tell us about the person you are remembering, and anything you already have in mind.",
  },
  {
    title: "Explore Your Options",
    text: "Look at memorial styles, materials, and design elements that fit the setting and your wishes.",
  },
  {
    title: "Personalize the Memorial",
    text: "Choose the lettering, artwork, and details that make the memorial truly theirs.",
  },
  {
    title: "Create a Lasting Tribute",
    text: "The memorial is crafted in stone — a place for family to return to for generations.",
  },
];

export function Process() {
  return (
    <section aria-labelledby="process-heading" className="bg-background py-24 sm:py-32">
      <div className="container-site">
        <SectionHeading
          align="center"
          eyebrow="How It Works"
          title="A Simple, Unhurried Path"
          description="A general look at how families typically move from a first conversation to a finished memorial."
        />
        <ol className="relative mt-16 grid gap-10 md:grid-cols-4 md:gap-8">
          <span aria-hidden="true" className="absolute left-0 right-0 top-6 hidden h-px bg-border md:block" />
          {steps.map((step, i) => (
            <li key={step.title} className="relative flex gap-5 md:flex-col md:gap-0">
              <span className="relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full border border-bronze bg-background font-serif text-lg font-semibold text-bronze">
                {i + 1}
              </span>
              <div className="md:mt-7">
                <h3 className="font-serif text-2xl font-medium text-foreground">{step.title}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-muted-foreground">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
