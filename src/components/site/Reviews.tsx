import { Star } from "lucide-react";
import { business } from "@/lib/site-config";
import { ButtonLink } from "./Button";

/*
 * No individual reviews are quoted here — only the public rating summary.
 * REVIEW LINK: business.reviewUrl in src/lib/site-config.ts is a placeholder
 * ("#") until the verified Google review URL is supplied.
 */
export function Reviews() {
  const isPlaceholder = business.reviewUrl === "#";

  return (
    <section aria-labelledby="reviews-heading" className="bg-stone py-24 sm:py-28">
      <div className="container-site">
        <div className="mx-auto max-w-3xl border border-border bg-background px-6 py-14 text-center shadow-soft sm:px-14">
          <p className="eyebrow">Google Reviews</p>
          <h2 id="reviews-heading" className="mt-4 font-serif text-4xl font-medium text-balance sm:text-5xl">
            Trusted by Families in the Blue Ridge Area
          </h2>

          <div className="mt-10 flex flex-col items-center gap-3">
            <div className="flex items-center gap-1 text-bronze" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-6 fill-current" strokeWidth={1.2} />
              ))}
            </div>
            <p className="font-serif text-6xl font-medium leading-none text-foreground">
              {business.rating.value}
              <span className="text-2xl text-muted-foreground"> / {business.rating.outOf}</span>
            </p>
            <p className="text-sm tracking-wide text-muted-foreground">
              Based on {business.rating.count} Google reviews
              <span className="sr-only">, rated {business.rating.value} out of {business.rating.outOf}</span>
            </p>
          </div>

          <div className="mt-10">
            <ButtonLink
              href={business.reviewUrl}
              variant="primary"
              size="lg"
              {...(isPlaceholder
                ? { "aria-describedby": "review-link-note", onClick: (e) => e.preventDefault() }
                : { target: "_blank", rel: "noopener noreferrer" })}
            >
              See Reviews
            </ButtonLink>
            {isPlaceholder && (
              <p id="review-link-note" className="mt-3 text-xs text-muted-foreground">
                Link to the Google listing to be added.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
