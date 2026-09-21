import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/site/About";
import { Contact } from "@/components/site/Contact";
import { Gallery } from "@/components/site/Gallery";
import { Hero } from "@/components/site/Hero";
import { Personalization } from "@/components/site/Personalization";
import { Process } from "@/components/site/Process";
import { Reviews } from "@/components/site/Reviews";
import { Services } from "@/components/site/Services";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { business } from "@/lib/site-config";

const title = "Neal & Whitener Monument Co. | Custom Memorials & Headstones in Blue Ridge, GA";
const description =
  "Neal & Whitener Monument Co. (Whitener Monument Co.) is a local monument maker at 250 W First St, Blue Ridge, GA. Custom granite memorials, headstones, markers and engraving. Call (706) 632-2323.";

/*
 * LocalBusiness structured data — uses only verified public listing details
 * (name, address, phone, hours). Confirm all values before launch.
 */
const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: business.name,
  alternateName: business.alternateName,
  description: "Monument maker and memorial business in Blue Ridge, Georgia.",
  telephone: business.phoneE164,
  address: {
    "@type": "PostalAddress",
    streetAddress: business.address.street,
    addressLocality: business.address.city,
    addressRegion: business.address.state,
    postalCode: business.address.zip,
    addressCountry: "US",
  },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "17:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "09:00", closes: "12:00" },
  ],
};

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      /* Private sales demo — keep out of search engines. */
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(localBusinessJsonLd) }],
  }),
});

function Index() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Personalization />
        <WhyChooseUs />
        <Reviews />
        <Process />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
