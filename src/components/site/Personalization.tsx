import { images } from "@/lib/site-config";
import { SectionHeading } from "./SectionHeading";

const examples = [
  { title: "Names & dates", text: "The essential record, lettered to remain clear for generations." },
  { title: "Engraving", text: "Inscriptions, verses, and epitaphs that say what matters most." },
  { title: "Artwork", text: "Carved and etched florals, scenes, and symbols with personal meaning." },
  { title: "Personalized designs", text: "Shapes, finishes, and details chosen to reflect one life." },
  { title: "Pet memorials", text: "Smaller stones that honor a faithful companion." },
];

export function Personalization() {
  return (
    <section aria-labelledby="personalize-heading" className="bg-charcoal py-24 text-charcoal-foreground sm:py-32">
      <div className="container-site grid items-center gap-14 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-6">
          <SectionHeading
            eyebrow="Personalization"
            tone="light"
            title="A Tribute as Individual as the Life It Honors"
            description="No two people are alike, and a memorial need not be either. Small choices — a name lettered a certain way, a favorite flower carved into the stone, a mountain view etched in granite — turn a marker into a portrait."
          />
          <dl className="mt-10 grid gap-x-8 gap-y-6 sm:grid-cols-2">
            {examples.map((ex) => (
              <div key={ex.title} className="border-l border-bronze/60 pl-4">
                <dt className="font-serif text-xl font-medium text-charcoal-foreground">{ex.title}</dt>
                <dd className="mt-1 text-sm leading-relaxed text-charcoal-foreground/70">{ex.text}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="lg:col-span-6">
          <img
            src={images.personalize.src}
            alt={images.personalize.alt}
            width={images.personalize.width}
            height={images.personalize.height}
            loading="lazy"
            decoding="async"
            className="aspect-[4/3] w-full object-cover shadow-lift"
          />
        </div>
      </div>
    </section>
  );
}
