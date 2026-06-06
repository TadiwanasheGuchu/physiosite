import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Sossus Physiotherapy",
  description:
    "Precision clinical services inspired by the resilience of the Namibian desert — sports rehabilitation, orthopedic care, manual therapy, and more.",
};

export default function ServicesPage() {
  return (
    <>
      {/* ── Hero ── */}
      <header className="relative px-gutter py-xl md:py-[120px] max-w-container-max mx-auto overflow-hidden">
        <div className="relative z-10 max-w-2xl">
          <span className="font-label-md text-label-md text-primary tracking-widest uppercase mb-sm block">
            Our Clinical Philosophy
          </span>
          <h1 className="font-headline-lg text-headline-lg md:text-display-lg text-on-surface mb-md">
            Restoring the rhythm of{" "}
            <span className="text-primary italic">human motion.</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
            Inspired by the timeless resilience of the Namibian desert, we
            blend precision clinical science with an elevated hospitality
            experience.
          </p>
        </div>
        {/* Decorative copper glow */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <div className="w-full h-full bg-gradient-to-bl from-primary to-transparent rounded-full blur-3xl" />
        </div>
      </header>

      {/* ── Services Bento Grid ── */}
      <section className="px-gutter pb-xl max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-md">

          {/* Large — Sports Rehabilitation */}
          <div className="md:col-span-8 group relative overflow-hidden glass-card rounded-xl p-lg flex flex-col justify-between min-h-[400px] hover:border-primary/30">
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-md">
                <span className="material-symbols-outlined text-primary text-5xl">
                  fitness_center
                </span>
                <span className="bg-primary-fixed text-on-primary-fixed px-sm py-xs rounded-full font-label-md text-label-md">
                  Elite Performance
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md mb-sm">
                Sports Rehabilitation
              </h3>
              <p className="font-body-md text-on-surface-variant max-w-lg">
                Advanced kinetic analysis and personalized recovery protocols
                designed for elite athletes and weekend warriors alike. We focus
                on explosive power, biomechanical efficiency, and sustainable
                performance.
              </p>
            </div>
            <div className="mt-md flex items-center gap-md">
              <Link
                href="/book"
                className="bg-primary text-on-primary px-md py-sm rounded-lg font-label-md text-label-md hover:scale-105 transition-transform"
              >
                Explore Protocol
              </Link>
              <span className="text-primary font-label-md text-label-md flex items-center gap-xs cursor-pointer group-hover:translate-x-2 transition-transform">
                View Case Studies{" "}
                <span className="material-symbols-outlined">arrow_forward</span>
              </span>
            </div>
            {/* Background image */}
            <div className="absolute top-0 right-0 w-full h-full z-0 opacity-10 group-hover:opacity-20 transition-opacity">
              <img
                className="w-full h-full object-cover grayscale"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVnVay-_xSzCYK9eGBTeH4UC59aJE4qjG2mgjC9_qnGbWoGBBdbx3Exj27o0S42_pwdMY_KJ8vsFr9tolO3-U2pejG4xplV3Lc6laU6x3emf3BhhLS6ebBd8P_OvjOFNk0MZxY3QMDo8Tf5VFfu4W4YhzkXuEqhyttpPrsIGe5cCJeoFi1_9-gonnSv6IM_x9MLbdY1IxE5ph-NYfUE9dTeURQ0L8GcVdEeYj5I9ox2MSA2v7NHaks-IBMl6mnCEzkqLz2wsZ_H-SP"
                alt="Sports rehabilitation"
              />
            </div>
          </div>

          {/* Small — Orthopedic Care */}
          <div className="md:col-span-4 glass-card rounded-xl p-lg flex flex-col hover:border-primary/30">
            <span className="material-symbols-outlined text-primary text-[40px] mb-md">
              done
            </span>
            <h3 className="font-headline-md text-headline-md mb-sm">
              Orthopedic Care
            </h3>
            <p className="font-body-md text-on-surface-variant flex-grow">
              Specialized recovery for post-surgical patients and chronic joint
              management.
            </p>
            <hr className="border-on-surface/10 my-md" />
            <ul className="space-y-sm text-on-surface-variant font-label-md text-label-md">
              <li className="flex items-center gap-sm">
                <span className="material-symbols-outlined text-primary text-[18px]">
                  check_circle
                </span>
                Pre-hab Preparation
              </li>
              <li className="flex items-center gap-sm">
                <span className="material-symbols-outlined text-primary text-[18px]">
                  check_circle
                </span>
                Joint Replacement Recovery
              </li>
              <li className="flex items-center gap-sm">
                <span className="material-symbols-outlined text-primary text-[18px]">
                  check_circle
                </span>
                Spinal Integrity
              </li>
            </ul>
          </div>

          {/* Small — Manual Therapy */}
          <div className="md:col-span-4 glass-card rounded-xl p-lg flex flex-col hover:border-primary/30">
            <span className="material-symbols-outlined text-primary text-[40px] mb-md">
              back_hand
            </span>
            <h3 className="font-headline-md text-headline-md mb-sm">
              Manual Therapy
            </h3>
            <p className="font-body-md text-on-surface-variant flex-grow">
              The art of touch. Evidence-based manipulation and mobilization to
              restore joint function and soft tissue health.
            </p>
            <Link
              href="/book"
              className="mt-md border border-primary text-primary px-md py-sm rounded-lg font-label-md text-label-md hover:bg-primary-fixed transition-colors text-center"
            >
              Learn More
            </Link>
          </div>

          {/* Large — Neuromuscular Integration */}
          <div className="md:col-span-8 group relative overflow-hidden glass-card rounded-xl p-lg flex flex-col md:flex-row gap-lg hover:border-primary/30">
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <span className="material-symbols-outlined text-primary text-[40px] mb-md">
                psychology
              </span>
              <h3 className="font-headline-md text-headline-md mb-sm">
                Neuromuscular Integration
              </h3>
              <p className="font-body-md text-on-surface-variant mb-md">
                Bridging the gap between cognitive intent and physical
                execution. Our integrative approach uses neurological feedback
                to correct long-term movement patterns and chronic pain loops.
              </p>
              <div className="flex gap-sm flex-wrap">
                <span className="bg-secondary-container text-on-secondary-container px-sm py-xs rounded-full text-[12px] font-bold">
                  BIOFEEDBACK
                </span>
                <span className="bg-secondary-container text-on-secondary-container px-sm py-xs rounded-full text-[12px] font-bold">
                  NEUROPLASTICITY
                </span>
              </div>
            </div>
            <div className="w-full md:w-1/2 rounded-lg overflow-hidden relative min-h-[250px]">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 absolute inset-0"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLZ35qied0AbBLaq06mrq0BP4ujNukiuifXgth-_f3nOyZ3em4W8FtxDF5wM3d_3ENAf3ocY3_fasjRXc7s-kY46BjLd4O4-yUH5PYlo13H7SyWlsLZBbWy6uciphK63zboDeLTHeJl_OoQ9NwfDWsPL-YJViq44k3Lrq3XAhNmN_9aqTyC9rA4Bn1mkcIoyroCqBbpyiZjJ1R4cMvv65mQ0obcezmbIz3bMiFypkPl94-jSSHZfD0j6Zw-SRsktYnuwiY7vwzBNdh"
                alt="Neuromuscular integration therapy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <p className="absolute bottom-md left-md text-white font-label-md text-label-md">
                Clinical Precision
              </p>
            </div>
          </div>

          {/* Specialty Cards — 4 × 3-col */}
          {[
            {
              icon: "water_drop",
              title: "Hydrotherapy",
              desc: "Buoyancy-based rehabilitation in our heated desert-oasis pool.",
            },
            {
              icon: "bolt",
              title: "Shockwave Therapy",
              desc: "Accelerated healing for chronic tendon issues using sound wave technology.",
            },
            {
              icon: "self_improvement",
              title: "Dry Needling",
              desc: "Targeted myofascial trigger point release for instant tension relief.",
            },
            {
              icon: "monitor_heart",
              title: "Post-Op Support",
              desc: "Guided progression from the hospital to full functional independence.",
            },
          ].map(({ icon, title, desc }) => (
            <div
              key={title}
              className="md:col-span-3 glass-card rounded-xl p-md flex flex-col items-center text-center hover:bg-white/80"
            >
              <div className="w-16 h-16 rounded-full bg-primary-fixed flex items-center justify-center mb-sm">
                <span className="material-symbols-outlined text-primary">
                  {icon}
                </span>
              </div>
              <h4 className="font-headline-md text-[20px] mb-xs">{title}</h4>
              <p className="font-body-md text-[14px] text-on-surface-variant">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Consultation CTA ── */}
      <section className="px-gutter py-xl bg-secondary-container/30">
        <div className="max-w-container-max mx-auto glass-card rounded-xl p-lg md:p-xl flex flex-col md:flex-row items-center justify-between gap-lg">
          <div className="max-w-xl">
            <h2 className="font-headline-lg text-headline-lg mb-md">
              Not sure where to start?
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Schedule a 15-minute diagnostic discovery call with one of our
              lead physiotherapists to identify the right path for your
              recovery.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-md w-full md:w-auto">
            <Link
              href="/book"
              className="bg-primary text-on-primary px-xl py-md rounded-lg font-label-md text-label-md hover:shadow-lg transition-all text-center"
            >
              Book Assessment
            </Link>
            <Link
              href="/contact"
              className="bg-white text-on-surface border border-outline/20 px-xl py-md rounded-lg font-label-md text-label-md hover:bg-surface-container transition-all text-center"
            >
              Inquire Pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
