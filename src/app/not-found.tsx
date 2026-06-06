import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex-grow flex flex-col items-center justify-center pt-xl px-gutter relative min-h-[calc(100vh-200px)]">
      {/* Background lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-secondary-container/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-container-max w-full grid grid-cols-1 md:grid-cols-12 gap-md items-center z-10 pb-xl">

        {/* ── Error Message — 7-col ── */}
        <div className="md:col-span-7 flex flex-col items-start gap-md">
          <span className="font-label-md text-label-md text-primary bg-primary/10 px-md py-xs rounded-full inline-block">
            ERROR 404
          </span>
          <h1 className="font-display-lg text-display-lg text-on-surface leading-tight">
            Lost in the <br />
            <span className="italic text-primary">Dunes?</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg">
            Like the shifting sands of the Namib, the path you were seeking has
            transformed. Even in moments of disorientation, we believe in
            mindful recovery and finding your center.
          </p>
          <div className="flex flex-wrap gap-md mt-sm">
            <Link
              href="/"
              className="group relative bg-primary text-on-primary px-lg py-md rounded-lg font-label-md text-label-md overflow-hidden transition-all duration-500 hover:shadow-xl"
            >
              <span className="relative z-10 flex items-center gap-xs">
                RETURN TO HORIZON
                <span className="material-symbols-outlined text-[18px]">
                  east
                </span>
              </span>
              <div className="absolute inset-0 bg-primary-container scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
            </Link>
            <Link
              href="/services"
              className="border border-outline px-lg py-md rounded-lg font-label-md text-label-md text-on-surface hover:bg-surface-variant/20 transition-all"
            >
              VIEW SERVICES
            </Link>
          </div>

          {/* Navigation Shortcuts */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-sm w-full mt-lg">
            <Link
              href="/"
              className="p-md rounded-xl bg-surface-container-low border border-outline/10 kinetic-hover"
            >
              <span className="material-symbols-outlined text-primary mb-xs block">
                home
              </span>
              <h3 className="font-label-md text-label-md text-on-surface">
                Home
              </h3>
              <p className="text-[12px] text-on-surface-variant">
                Back to start
              </p>
            </Link>
            <Link
              href="/services"
              className="p-md rounded-xl bg-surface-container-low border border-outline/10 kinetic-hover"
            >
              <span className="material-symbols-outlined text-primary mb-xs block">
                medical_services
              </span>
              <h3 className="font-label-md text-label-md text-on-surface">
                Services
              </h3>
              <p className="text-[12px] text-on-surface-variant">
                Healing paths
              </p>
            </Link>
            <Link
              href="/contact"
              className="p-md rounded-xl bg-surface-container-low border border-outline/10 kinetic-hover col-span-2 md:col-span-1"
            >
              <span className="material-symbols-outlined text-primary mb-xs block">
                contact_support
              </span>
              <h3 className="font-label-md text-label-md text-on-surface">
                Contact
              </h3>
              <p className="text-[12px] text-on-surface-variant">
                Need guidance?
              </p>
            </Link>
          </div>
        </div>

        {/* ── Visual — 5-col ── */}
        <div className="md:col-span-5 relative group">
          <div className="aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl relative">
            <img
              className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDt2N3r2ZIiACSQs-6FxjfTgkP9g34PmNcQLb2ARGh0z51kIFAGGABh8iRZsggQaPghyYuadr0_CJzoazUpe4qLXPnEQgONFhU2yC2OsKfg87aww9_2yfUPtnhyDCvQ_6D1l2oOWixUuZctOVGOvg6psNZTiasToAKDVZADKdUdlJi6LmCkX0vU8XGPC04WDuq2XC8qgkeE8ch19DXzuVMIOP5MjQoSs3edIuBqkHgYQgIcC2pcZn5bJ8B_9JgtxTs8H4eSNCY2806D"
              alt="Namib desert sand dunes at golden hour"
            />
            {/* Glass overlay card */}
            <div className="absolute bottom-md left-md right-md p-md glass-panel bg-white/10 rounded-2xl border border-white/20 text-white backdrop-blur-md">
              <p className="font-headline-md text-[24px] mb-xs italic">
                Namib-Naukluft
              </p>
              <p className="font-body-md text-[14px] opacity-80">
                Finding stillness in the expanse.
              </p>
            </div>
          </div>
          {/* Decorative corner lines */}
          <div className="absolute -top-lg -right-lg w-24 h-24 border-t-2 border-r-2 border-primary/30 rounded-tr-3xl hidden md:block" />
          <div className="absolute -bottom-sm -left-sm w-32 h-32 border-b-2 border-l-2 border-secondary/20 rounded-bl-3xl hidden md:block" />
        </div>

      </div>
    </main>
  );
}
