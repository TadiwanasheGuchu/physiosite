import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-[921px] flex items-center px-gutter">
        <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-12 gap-xl items-center w-full">

          {/* Left column */}
          <div className="lg:col-span-7 space-y-md">
            <span className="inline-block px-4 py-1 border border-outline-variant text-primary font-label-md text-label-md rounded-full uppercase tracking-widest bg-secondary-container/30">
              Kinetic Hospitality
            </span>

            <h1 className="font-display-lg text-display-lg text-on-surface leading-tight tracking-tight">
              Restore Your{" "}
              <span className="text-primary italic">Movement</span>,{" "}
              <br />
              Reclaim Your Horizon.
            </h1>

            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
              A fusion of Namibian warmth and precision medical expertise.
              Experience a sanctuary designed for recovery, from the dunes to
              the city.
            </p>

            <div className="flex flex-wrap gap-md pt-base">
              <Link
                href="/book"
                className="bg-primary text-on-primary px-lg py-md rounded-lg font-label-md text-label-md transition-all hover:bg-primary-container hover:shadow-lg flex items-center gap-base"
              >
                Book Initial Assessment
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
              <Link
                href="/services"
                className="border border-outline text-on-surface px-lg py-md rounded-lg font-label-md text-label-md transition-all hover:bg-secondary-container/20"
              >
                Explore Therapies
              </Link>
            </div>
          </div>

          {/* Right column — hero image */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl relative group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDytCAju_ruvP2GE7o1srv29dmwsQmgZ1yIgG6cljYx_QUPKD5SIC5-GeXynwXWGpSb7Gw6vmLvtXJyhVUGHvKpIapQS-zFaNUsJYaZAcj9zhFId8g28ye5mHxxPRp7EGdMV62-KngJGjsgDavW0gINSXlPzVY7R13zsXVJheXr_9UeXb_VfzsaKDMkzm-dDMlG63F5KA62C4D2Cj-DhA-wtwZ13fafZZ15Rg_IjCy2NnOVYB_aIzg6r2rmBkHPQ_ZkHNcpdMLJHMr-"
                alt="Luxury physiotherapy clinic interior in Windhoek — warm sandstone walls and golden-hour lighting"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-40" />
            </div>
            {/* Decorative blob */}
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-secondary-container rounded-full blur-3xl opacity-50 z-[-1]" />
          </div>

        </div>
      </section>

      {/* ── Bento Grid: Active Empathy ── */}
      <section className="py-xl px-gutter bg-surface-container-low/50">
        <div className="max-w-container-max mx-auto">

          {/* Section header */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-xl gap-md">
            <div className="max-w-xl">
              <h2 className="font-headline-lg text-headline-lg text-on-surface">
                Active Empathy
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mt-sm">
                Our philosophy integrates clinical precision with the tactile
                comfort of a retreat, ensuring your path to recovery is as
                restorative as it is effective.
              </p>
            </div>
            <div className="flex gap-base">
              <span
                className="material-symbols-outlined text-primary text-4xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                spa
              </span>
            </div>
          </div>

          {/* Bento grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-md h-auto md:h-[600px]">

            {/* Large 2×2 card */}
            <div className="md:col-span-2 md:row-span-2 bento-card bg-white p-lg rounded-xl flex flex-col justify-between border border-on-surface/5 relative overflow-hidden">
              <div className="z-10">
                <span className="material-symbols-outlined text-primary text-5xl mb-md">
                  orthopedics
                </span>
                <h3 className="font-headline-md text-headline-md mb-sm">
                  Structural Integrity
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Comprehensive biomechanical analysis to identify the root
                  cause of your pain, not just the symptoms.
                </p>
              </div>
              <div className="mt-lg z-10">
                <ul className="space-y-sm">
                  <li className="flex items-center gap-sm text-on-surface-variant">
                    <span
                      className="material-symbols-outlined text-primary text-sm"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      circle
                    </span>
                    3D Gait Analysis
                  </li>
                  <li className="flex items-center gap-sm text-on-surface-variant">
                    <span
                      className="material-symbols-outlined text-primary text-sm"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      circle
                    </span>
                    Neuromuscular Re-education
                  </li>
                </ul>
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBL1vkcj5kr6WQhJH5jGn4P26OBNifOTMWamZBEz7r1CA9bgkHNqeRbAdNWTIw4KpT1YgcZj_B1IJEoTrUY9xaRrUzVvq3OH1OpFjjOKSyR2yEpdfBOrw_q353eUEqihDCVh9AOaLuDfas47DMx4ycERTbCeSUVyR2ey--Q02vgTE0jNFpdHjOCLMtejZ-8tEg-HE6-x41qZW4Kos36YqmxCqhaxC2WH6e6SpyaVue1kQPnqJH-L9pAE-O5flr8sMa1KEMOXPNlNvSJ"
                alt=""
                aria-hidden="true"
                className="absolute bottom-0 right-0 w-2/3 opacity-10 pointer-events-none"
              />
            </div>

            {/* Medium 2×1 card — Oasis Room */}
            <div className="md:col-span-2 bento-card bg-secondary-container p-lg rounded-xl flex items-center gap-md border border-on-surface/5">
              <div className="flex-1">
                <h3 className="font-headline-md text-headline-md mb-sm">
                  The Oasis Room
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Private treatment suites utilizing heat therapy and
                  linen-wrapped comfort for deep recovery.
                </p>
              </div>
              <div className="w-1/3 aspect-square rounded-lg overflow-hidden hidden sm:block">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGrqbXZi2S2pRZOUAy33Qwp3YUhYhy3ZBG3mXPdKmPt_ZPGAiq4iRriluuFu08WPDbp6h3gyXXwfvUAmuW63cs_YllrecDe7lMylyyabllKgbiscMChAFoUDzSWWHkeRzZk_E1FP8rAuLR2uo2ZU83l4Ll6CYr36rTa6iwt1d5iR7G_f9xCsWXTlF4nRjHDJgCxVXB_o__pA7Km6Pay8lt8UNL5LuWmMV-7Kh0mL0Uyi89lTa5QvXwJE_8cyB8qkBs-FJugHwOVWyy"
                  alt="Tranquil private treatment suite with warm wooden accents and soft linen"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Small 1×1 — Rehab Gym */}
            <div className="bento-card bg-surface p-lg rounded-xl border border-on-surface/5 flex flex-col justify-center">
              <span className="material-symbols-outlined text-primary mb-sm">
                fitness_center
              </span>
              <h4 className="font-bold text-lg">Rehab Gym</h4>
              <p className="text-sm text-on-surface-variant">
                State-of-the-art equipment for functional return.
              </p>
            </div>

            {/* Small 1×1 — Instant Booking (copper) */}
            <div className="bento-card bg-primary text-on-primary p-lg rounded-xl flex flex-col justify-center shadow-lg">
              <span className="material-symbols-outlined mb-sm text-3xl">
                event_available
              </span>
              <h4 className="font-bold text-lg">Instant Booking</h4>
              <p className="text-sm opacity-90">
                View real-time availability for our Windhoek clinic.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── Our Philosophy ── */}
      <section className="py-xl px-gutter overflow-hidden">
        <div className="max-w-container-max mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl items-center">

            {/* Image */}
            <div className="relative">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBowrCFiq1aHlZ7zVm0eXxs8qT9KAXBVrcdmu4JFXb5JKwn-HGiJOeX4YZbQgQ7_l-g-psKgy4Hb-OP9w46U06ZrMpBTMkNpXX_tL56d7Z06sFD0JWn6yfB_7r5SjmreaPvPf2oyJMWmGopg8anLEr8b0miOhpj9wXLg09X7btnM4bLGhEzZXHbCLc-_NY-8ao-GqY9uuij_fPphGKS3H4Q8sBU-0LHC1vkLQ4yBsd7sqyn6N2EmOA_OANnE1XpOweuTiDhs_G_8Vx5"
                  alt="Physiotherapist working with a patient in a light-filled sandstone space"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative glow */}
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
            </div>

            {/* Text */}
            <div className="space-y-md">
              <h2 className="font-headline-lg text-headline-lg">
                Our Philosophy
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                We believe healing is a sensory experience. Sossus Physiotherapy
                was born from the realization that clinical excellence often
                lacks the human warmth necessary for holistic recovery.
              </p>
              <div className="space-y-sm">
                <div className="flex gap-md">
                  <span className="text-primary font-bold text-xl">01</span>
                  <div>
                    <h4 className="font-bold text-lg">
                      Personalized Trajectories
                    </h4>
                    <p className="text-on-surface-variant">
                      Every patient receives a unique recovery roadmap, tailored
                      to their lifestyle and movement goals.
                    </p>
                  </div>
                </div>
                <div className="flex gap-md">
                  <span className="text-primary font-bold text-xl">02</span>
                  <div>
                    <h4 className="font-bold text-lg">Integrated Modalities</h4>
                    <p className="text-on-surface-variant">
                      Combining manual therapy, dry needling, and exercise
                      science for a 360-degree approach.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Expert Care ── */}
      <section className="py-xl px-gutter bg-surface-container-highest/30">
        <div className="max-w-container-max mx-auto text-center">
          <h2 className="font-headline-lg text-headline-lg mb-xl">
            Expert Care, Namibian Roots
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">

            <div className="bg-white p-lg rounded-2xl shadow-sm border border-outline-variant/30 flex flex-col items-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-md border-4 border-secondary-container">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfbRKvHBiAoNLZiq3kuhSekF8scImYNaOzFxidiH3wtVcB6KYe6MpeCRY7uviSkqK8J82t18zikEC3szidxeQkgReFGHeLrs-A6XttrwzoeISSU6u6Csf6DdAgqOP3oVcC1H_Kf-oz4oMScQr-h-XrlTD_cq3AFAV-9B9LHqV8NiO4vtDckbIRxtacf5Dm4BlghxSYaEP43mX6g6Kr3fs_4nMeHRlLRuIC-eklZe5juGOktYFzmRbCd0DsOHmvVkaaedXYYF1HH78H"
                  alt="Dr. Elina Shikongo"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-headline-md text-headline-md text-primary">
                Dr. Elina Shikongo
              </h3>
              <p className="font-label-md text-label-md text-on-surface-variant mb-sm">
                SENIOR CLINICIAN
              </p>
              <p className="text-sm text-on-surface-variant px-md">
                Specializing in Sports Rehabilitation and Post-Surgical Recovery
                with over 12 years of experience.
              </p>
            </div>

            <div className="bg-white p-lg rounded-2xl shadow-sm border border-outline-variant/30 flex flex-col items-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-md border-4 border-secondary-container">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMSrBLw98ldrxaP9pNm350dy4g5mWoUxej2ZDQmxRFOJDfZghWQL6hF8e3ToxouNSlarBWgbz2e4VdIc8s8EDyy4_RgS4gJ9psDXANnGHNzXiRd9XDXR7Ok8K2OSZI6N7E9z_BSVqCdE8xdUZwJrpNt8d9xy5NN-v_YZS6Y8jr2iqzQmd8ueGNDqIrycXR0gN7HBIBiciV3c3mzcCasTSp57Idx1qEewVZVfpYznFjwMLO1FOqOsoPvGRtFDA4Pp_qT3kwC-P8ZzX_"
                  alt="Johann Pretorius"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-headline-md text-headline-md text-primary">
                Johann Pretorius
              </h3>
              <p className="font-label-md text-label-md text-on-surface-variant mb-sm">
                MOVEMENT SPECIALIST
              </p>
              <p className="text-sm text-on-surface-variant px-md">
                Expert in spinal health and functional mobility for chronic pain
                management.
              </p>
            </div>

            <div className="bg-white p-lg rounded-2xl shadow-sm border border-outline-variant/30 flex flex-col items-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-md border-4 border-secondary-container">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3FSmk6515EViUt4q2iFF_BvfYdWx_bdStdLLWJOB8eExWxJym2o3RhZv8jEptiqqtNdqw6gjGpXrqullAuNYlG3uxGKtRzjp9XUV2-iT5hgg2QmhwfxiW0y4Bv1-on3ztsDO4mvPSeUWe7pse-8zuNRa2cvkyNiGjO4QxVNOeMShHGIk-BFuLiHUqL6gTb1c3go8xVtHZi2a-FxeBP2hLDBn4d7OiPiXGeWaBVQ6TaZ2n2B9SUYhbk8vQtGP63V_NXuG-Pgf-qMNb"
                  alt="Sarah Nel"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-headline-md text-headline-md text-primary">
                Sarah Nel
              </h3>
              <p className="font-label-md text-label-md text-on-surface-variant mb-sm">
                PEDIATRIC CARE
              </p>
              <p className="text-sm text-on-surface-variant px-md">
                Dedicated to developmental movement and athletic growth in young
                patients.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── Portal CTA ── */}
      <section className="py-xl px-gutter relative overflow-hidden">
        <div className="max-w-4xl mx-auto bg-primary text-on-primary rounded-3xl p-xl text-center relative z-10 shadow-2xl">
          {/* Grain overlay inside CTA */}
          <div className="absolute inset-0 grain-texture opacity-10 pointer-events-none rounded-3xl" aria-hidden="true" />

          <h2 className="font-display-lg text-headline-lg mb-md">
            Ready to begin your journey?
          </h2>
          <p className="font-body-lg text-body-lg mb-xl opacity-90">
            Access your personalized exercise plan, book sessions, and chat with
            your therapist directly through our secure patient portal.
          </p>
          <div className="flex flex-col sm:flex-row gap-md justify-center">
            <Link
              href="/portal/sign-in"
              className="bg-on-primary text-primary px-xl py-md rounded-lg font-bold hover:bg-primary-fixed transition-all flex items-center justify-center gap-base"
            >
              Login to Portal
              <span className="material-symbols-outlined">login</span>
            </Link>
            <Link
              href="/portal/sign-in"
              className="border border-on-primary text-on-primary px-xl py-md rounded-lg font-bold hover:bg-white/10 transition-all"
            >
              New Patient? Sign Up
            </Link>
          </div>
        </div>

        {/* Atmospheric glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 blur-3xl rounded-full z-0" />
      </section>
    </>
  );
}
