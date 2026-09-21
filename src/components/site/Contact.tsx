import { Clock, MapPin, Navigation, Phone } from "lucide-react";
import { business, directionsUrl } from "@/lib/site-config";
import { ButtonLink } from "./Button";
import { ContactForm } from "./ContactForm";
import { SectionHeading } from "./SectionHeading";

/*
 * CONTACT DETAILS: phone, address, and hours all come from
 * src/lib/site-config.ts. Hours shown are the current Google-listed hours
 * used for this demo — CONFIRM WITH THE BUSINESS BEFORE LAUNCH.
 */
export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="bg-stone py-24 sm:py-32">
      <div className="container-site">
        <SectionHeading
          eyebrow="Contact"
          title="Visit, Call, or Send a Note"
          description="The showroom is on West First Street in downtown Blue Ridge. A phone call is the quickest way to reach us."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <address className="not-italic">
              <p className="font-serif text-3xl font-medium text-foreground">{business.name}</p>

              <div className="mt-8 space-y-7">
                <div className="flex gap-4">
                  <MapPin className="mt-1 size-5 shrink-0 text-bronze" strokeWidth={1.6} aria-hidden="true" />
                  <div>
                    <p className="text-sm font-semibold tracking-wide text-muted-foreground uppercase">Address</p>
                    <p className="mt-1 text-lg leading-snug">
                      {business.address.street}
                      <br />
                      {business.address.city}, {business.address.state} {business.address.zip}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Phone className="mt-1 size-5 shrink-0 text-bronze" strokeWidth={1.6} aria-hidden="true" />
                  <div>
                    <p className="text-sm font-semibold tracking-wide text-muted-foreground uppercase">Phone</p>
                    <a href={business.phoneTel} className="focus-ring mt-1 inline-block text-lg font-medium hover:text-bronze">
                      {business.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Clock className="mt-1 size-5 shrink-0 text-bronze" strokeWidth={1.6} aria-hidden="true" />
                  <div className="w-full">
                    <p className="text-sm font-semibold tracking-wide text-muted-foreground uppercase">Hours</p>
                    <dl className="mt-2 max-w-xs divide-y divide-border text-[0.95rem]">
                      {business.hours.map((h) => (
                        <div key={h.days} className="flex justify-between gap-6 py-2">
                          <dt className="text-muted-foreground">{h.days}</dt>
                          <dd className="font-medium">{h.time}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>
              </div>
            </address>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={business.phoneTel} variant="primary" size="lg">
                <Phone className="size-4" aria-hidden="true" />
                Call Now
              </ButtonLink>
              <ButtonLink href={directionsUrl} target="_blank" rel="noopener noreferrer" variant="outline" size="lg">
                <Navigation className="size-4" aria-hidden="true" />
                Get Directions
              </ButtonLink>
            </div>
          </div>

          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
