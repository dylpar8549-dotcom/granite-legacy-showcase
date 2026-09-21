import { CheckCircle2 } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Button } from "./Button";

/*
 * FORM / BACKEND CONNECTION:
 * This is a FRONT-END DEMO. Nothing is sent anywhere on submit.
 * To go live, replace handleSubmit with a call to the business's preferred
 * contact system (email service, CRM, or a server function).
 */
const interests = [
  "Memorial Information",
  "Custom Memorial",
  "Engraving / Artwork",
  "Pet Memorial",
  "General Question",
];

const fieldClass =
  "focus-ring w-full rounded-sm border border-input bg-background px-4 py-3 text-[0.95rem] text-foreground placeholder:text-muted-foreground/70 transition-colors hover:border-foreground/40 focus:border-bronze";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div role="status" aria-live="polite" className="flex h-full flex-col items-start justify-center border border-border bg-card p-8 sm:p-10">
        <CheckCircle2 className="size-8 text-bronze" strokeWidth={1.5} aria-hidden="true" />
        <h3 className="mt-5 font-serif text-3xl font-medium text-foreground">Thank you.</h3>
        <p className="mt-3 max-w-md leading-relaxed text-muted-foreground">
          This demo form is ready to be connected to the business&rsquo;s preferred contact system.
        </p>
        <Button variant="ghost" className="mt-6 px-0" onClick={() => setSubmitted(false)}>
          &larr; Back to form
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate={false} className="border border-border bg-card p-6 sm:p-10" aria-labelledby="form-heading">
      <h3 id="form-heading" className="font-serif text-3xl font-medium text-foreground">
        Request Information
      </h3>
      <p className="mt-2 text-sm text-muted-foreground">Share a few details and how to reach you.</p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Name
          </label>
          <input id="name" name="name" type="text" autoComplete="name" required className={fieldClass} />
        </div>
        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-medium">
            Phone
          </label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" className={fieldClass} />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium">
            Email
          </label>
          <input id="email" name="email" type="email" autoComplete="email" required className={fieldClass} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="interest" className="mb-2 block text-sm font-medium">
            What are you interested in?
          </label>
          <select id="interest" name="interest" defaultValue="" required className={fieldClass + " appearance-none bg-[length:1rem] bg-[right_1rem_center] bg-no-repeat pr-10"}
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 24 24' stroke='%236b665f' stroke-width='1.8'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")",
            }}
          >
            <option value="" disabled>
              Select an option
            </option>
            {interests.map((i) => (
              <option key={i} value={i}>
                {i}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className="mb-2 block text-sm font-medium">
            Message
          </label>
          <textarea id="message" name="message" rows={5} className={fieldClass + " resize-y"} />
        </div>
      </div>

      <Button type="submit" variant="primary" size="lg" className="mt-8 w-full sm:w-auto">
        Send Request
      </Button>
      <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
        For urgent needs, please call directly. Submitting this form does not create a commitment of any kind.
      </p>
    </form>
  );
}
