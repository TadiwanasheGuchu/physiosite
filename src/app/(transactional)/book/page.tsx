'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

type Step = 1 | 2 | 3 | 4;

const STEP_TITLES: Record<Step, string> = {
  1: 'Service Selection',
  2: 'Clinician Preference',
  3: 'Date & Time',
  4: 'Patient Details',
};

const SERVICES = [
  {
    icon: 'physical_therapy',
    title: 'Initial Assessment',
    description: '60-minute deep dive into your biomechanics, pain history, and goals.',
    badge: 'MOST POPULAR',
  },
  {
    icon: 'rebase_edit',
    title: 'Follow-up Session',
    description: 'Targeted 45-minute treatment and progress review for existing patients.',
  },
  {
    icon: 'sports_gymnastics',
    title: 'Sports Performance',
    description: 'Advanced kinetic analysis for elite athletes and movement enthusiasts.',
  },
  {
    icon: 'home_health',
    title: 'Virtual Consult',
    description: 'Expert guidance from the comfort of your home via secure video link.',
  },
];

const CLINICIANS = [
  { name: 'Dr. Elena Marais', role: 'Senior Specialist | Spinal Mechanics', avatar: null },
  { name: 'Johan van Wyk', role: 'Lead Clinician | Sports Injury Recovery', avatar: null },
  { name: 'No Preference', role: 'Match me with the first available expert.', avatar: null, isAny: true },
];

const CALENDAR_DAYS = [
  { day: 28, disabled: true }, { day: 29, disabled: true }, { day: 30, disabled: true },
  { day: 1 }, { day: 2, selected: true }, { day: 3 }, { day: 4 },
  { day: 5 }, { day: 6 }, { day: 7 }, { day: 8 },
  { day: 9 }, { day: 10 }, { day: 11 }, { day: 12 },
  { day: 13 }, { day: 14 }, { day: 15 }, { day: 16 },
  { day: 17 }, { day: 18 }, { day: 19 }, { day: 20 },
  { day: 21 }, { day: 22 }, { day: 23 }, { day: 24 },
  { day: 25 }, { day: 26 }, { day: 27 }, { day: 28 },
  { day: 29 }, { day: 30 }, { day: 31 },
];

const SLOTS = [
  { time: '09:00 AM', label: 'MORNING' },
  { time: '11:30 AM', label: 'MORNING' },
  { time: '02:15 PM', label: 'AFTERNOON' },
  { time: '04:45 PM', label: 'LATE DAY' },
];

export default function BookPage() {
  const router = useRouter();
  const [step, setStep] = useState<Step>(1);
  const [selectedDay, setSelectedDay] = useState(2);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [concern, setConcern] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [animating, setAnimating] = useState(false);
  const [bgPos, setBgPos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setBgPos({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const goToStep = (next: Step) => {
    setAnimating(true);
    setTimeout(() => {
      setStep(next);
      setAnimating(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 200);
  };

  const handleConfirm = () => {
    router.push('/book/confirmed');
  };

  const progress = (step / 4) * 100;

  return (
    <div
      className="min-h-screen overflow-x-hidden"
      style={{
        background: `radial-gradient(circle at ${bgPos.x}% ${bgPos.y}%, rgba(158, 61, 0, 0.03) 0%, #f7f9ff 50%)`,
      }}
    >
      {/* Minimal nav for focused flow */}
      <nav className="fixed top-0 w-full z-50 glass-panel bg-surface/80 border-b border-on-surface/5">
        <div className="flex justify-between items-center px-gutter py-md max-w-container-max mx-auto">
          <div className="font-headline-md text-headline-md text-primary tracking-tight">Sossus Physiotherapy</div>
          <Link
            href="/"
            className="flex items-center gap-xs text-on-surface-variant hover:text-primary transition-colors font-label-md text-label-md"
          >
            <span className="material-symbols-outlined">close</span>
            EXIT SESSION
          </Link>
        </div>
      </nav>

      <main className="relative z-10 pt-xl pb-xl px-gutter max-w-4xl mx-auto min-h-screen flex flex-col">
        {/* Progress Indicator */}
        <div className="mt-lg mb-xl">
          <div className="flex justify-between items-end mb-sm">
            <span className="font-label-md text-label-md text-primary uppercase tracking-widest">
              Step {step} of 4
            </span>
            <span className="font-headline-md text-headline-md text-on-surface">
              {STEP_TITLES[step]}
            </span>
          </div>
          <div className="h-1 w-full bg-secondary-container rounded-full overflow-hidden">
            <div
              className="h-full bg-primary rounded-full transition-all duration-700 ease-[cubic-bezier(0.65,0,0.35,1)]"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Step Content */}
        <div
          className={`flex-grow transition-all duration-200 ${
            animating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
          }`}
        >
          {/* Step 1: Service Selection */}
          {step === 1 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
              {SERVICES.map(service => (
                <button
                  key={service.title}
                  onClick={() => goToStep(2)}
                  className="bento-card p-md rounded-xl bg-surface-container-low cursor-pointer flex flex-col justify-between h-64 text-left group hover:border-primary/30"
                >
                  <div className="flex justify-between items-start">
                    <span className="material-symbols-outlined text-primary text-4xl">{service.icon}</span>
                    {service.badge && (
                      <span className="text-xs font-label-md text-label-md px-sm py-xs bg-primary-fixed text-on-primary-fixed rounded-full">
                        {service.badge}
                      </span>
                    )}
                  </div>
                  <div>
                    <h3 className="font-headline-md text-headline-md mb-xs">{service.title}</h3>
                    <p className="text-on-surface-variant text-sm">{service.description}</p>
                  </div>
                </button>
              ))}
            </div>
          )}

          {/* Step 2: Clinician Preference */}
          {step === 2 && (
            <div>
              <div className="grid grid-cols-1 gap-md">
                {CLINICIANS.map(clinician => (
                  <button
                    key={clinician.name}
                    onClick={() => goToStep(3)}
                    className="flex items-center gap-md p-md rounded-xl bg-surface-container-low bento-card cursor-pointer group text-left hover:border-primary/30"
                  >
                    {clinician.isAny ? (
                      <div className="w-24 h-24 rounded-full bg-secondary-container flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-on-secondary-container text-4xl">shuffle</span>
                      </div>
                    ) : (
                      <div className="w-24 h-24 rounded-full bg-surface-container flex items-center justify-center shrink-0 overflow-hidden">
                        <span className="material-symbols-outlined text-outline text-4xl">person</span>
                      </div>
                    )}
                    <div className="flex-grow">
                      <h3 className="font-headline-md text-headline-md">{clinician.name}</h3>
                      <p className="text-on-surface-variant font-label-md text-label-md">{clinician.role}</p>
                    </div>
                    <span className="material-symbols-outlined text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                      arrow_forward
                    </span>
                  </button>
                ))}
              </div>
              <button
                onClick={() => goToStep(1)}
                className="mt-lg flex items-center gap-xs text-on-surface-variant hover:text-primary transition-colors font-label-md text-label-md"
              >
                <span className="material-symbols-outlined">arrow_back</span>
                BACK TO SERVICES
              </button>
            </div>
          )}

          {/* Step 3: Date & Time */}
          {step === 3 && (
            <div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl">
                {/* Calendar */}
                <div className="bg-surface-container-low p-md rounded-xl bento-card">
                  <div className="flex justify-between items-center mb-md">
                    <span className="font-bold text-lg">June 2026</span>
                    <div className="flex gap-sm">
                      <span className="material-symbols-outlined cursor-pointer hover:text-primary">chevron_left</span>
                      <span className="material-symbols-outlined cursor-pointer hover:text-primary">chevron_right</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-7 gap-xs text-center font-label-md text-xs mb-sm">
                    {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => (
                      <div key={i} className="opacity-40">{d}</div>
                    ))}
                  </div>
                  <div className="grid grid-cols-7 gap-xs text-center">
                    {CALENDAR_DAYS.map((d, i) => (
                      <button
                        key={i}
                        disabled={d.disabled}
                        onClick={() => !d.disabled && setSelectedDay(d.day)}
                        className={`p-sm text-sm rounded-lg transition-colors ${
                          d.disabled
                            ? 'opacity-20 cursor-default'
                            : selectedDay === d.day
                            ? 'bg-primary text-on-primary font-bold'
                            : 'hover:bg-primary-fixed hover:text-on-primary-fixed cursor-pointer'
                        }`}
                      >
                        {d.day}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Time Slots */}
                <div>
                  <h4 className="font-label-md text-label-md text-primary mb-md tracking-widest uppercase">
                    Available Slots
                  </h4>
                  <div className="space-y-sm">
                    {SLOTS.map(slot => (
                      <button
                        key={slot.time}
                        onClick={() => goToStep(4)}
                        className="w-full p-md rounded-xl bg-surface-container-low hover:bg-primary-fixed/20 border border-transparent hover:border-primary/20 cursor-pointer flex justify-between items-center transition-all text-left"
                      >
                        <span className="font-headline-md text-headline-md text-on-surface">{slot.time}</span>
                        <span className="text-xs font-label-md text-label-md opacity-60">{slot.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <button
                onClick={() => goToStep(2)}
                className="mt-lg flex items-center gap-xs text-on-surface-variant hover:text-primary transition-colors font-label-md text-label-md"
              >
                <span className="material-symbols-outlined">arrow_back</span>
                BACK TO CLINICIANS
              </button>
            </div>
          )}

          {/* Step 4: Patient Details */}
          {step === 4 && (
            <div>
              <div className="grid grid-cols-1 gap-lg max-w-2xl mx-auto">
                <div className="space-y-md">
                  <div className="relative">
                    <label className="font-label-md text-xs text-primary block mb-xs">FULL LEGAL NAME</label>
                    <input
                      value={name}
                      onChange={e => setName(e.target.value)}
                      type="text"
                      placeholder="Enter your name"
                      className="w-full bg-transparent border-0 border-b border-outline/30 focus:ring-0 focus:border-primary text-headline-md font-headline-md py-sm transition-all placeholder:opacity-30 outline-none"
                    />
                  </div>
                  <div className="relative">
                    <label className="font-label-md text-xs text-primary block mb-xs">EMAIL ADDRESS</label>
                    <input
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      type="email"
                      placeholder="email@example.com"
                      className="w-full bg-transparent border-0 border-b border-outline/30 focus:ring-0 focus:border-primary text-headline-md font-headline-md py-sm transition-all placeholder:opacity-30 outline-none"
                    />
                  </div>
                  <div className="relative">
                    <label className="font-label-md text-xs text-primary block mb-xs">PRIMARY AREA OF CONCERN</label>
                    <textarea
                      value={concern}
                      onChange={e => setConcern(e.target.value)}
                      placeholder="Describe where you feel pain..."
                      rows={2}
                      className="w-full bg-transparent border-0 border-b border-outline/30 focus:ring-0 focus:border-primary text-body-lg font-body-lg py-sm transition-all placeholder:opacity-30 resize-none outline-none"
                    />
                  </div>
                </div>

                <div className="bg-secondary-container/50 p-md rounded-xl border border-outline-variant/10">
                  <div className="flex items-start gap-sm">
                    <input
                      id="terms"
                      type="checkbox"
                      checked={agreed}
                      onChange={e => setAgreed(e.target.checked)}
                      className="mt-1 rounded text-primary focus:ring-primary"
                    />
                    <label htmlFor="terms" className="text-sm text-on-secondary-container cursor-pointer">
                      I consent to the collection of my medical data for clinical purposes and agree to the 24-hour cancellation policy.
                    </label>
                  </div>
                </div>

                <button
                  onClick={handleConfirm}
                  disabled={!name || !email || !agreed}
                  className="w-full py-md bg-primary text-on-primary rounded-lg font-label-md text-label-md hover:bg-primary-container transition-all flex items-center justify-center gap-sm group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  CONFIRM CONSULTATION
                  <span className="material-symbols-outlined group-hover:translate-x-0.5 transition-transform">check_circle</span>
                </button>
              </div>
              <button
                onClick={() => goToStep(3)}
                className="mt-lg flex items-center gap-xs text-on-surface-variant hover:text-primary transition-colors font-label-md text-label-md"
              >
                <span className="material-symbols-outlined">arrow_back</span>
                BACK TO CALENDAR
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
