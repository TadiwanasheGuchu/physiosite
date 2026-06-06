import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Message Sent | Sossus Physiotherapy",
};

export default function MessageSentPage() {
  return (
    <main className="min-h-[calc(100vh-200px)] flex items-center justify-center px-gutter relative overflow-hidden py-xl">
      {/* Ambient glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -mr-64 -mt-64 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] -ml-64 -mb-64 pointer-events-none" />

      <div className="max-w-4xl w-full z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter animate-fade-in-up">

          {/* Main Message Block — 8-col */}
          <div className="md:col-span-8 glass-panel bg-surface/70 border border-on-surface/10 rounded-xl p-lg md:p-xl flex flex-col justify-center">
            <div className="mb-md">
              <span
                className="material-symbols-outlined text-primary text-5xl mb-sm block"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                check_circle
              </span>
              <h1 className="font-headline-lg text-headline-lg text-on-surface mb-sm">
                Message Sent.
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg">
                Thank you for reaching out to Sossus Physiotherapy. We
                appreciate your interest in our desert-modern healing services.
              </p>
            </div>
            <div className="space-y-sm mb-lg">
              <p className="font-body-md text-body-md text-on-surface-variant/80 italic">
                A member of our clinical team will review your inquiry and
                respond within 24 hours.
              </p>
            </div>
            <div>
              <Link
                href="/"
                className="inline-flex items-center justify-center px-lg py-md bg-primary text-on-primary rounded-lg font-label-md text-label-md kinetic-hover shadow-lg shadow-primary/20"
              >
                Return to Home
              </Link>
            </div>
          </div>

          {/* Secondary Info — 4-col */}
          <div className="md:col-span-4 space-y-gutter">
            {/* Quick links */}
            <div className="bg-secondary-container/50 border border-on-surface/10 rounded-xl p-md">
              <h3 className="font-headline-md text-[24px] text-on-secondary-container mb-md">
                Quick Links
              </h3>
              <nav className="flex flex-col gap-sm">
                {[
                  { label: "Sports Recovery", href: "/services" },
                  { label: "Chronic Pain", href: "/services" },
                  { label: "Post-Op Rehab", href: "/services" },
                ].map(({ label, href }) => (
                  <Link
                    key={label}
                    href={href}
                    className="flex items-center justify-between p-sm rounded-lg hover:bg-white/40 transition-colors group"
                  >
                    <span className="font-label-md text-label-md text-on-secondary-container/80">
                      {label}
                    </span>
                    <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </Link>
                ))}
              </nav>
            </div>
            {/* Visual accent */}
            <div className="relative rounded-xl h-48 overflow-hidden group">
              <img
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuASZ6lozFwqIG-FGeb0jOBAA0eXaHgog05vkrtuK5wQbo_SGDITp5onxRoQLS8U10GcN2bDXEn6l_Qi7539lTAiXa1405heXcn95xk94WHhnjAiSR16eSMTbpvXK6BD-RkPAqOS9iLfSOqmRhR4rzzHRAsL59m-X8LTZ7oBTlK3i1MyFX0MOt9uTrc73fIjWmdcSr3z3v853u3q86HEwBmxSC_cLwxUkU_dyHyEBJm9xjQ9rsmjZKHcgngLt5tl1qiJs_9kC4YSRviG"
                alt="Healing hands"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
              <div className="absolute bottom-md left-md">
                <p className="font-headline-md text-[20px] text-white">
                  Restore Movement.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
