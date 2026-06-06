"use client";

import { useEffect, useRef } from "react";

export default function LegalPage() {
  const privacyRef = useRef<HTMLElement>(null);
  const dataRef = useRef<HTMLDivElement>(null);
  const securityRef = useRef<HTMLDivElement>(null);
  const termsRef = useRef<HTMLElement>(null);
  const sessionsRef = useRef<HTMLDivElement>(null);
  const liabilityRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sections = [
      { id: "privacy", ref: privacyRef },
      { id: "data-usage", ref: dataRef },
      { id: "security", ref: securityRef },
      { id: "terms", ref: termsRef },
      { id: "sessions", ref: sessionsRef },
      { id: "liability", ref: liabilityRef },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute("id");
          const link = document.querySelector(`aside a[href="#${id}"]`);
          if (entry.isIntersecting && link) {
            document.querySelectorAll("aside a").forEach((l) => {
              l.classList.remove("text-primary", "font-bold");
              l.classList.add("text-on-surface-variant");
            });
            link.classList.add("text-primary", "font-bold");
            link.classList.remove("text-on-surface-variant");
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach(({ ref }) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  function scrollTo(id: string) {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 120, behavior: "smooth" });
  }

  return (
    <div className="relative z-10 pt-lg pb-xl px-gutter max-w-container-max mx-auto">
      {/* ── Hero Header ── */}
      <header className="mb-xl max-w-3xl">
        <p className="text-primary font-label-md text-label-md uppercase tracking-widest mb-xs">
          Legal Integrity
        </p>
        <h1 className="font-display-lg text-display-lg text-on-surface mb-md">
          Privacy Policy &amp; Terms of Service
        </h1>
        <p className="font-headline-md text-headline-md text-on-surface-variant opacity-80 leading-relaxed italic">
          Our commitment to your healing journey includes the absolute
          protection of your data and clarity in our clinical relationship.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-lg items-start">

        {/* ── Sidebar ── */}
        <aside className="md:col-span-3 sticky top-32 space-y-md hidden md:block">
          <div className="p-md bg-secondary-container/30 rounded-xl border border-outline-variant/20">
            <h3 className="font-label-md text-label-md text-on-secondary-container mb-md border-b border-outline-variant/30 pb-xs">
              Contents
            </h3>
            <nav className="flex flex-col gap-sm">
              <a
                href="#privacy"
                onClick={(e) => { e.preventDefault(); scrollTo("privacy"); }}
                className="text-primary font-bold hover:translate-x-1 transition-transform inline-flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-[18px]">
                  policy
                </span>
                Privacy Policy
              </a>
              <a
                href="#data-usage"
                onClick={(e) => { e.preventDefault(); scrollTo("data-usage"); }}
                className="text-on-surface-variant hover:text-primary transition-colors pl-6"
              >
                Data Usage
              </a>
              <a
                href="#security"
                onClick={(e) => { e.preventDefault(); scrollTo("security"); }}
                className="text-on-surface-variant hover:text-primary transition-colors pl-6"
              >
                Clinical Security
              </a>
              <a
                href="#terms"
                onClick={(e) => { e.preventDefault(); scrollTo("terms"); }}
                className="text-primary font-bold hover:translate-x-1 transition-transform mt-md inline-flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-[18px]">
                  gavel
                </span>
                Terms of Service
              </a>
              <a
                href="#sessions"
                onClick={(e) => { e.preventDefault(); scrollTo("sessions"); }}
                className="text-on-surface-variant hover:text-primary transition-colors pl-6"
              >
                Session Protocols
              </a>
              <a
                href="#liability"
                onClick={(e) => { e.preventDefault(); scrollTo("liability"); }}
                className="text-on-surface-variant hover:text-primary transition-colors pl-6"
              >
                Liability &amp; Consent
              </a>
            </nav>
          </div>
          {/* Contact card */}
          <div className="p-md bg-primary-fixed text-on-primary-fixed rounded-xl overflow-hidden relative group">
            <div className="relative z-10">
              <p className="font-label-md text-label-md mb-xs">Questions?</p>
              <p className="font-body-md text-body-md font-medium mb-md">
                Reach out to our compliance officer in Windhoek.
              </p>
              <a
                href="mailto:legal@sossusphysio.na"
                className="text-on-primary-fixed underline font-bold underline-offset-4 decoration-primary/30 hover:decoration-primary"
              >
                legal@sossusphysio.na
              </a>
            </div>
            <span className="material-symbols-outlined absolute -bottom-4 -right-4 text-[120px] opacity-10 group-hover:rotate-12 transition-transform duration-700">
              verified_user
            </span>
          </div>
        </aside>

        {/* ── Main Content ── */}
        <div className="md:col-span-9 space-y-lg">

          {/* Privacy Section */}
          <section ref={privacyRef} id="privacy" className="scroll-mt-32">
            <div className="bg-surface-container-lowest p-lg rounded-xl border border-outline-variant/10 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
              <h2 className="font-headline-lg text-headline-lg mb-md flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-4xl">
                  shield_person
                </span>
                1. Privacy Policy
              </h2>
              <div className="space-y-md font-body-lg text-body-lg leading-relaxed text-on-surface-variant">
                <p>
                  At Sossus Physiotherapy, we recognize that medical data is
                  the most intimate information a person possesses. Our
                  desert-modern approach extends to our digital architecture,
                  ensuring your rehabilitation records are treated with the same
                  meticulous care as a manual adjustment.
                </p>
                <div ref={dataRef} id="data-usage" className="pt-md scroll-mt-32">
                  <h3 className="font-bold text-on-surface text-[24px] mb-xs">
                    Data Collection &amp; Intent
                  </h3>
                  <p>
                    We collect personal identifiers, biomechanical assessments,
                    and clinical history solely to facilitate your recovery.
                    This information resides within an encrypted Namibian
                    sovereign data environment, protected by multi-layered
                    biometric protocols. We do not sell, trade, or share your
                    kinetic profiles with third-party insurers without explicit,
                    session-specific consent.
                  </p>
                </div>
                <div
                  ref={securityRef}
                  id="security"
                  className="pt-md grid md:grid-cols-2 gap-md items-center scroll-mt-32"
                >
                  <div>
                    <h3 className="font-bold text-on-surface text-[24px] mb-xs">
                      Clinical Security Standards
                    </h3>
                    <p>
                      Our systems align with the highest international standards
                      for health data privacy. Every digital interaction, from
                      booking to post-operative follow-up, is obfuscated through
                      advanced cryptographic hashes.
                    </p>
                  </div>
                  <div className="rounded-xl overflow-hidden shadow-lg border-4 border-white">
                    <img
                      className="w-full h-48 object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLctOm_B9GGb9_xQ2ZH66iSZOV5DoXAkWAlcPwlXU50Tx3TLqknDjEC6bVPfCgmBwbBbzfXolBnUm4e7DJbkjCBmb9yGB_cQTc7p5A6nfQ_zfPp-Wh6u_1hBEdskfddZpoHJcGYwfw58Z43LrPyVeZp84mBvJGiBeQXctDBBlDUzsA_0Y2kZvO7AxoAOx_03NjCG1WPLaJVRYx_wpcXjaWzVhpTUQHkmkJ3cxwpg-g7348t0HGE2wcD4Cl6FYLzEvGxFDXz-OxZpY9"
                      alt="Clinic security"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Terms of Service Section */}
          <section ref={termsRef} id="terms" className="scroll-mt-32">
            <div className="bg-secondary-container/10 p-lg rounded-xl border border-outline-variant/10 shadow-sm relative">
              <h2 className="font-headline-lg text-headline-lg mb-md flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-4xl">
                  contract
                </span>
                2. Terms of Service
              </h2>
              <div className="space-y-md font-body-lg text-body-lg leading-relaxed text-on-surface-variant">
                <blockquote
                  ref={sessionsRef}
                  id="sessions"
                  className="p-md bg-white/50 rounded-lg border border-outline-variant/20 italic scroll-mt-32"
                >
                  <p className="mb-sm">
                    &ldquo;Engagement with Sossus Physiotherapy constitutes a
                    partnership in kinetic wellness. We provide the expertise;
                    you provide the commitment.&rdquo;
                  </p>
                  <footer className="font-label-md text-label-md font-bold uppercase tracking-tighter not-italic text-primary">
                    — Clinical Charter
                  </footer>
                </blockquote>
                <p>
                  By scheduling a session, you agree to our 24-hour
                  cancellation policy. In the rhythmic nature of our practice,
                  late arrivals may result in shortened treatment times to
                  ensure the flow for subsequent patients remains uninterrupted.
                </p>
                <div ref={liabilityRef} id="liability" className="pt-md scroll-mt-32">
                  <h3 className="font-bold text-on-surface text-[24px] mb-xs">
                    Medical Consent &amp; Liability
                  </h3>
                  <p>
                    Physiotherapy involves physical intervention and manual
                    manipulation. While our practitioners are internationally
                    accredited, all treatments involve inherent risks of muscle
                    soreness or temporary discomfort. Patients are required to
                    provide honest disclosure of pre-existing conditions. Sossus
                    Physiotherapy Namibia holds comprehensive professional
                    indemnity, yet patients assume responsibility for following
                    prescribed home-rehabilitation protocols.
                  </p>
                </div>
                <div className="grid md:grid-cols-3 gap-md pt-lg">
                  {[
                    { icon: "update", label: "Last Updated", value: "Oct 2024" },
                    { icon: "public", label: "Jurisdiction", value: "Windhoek, Namibia" },
                    { icon: "assignment_turned_in", label: "Compliance", value: "Standard 8.2.1" },
                  ].map(({ icon, label, value }) => (
                    <div
                      key={label}
                      className="bg-white p-sm rounded-lg shadow-sm border border-outline-variant/10 text-center"
                    >
                      <span className="material-symbols-outlined text-primary mb-2 block">
                        {icon}
                      </span>
                      <p className="font-label-md text-label-md uppercase text-[10px]">
                        {label}
                      </p>
                      <p className="font-bold text-on-surface">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
