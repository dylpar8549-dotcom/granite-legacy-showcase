/**
 * ============================================================================
 *  SITE CONFIGURATION — Neal & Whitener Monument Co. (WEBSITE CONCEPT DEMO)
 * ============================================================================
 *
 *  This is a demonstration website, not the business's official website.
 *  Everything a real client would need to change lives in this one file:
 *  phone number, address, hours, review link, social links, and gallery
 *  photographs. Update values here and the whole site follows.
 *
 *  Information below reflects the public Google business listing at the time
 *  the demo was created. CONFIRM ALL DETAILS WITH THE BUSINESS BEFORE LAUNCH.
 * ============================================================================
 */

import heroImage from "@/assets/hero-memorial.jpg";
import aboutImage from "@/assets/about-craftsman.jpg";
import personalizeImage from "@/assets/personalize-samples.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery7 from "@/assets/gallery-7.jpg";
import gallery8 from "@/assets/gallery-8.jpg";

/* ---------------------------------------------------------------------------
 * BUSINESS IDENTITY
 * ------------------------------------------------------------------------- */
export const business = {
  name: "Neal & Whitener Monument Co.",
  alternateName: "Whitener Monument Co.",
  /** Publicly listed owner/manager. Confirm before launch. */
  contactPerson: "James Whitener",

  /* --- PHONE — confirm before launch --------------------------------------- */
  phoneDisplay: "(706) 632-2323",
  phoneTel: "tel:7066322323",
  phoneE164: "+17066322323",

  /* --- ADDRESS — confirm before launch ------------------------------------- */
  address: {
    street: "250 W First St",
    city: "Blue Ridge",
    state: "GA",
    zip: "30513",
  },

  /* --- HOURS — current Google-listed hours used for this demo. -------------
   *     CONFIRM WITH THE BUSINESS OWNER BEFORE LAUNCH.                        */
  hours: [
    { days: "Monday – Friday", time: "9:00 AM – 5:00 PM" },
    { days: "Saturday", time: "9:00 AM – 12:00 PM" },
    { days: "Sunday", time: "Closed" },
  ],

  /* --- GOOGLE RATING — snapshot of public listing at time of demo. --------- */
  rating: { value: "4.9", outOf: "5", count: 34 },

  /* --- REVIEW LINK — PLACEHOLDER. -----------------------------------------
   *     Replace with the business's verified Google review URL before launch.
   *     Leave as "#" to keep the button as an inert, clearly-editable
   *     placeholder.                                                          */
  reviewUrl: "#",

  /* --- SOCIAL LINKS — PLACEHOLDERS. ---------------------------------------
   *     No social accounts were verified for this demo. Add verified URLs
   *     here and the footer will display them; leave empty to hide.          */
  social: [] as { label: string; url: string }[],
} as const;

export const fullAddress = `${business.address.street}, ${business.address.city}, ${business.address.state} ${business.address.zip}`;

/** Reliable Google Maps directions URL generated from the street address. */
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(fullAddress)}`;

/* ---------------------------------------------------------------------------
 * NAVIGATION
 * ------------------------------------------------------------------------- */
export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Our Work", href: "#our-work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

/* ---------------------------------------------------------------------------
 * IMAGES — all photography below is DEMO stock imagery.
 * Replace each import at the top of this file with photographs supplied by
 * the business. Keep width/height so the layout does not shift while loading.
 * ------------------------------------------------------------------------- */
export const images = {
  hero: {
    src: heroImage,
    alt: "Polished gray granite upright memorial in a peaceful cemetery with misty mountains at sunrise",
    width: 1920,
    height: 1088,
  },
  about: {
    src: aboutImage,
    alt: "Craftsman's hands inspecting a carved rose on a dark granite memorial in a stone workshop",
    width: 1200,
    height: 1504,
  },
  personalize: {
    src: personalizeImage,
    alt: "Granite color samples beside a pencil sketch of a floral carving on a design workbench",
    width: 1408,
    height: 1056,
  },
};

export type GalleryCategory = "Memorials" | "Custom Engraving" | "Monuments" | "Detail & Craftsmanship";

export interface GalleryItem {
  src: string;
  alt: string;
  width: number;
  height: number;
  category: GalleryCategory;
  /** Portrait images take a taller cell in the gallery layout. */
  tall?: boolean;
}

/* --- GALLERY IMAGES — replace with the business's own photographs. -------- */
export const galleryItems: GalleryItem[] = [
  {
    src: gallery1,
    alt: "Red-brown granite upright memorial with a curved top on a matching base at sunset",
    width: 1200,
    height: 1504,
    category: "Memorials",
    tall: true,
  },
  {
    src: gallery2,
    alt: "Close-up of carved scrollwork and a dove motif in polished black granite",
    width: 1200,
    height: 912,
    category: "Detail & Craftsmanship",
  },
  {
    src: gallery3,
    alt: "Flat bronze and granite grave marker with a vase of white flowers in a shaded lawn",
    width: 1200,
    height: 912,
    category: "Memorials",
  },
  {
    src: gallery4,
    alt: "Tall light gray granite monument with a carved cross and rock-pitched edges among trees",
    width: 1200,
    height: 1504,
    category: "Monuments",
    tall: true,
  },
  {
    src: gallery5,
    alt: "Etched mountain and pine landscape scene on a polished black granite panel",
    width: 1200,
    height: 912,
    category: "Custom Engraving",
  },
  {
    src: gallery6,
    alt: "Small gray granite pet memorial stone with a carved paw print among ferns",
    width: 1200,
    height: 912,
    category: "Memorials",
  },
  {
    src: gallery7,
    alt: "Stoneworker polishing a large slab of blue-gray granite in a sunlit workshop",
    width: 1200,
    height: 1504,
    category: "Detail & Craftsmanship",
    tall: true,
  },
  {
    src: gallery8,
    alt: "Polished mahogany granite memorial bench beneath a blooming dogwood tree",
    width: 1200,
    height: 912,
    category: "Monuments",
  },
];
