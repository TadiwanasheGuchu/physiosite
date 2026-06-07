import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Story | Sossus Physiotherapy",
  description:
    "Healing as a landscape — the story of Sossus Physiotherapy, bridging German clinical precision with the warmth of Namibia.",
};

export default function AboutPage() {
  return (
    <>
      {/* ── Hero: The Horizon ── */}
      <section className="relative h-[819px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSWiFccNheswuK9dtUacbwajKj0iQqGE6nN3T83QkpXyD-kBZ2K2_-sbStprufufXwO7f0ov_mcXfYv_exyckIts4dU5fc-tk_2cmXwbFJdtryaYr3KxrEgjhCxXjqpgF9JuBWb6zwIq78JYlUBuxriQLExwGICL4r-of7qWquGQxITJApTnJVYNn9Cpi8Wulapc1YARxmn1F4f1qhTZrUK80HKjWsBb5TRpZK0HHZM4GAKOZDx6GhhlVBTc0JRNqEq0jNzZ3TTbsk"
            alt="Namib desert at sunrise"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/40 to-transparent" />
        </div>
        <div className="relative z-10 px-gutter max-w-container-max mx-auto w-full">
          <div className="max-w-2xl">
            <span className="font-label-md text-label-md text-primary uppercase tracking-[0.2em] mb-sm block">
              Our Story
            </span>
            <h1 className="font-display-lg text-display-lg text-on-surface mb-md">
              Healing as a <br />
              <span className="italic text-primary">Landscape.</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg">
              At Sossus Physiotherapy, we bridge the precision of German
              clinical excellence with the profound, rhythmic warmth of
              Namibia&apos;s healing spirit.
            </p>
          </div>
        </div>
      </section>

      {/* ── Windhoek Foundation ── */}
      <section className="py-xl px-gutter max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-md items-center">
          <div className="md:col-span-5 space-y-md">
            <h2 className="font-headline-lg text-headline-lg text-on-surface">
              The Windhoek Foundation
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Founded in the heart of Windhoek, Sossus Physiotherapy was born
              from a singular vision: medical care should feel like a sanctuary,
              not a clinic. We call this &lsquo;Kinetic Hospitality.&rsquo;
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Our space in the capital serves as a bridge — a place where the
              rigid standards of international orthopedics meet the intuitive,
              expansive comfort of Namibian tradition. It is here that we
              developed our signature approach to rehabilitation, focusing on
              the movement of the whole person rather than just the recovery of
              a joint.
            </p>
            <div className="pt-md">
              <div className="flex items-center gap-sm group cursor-pointer">
                <div className="w-12 h-12 rounded-full border border-primary flex items-center justify-center group-hover:bg-primary transition-all duration-300">
                  <span className="material-symbols-outlined text-primary group-hover:text-on-primary">
                    play_arrow
                  </span>
                </div>
                <span className="font-label-md text-label-md text-primary">
                  View our philosophy film
                </span>
              </div>
            </div>
          </div>

          <div className="md:col-span-7">
            <div className="grid grid-cols-2 gap-md h-[500px]">
              <div className="rounded-xl overflow-hidden shadow-lg bento-card">
                <img
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZfWLzNutC85s2_zxVT2BDuhRK8KVVs7BeCMpdqlz6vLZS2xc1YOy7rsxWlZuM8mZxEL6DELHRzWmiO_z8_CMKlF07I8xn4Usv6T7Lgj-wVcIgfgseVgxexSDUN2V5l4YT8QSePbs5J0CKOl9FucN4KUWZmijn_nN_0Ia-MPdl8ugeEBlYMV9_DYDfOyvxXCTXGdw_cNCU_eSfpRgd0zmpGFSJeCwmQ2kVwwHW6t4cFCbYQQu59h-7Si56w7bvou2sBiSo2SNqhTBc"
                  alt="Windhoek clinic interior"
                />
              </div>
              <div className="space-y-md h-full flex flex-col">
                <div className="h-1/2 rounded-xl overflow-hidden bento-card">
                  <img
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbG-aJWjpOCRRa95yniXCPvkou9000x0QqpKCk1i3cYg2L_G2vb5l7BKPcvzwPn0j2BWdeZsXHnRzt5Fg5axSiv-soTRTexqI5wyPJAimVL8vPyI67pIYnZgHpZIWBnX2y8KDOMxPJr_f3E61L5y-9eSSDi7Z8rYl65Yjl_aEAwrMV-3x5as0qI0JYpF1OwwdKibVGEWSTd5GF9Hrsc3N-esf1xHugky7Oga2pgMsO-uLM8dJHRinTG01zOw_hyPnPpLRIkI161rPW"
                    alt="Treatment room with desert garden view"
                  />
                </div>
                <div className="flex-grow bg-secondary-container rounded-xl p-md flex flex-col justify-end bento-card">
                  <span className="material-symbols-outlined text-primary mb-sm">
                    location_on
                  </span>
                  <h3 className="font-headline-md text-headline-md text-on-secondary-container">
                    Windhoek Central
                  </h3>
                  <p className="font-body-md text-body-md text-on-secondary-container/80">
                    Where our journey began.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Desert-Modern Approach ── */}
      <section className="py-xl bg-surface-container-low">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="text-center mb-lg">
            <h2 className="font-headline-lg text-headline-lg mb-sm">
              The Desert-Modern Approach
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
              A framework for recovery that respects the pace of the body and
              the precision of science.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-md md:h-[600px]">
            {/* 2×2 — German Precision */}
            <div className="md:col-span-2 md:row-span-2 bg-surface p-lg rounded-xl flex flex-col justify-between border border-on-surface/5 bento-card">
              <div>
                <span className="material-symbols-outlined text-primary text-4xl mb-md">
                  precision_manufacturing
                </span>
                <h3 className="font-headline-md text-headline-md mb-md">
                  German Precision
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  We employ evidence-based protocols and the latest diagnostic
                  technology sourced from leading European institutes. Every
                  treatment plan is a masterpiece of clinical accuracy.
                </p>
              </div>
              <div className="mt-lg">
                <img
                  className="rounded-lg h-48 w-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9sq2yEQDo4wHrOJw4iVxSW4NvijMtD5A2tElhBcr597Dd3ix6UtLZDpRSnv43Hsp85K9G4LjHiVIKLuVbQHau43O9jLT1Ff60QkHjtkDBP---HP7hY4yXc-61Lw6cRaZAtiEdkazTlbYgE2Q_pN9yqY8AkD3HTHz9WJE2XFBYlZT7__kukE3_vOF1jvCRCB7OpLZoplvLAfvucMVb4yep5Xfe-YNQ6hM_zUVR4F2IEb_0BicXedub-U30AaDnXeXnRKh8f01aClpH"
                  alt="Medical diagnostic equipment"
                />
              </div>
            </div>
            {/* 2×1 — Rhythmic Healing (copper) */}
            <div className="md:col-span-2 bg-primary text-on-primary p-lg rounded-xl bento-card">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-headline-md text-headline-md mb-sm">
                    Rhythmic Healing
                  </h3>
                  <p className="font-body-md text-body-md opacity-90">
                    Inspired by the pulse of the Namib, our manual therapies
                    focus on restoring the natural flow of movement, reducing
                    inflammation through specialized soft-tissue techniques.
                  </p>
                </div>
                <span className="material-symbols-outlined text-4xl">
                  waves
                </span>
              </div>
            </div>
            {/* 1×1 — Atmospheric Care */}
            <div className="md:col-span-1 bg-surface-container-highest p-lg rounded-xl bento-card">
              <span className="material-symbols-outlined text-primary mb-sm">
                wb_sunny
              </span>
              <h4 className="font-label-md text-label-md uppercase mb-xs">
                Atmospheric Care
              </h4>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Light, space, and sound are as vital to our practice as
                exercise.
              </p>
            </div>
            {/* 1×1 — Holistic Luxury */}
            <div className="md:col-span-1 bg-surface-container-high p-lg rounded-xl bento-card">
              <span className="material-symbols-outlined text-primary mb-sm">
                spa
              </span>
              <h4 className="font-label-md text-label-md uppercase mb-xs">
                Holistic Luxury
              </h4>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Restoring dignity and comfort to the rehabilitative process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Meet the Team ── */}
      <section className="py-xl px-gutter max-w-container-max mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-lg gap-md">
          <div className="max-w-xl">
            <span className="font-label-md text-label-md text-primary uppercase tracking-widest block mb-sm">
              The Curators
            </span>
            <h2 className="font-headline-lg text-headline-lg">
              Practitioners of the Craft
            </h2>
          </div>
          <div className="flex gap-sm">
            <button className="w-12 h-12 rounded-full border border-outline flex items-center justify-center hover:bg-surface-variant transition-colors">
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
            <button className="w-12 h-12 rounded-full border border-outline flex items-center justify-center hover:bg-surface-variant transition-colors">
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
          {[
            {
              src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAQQ0R__6EFzOpRQdVC4JRhFA-uF4EzTbu31u4dj1HT5-qUASoxkcFjds4nWa-4s_-AcTFE4LViFZc-gKG_Pn7vMWZw12nPue4H7yjh9YuR0c4_DWs7WWSm2sctiZwRIf6JvPxPYnOxphTHKL-Z4QQ1b-s7gkhjvL7Lf6FKpIrqdSHhZ99AP0FyHE1FzZF4zpWw2tOtqO5YhHwuQqDfrdFcM67rpr-uXmas8yFKXpO13aukn7f7yvvBgqEPp0pZu-wwiORjtrBkBxOK",
              name: "Dr. Elina Shikongo",
              role: "Lead Clinical Director",
              quote: "Movement is the silent dialogue between the body and the soul.",
            },
            {
              src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC7-TzqmVIkidGKdb9w7_D63PADSRv0G99uRLyD3l4hFZlT-wdBTdbEroxQ9odrJEX4w1_zMSTCtuygEUfHZ25Ii673VW57RdXkb2p6-olZIDpIRVxfWn-2lb8XLIaJU0Za4gWAOeL4KuQdREkXoBI88xyV8P_1bxdIzNofN252rnHfpBAGi2cj6cHKzurwlO1PwrPPIzBWde4HbYVgmt1FSI_bHMhNyksujEltK6vh8BTMStWQ3VYbZWzNujTEFkvIqihHLGutaC_P",
              name: "Johann Pretorius",
              role: "Senior Orthopedic Specialist",
              quote: "We refine mechanics to liberate the human spirit.",
            },
            {
              src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDxkmM08B-UAiqBl9isaWG_h-OgcZNv9KbA6t39EUMrdbY01wKxj-zdfePsgN3GWmkVWSomR72HPfno4wNPbPjmt69XVVrvGDM_rru1NzryXGbVVkB4NlareuZNqOV819pos7zr7hpHBUn8-dbNDtKP0uCV0fE-XQssUGPBEAzajGD-dUo4QHAezt5_hWZdsA9kGK101sbRC-DrEh2g4nI_sYOlglnTgxWJzG9w05Uo-KsudCRSw3lUvJNtzxmefh6GMg55BDmSsV90",
              name: "Sarah Nel",
              role: "Rehabilitation Coordinator",
              quote: "Connecting patients with the rhythm of their own recovery.",
            },
          ].map(({ src, name, role, quote }) => (
            <div key={name} className="group">
              <div className="aspect-[4/5] rounded-xl overflow-hidden mb-md relative">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src={src}
                  alt={name}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <h3 className="font-headline-md text-headline-md mb-xs">{name}</h3>
              <p className="font-label-md text-label-md text-primary uppercase mb-sm">
                {role}
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant italic">
                &ldquo;{quote}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Dark CTA ── */}
      <section className="py-xl">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="bg-on-surface text-surface rounded-2xl p-lg md:p-xl flex flex-col md:flex-row items-center justify-between gap-lg relative overflow-hidden">
            {/* Background desert image at 10% */}
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
              <img
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXjTwn9TQZxeK4R_iLL3l0C5z4IwFGAQr2YiJAu4MXXJ09381b1XLTNKgFkwDWnfAMf2oTjhr0igR-Veo7NSdwYMEWU_AYJjdoOm7UDLofzEipJy3w4dydLuOnzGVYFM3Rw0BnSZfw-wnNYSABPHNcyAi_mXgQ8YMeqmxhWh4hPKit1ftxliy6Jih4-Ai5UGLhgO9WobqST5xePiYUjPREny3xD4zSMaUA061yWeQvC4Cad10w_JqeXvSszeOIMc7XQHbIQ01cpnu3t"
                alt=""
              />
            </div>
            <div className="relative z-10 max-w-xl">
              <h2 className="font-headline-lg text-headline-lg text-surface-container-lowest mb-md">
                Begin your movement <br />
                <span className="text-primary-fixed-dim italic">
                  masterpiece.
                </span>
              </h2>
              <p className="font-body-lg text-body-lg opacity-80">
                Our clinic is more than a destination; it&apos;s a departure
                from the clinical standard. Schedule your initial assessment
                today.
              </p>
            </div>
            <div className="relative z-10 flex flex-col sm:flex-row gap-md">
              <Link
                href="/book"
                className="bg-primary text-on-primary px-lg py-lg rounded-full font-label-md text-label-md hover:scale-105 transition-transform duration-300 text-center"
              >
                Book Initial Assessment
              </Link>
              <Link
                href="/contact"
                className="border border-surface/30 text-surface px-lg py-lg rounded-full font-label-md text-label-md hover:bg-surface/10 transition-colors duration-300 text-center"
              >
                Speak with our Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
