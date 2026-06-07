"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { FormEvent } from "react";

export default function ContactPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [inquiry, setInquiry] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, inquiry, message }),
    });

    setLoading(false);

    if (!res.ok) {
      const body = await res.json().catch(() => ({}));
      setError(body.error ?? "Something went wrong. Please try again.");
      return;
    }

    router.push("/contact/sent");
  }

  return (
    <>
      <div className="max-w-container-max mx-auto px-gutter pt-lg pb-xl">
        {/* ── Header ── */}
        <div className="mb-lg max-w-2xl">
          <h1 className="font-display-lg text-display-lg text-primary mb-md">
            Our Clinics
          </h1>
          <p className="font-body-lg text-body-lg text-secondary mb-lg">
            Rooted in the tranquility of the Namib, our Windhoek sanctuary
            offers precision healing and desert-inspired hospitality. Find us at
            the heart of the capital.
          </p>
        </div>

        {/* ── Bento Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-md">

          {/* Main Location Card — 8-col */}
          <div className="md:col-span-8 bento-card rounded-xl p-lg flex flex-col md:flex-row gap-lg bg-secondary-container/20 border border-outline/15">
            <div className="flex-1 space-y-md">
              <div className="flex items-center gap-sm text-primary">
                <span
                  className="material-symbols-outlined"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  location_on
                </span>
                <h2 className="font-headline-md text-headline-md">
                  Windhoek Central Clinic
                </h2>
              </div>
              <p className="font-body-md text-on-surface-variant leading-relaxed">
                Independence Avenue, Block C, Suite 402
                <br />
                Windhoek, Namibia
              </p>
              <div className="pt-sm space-y-base">
                <div className="flex justify-between border-b border-outline-variant/30 pb-xs">
                  <span className="font-medium">Mon – Fri</span>
                  <span className="text-secondary">08:00 – 17:00</span>
                </div>
                <div className="flex justify-between border-b border-outline-variant/30 pb-xs">
                  <span className="font-medium">Saturday</span>
                  <span className="text-secondary">09:00 – 13:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Sunday</span>
                  <span className="text-secondary italic">Closed</span>
                </div>
              </div>
              <div className="pt-md">
                <a
                  href="/book"
                  className="w-full md:w-auto bg-primary text-on-primary px-lg py-md rounded-lg font-label-md text-label-md hover:bg-primary-container transition-all flex items-center justify-center gap-sm group"
                >
                  Book Your Session
                  <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>
            <div className="flex-1 min-h-[300px] rounded-lg overflow-hidden relative">
              <img
                className="absolute inset-0 w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3b_98iycLylI6CAZArrCyQGiARoZLczoYZa3H0QzY-5TD83C_8L8i8pK_HKmSf8MKX4Onyxv_o5Ww8LDQApEfhggvqwSBxmsj8G56Dw-I7bWPsMezP09QzeIrYXIETf8R_pT4DpvfjMLEsdjiv83LNLcpDE2pQ3RI5jvPAfFnt4A-9OMKYaztjjlm6RnaO0ANCslIFlPfEXfGGrQlSpWHZ1YkGLHdpXbk159AAZOoWldmB7y14RQ5RzYs9cAb7Gh31yaAOMHrTUJg"
                alt="Windhoek Central Clinic interior"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
            </div>
          </div>

          {/* Contact Info Card — 4-col */}
          <div className="md:col-span-4 bento-card rounded-xl p-lg space-y-lg flex flex-col justify-center bg-secondary-container/20 border border-outline/15">
            <div>
              <h3 className="font-headline-md text-headline-md text-primary mb-md">
                Get in Touch
              </h3>
              <p className="font-body-md text-secondary">
                Immediate inquiries or specialized requests.
              </p>
            </div>
            <div className="space-y-md">
              <a
                href="tel:+264812345678"
                className="flex items-center gap-md group"
              >
                <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined">call</span>
                </div>
                <div>
                  <p className="text-xs font-label-md text-label-md uppercase tracking-widest text-secondary">
                    Phone
                  </p>
                  <p className="font-body-lg text-body-lg font-medium">
                    +264 81 234 5678
                  </p>
                </div>
              </a>
              <a
                href="mailto:care@sossusphysio.na"
                className="flex items-center gap-md group"
              >
                <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <div>
                  <p className="text-xs font-label-md text-label-md uppercase tracking-widest text-secondary">
                    Email
                  </p>
                  <p className="font-body-lg text-body-lg font-medium">
                    care@sossusphysio.na
                  </p>
                </div>
              </a>
            </div>
            <div className="pt-md border-t border-outline-variant/30">
              <div className="flex gap-sm items-center">
                <div className="w-2 h-2 rounded-full bg-primary-container animate-pulse" />
                <p className="text-xs font-label-md text-label-md text-on-surface-variant">
                  Emergency On-Call: +264 81 999 0000
                </p>
              </div>
            </div>
          </div>

          {/* Inquiry Form — 7-col */}
          <div className="md:col-span-7 bento-card rounded-xl p-lg bg-secondary-container/20 border border-outline/15">
            <h3 className="font-headline-md text-headline-md text-primary mb-lg">
              General Inquiry
            </h3>
            <form onSubmit={handleSubmit} className="space-y-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
                <div className="relative input-underline">
                  <input
                    className="w-full bg-transparent border-0 border-b border-secondary/30 py-sm focus:ring-0 placeholder:text-secondary/50 font-body-md outline-none"
                    placeholder="Full Name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="relative input-underline">
                  <input
                    className="w-full bg-transparent border-0 border-b border-secondary/30 py-sm focus:ring-0 placeholder:text-secondary/50 font-body-md outline-none"
                    placeholder="Email Address"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="relative input-underline">
                <select
                  className="w-full bg-transparent border-0 border-b border-secondary/30 py-sm focus:ring-0 text-secondary font-body-md appearance-none outline-none"
                  value={inquiry}
                  onChange={(e) => setInquiry(e.target.value)}
                >
                  <option value="" disabled>
                    Nature of Inquiry
                  </option>
                  <option value="Sports Injury">Sports Injury</option>
                  <option value="Post-Surgery Rehab">Post-Surgery Rehab</option>
                  <option value="Chronic Pain">Chronic Pain</option>
                  <option value="General Question">General Question</option>
                </select>
              </div>
              <div className="relative input-underline">
                <textarea
                  className="w-full bg-transparent border-0 border-b border-secondary/30 py-sm focus:ring-0 placeholder:text-secondary/50 font-body-md resize-none outline-none"
                  placeholder="Your Message"
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>

              {error && (
                <p className="text-error font-body-md text-sm">{error}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="bg-secondary text-on-secondary px-xl py-md rounded-lg font-label-md text-label-md hover:bg-on-surface transition-all disabled:opacity-60 disabled:cursor-not-allowed flex items-center gap-sm"
              >
                {loading ? (
                  <>
                    <span className="material-symbols-outlined animate-spin text-[18px]">progress_activity</span>
                    Sending…
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </div>

          {/* Map — 5-col */}
          <div className="md:col-span-5 rounded-xl overflow-hidden relative min-h-[400px]">
            <div className="absolute inset-0 bg-secondary-container/20">
              <div className="w-full h-full bg-surface-container-high relative overflow-hidden">
                <img
                  className="w-full h-full object-cover grayscale opacity-60"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiPWq6YuLgIx6FmxI7rSpjOYFGMOVAvhTPKauTlTG9iQ4RYPGCFztU32ZcZQ9XqU_Pjwv9Q5-w8mSOowNUXYsB_hMQifg8yxBXN8aePFuwVMMoVSLNcE5BDt46umVTgjVjG31zKcSCmo6aaR2Foautz5ZIKIMt-faBsNKM3-6iigAkFzozykFR-gjVKk0SJMD8sEePN5kCKURYOUCZCf0zEjii5BWxV9Z8kT5KTJ4w6Oheo0w9sBJXBdO0tqYGRcx6eg4YCwHqswIK"
                  alt="Windhoek map"
                />
                {/* Location pin */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="w-12 h-12 bg-primary rounded-full animate-ping absolute opacity-20" />
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg relative z-10">
                      <span
                        className="material-symbols-outlined text-on-primary"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        location_on
                      </span>
                    </div>
                  </div>
                </div>
                {/* Zoom controls */}
                <div className="absolute bottom-md right-md flex flex-col gap-xs">
                  <button className="w-10 h-10 bg-surface rounded shadow-md flex items-center justify-center text-primary hover:bg-secondary-container transition-colors">
                    <span className="material-symbols-outlined">add</span>
                  </button>
                  <button className="w-10 h-10 bg-surface rounded shadow-md flex items-center justify-center text-primary hover:bg-secondary-container transition-colors">
                    <span className="material-symbols-outlined">remove</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
