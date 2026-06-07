'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function BookingConfirmedPage() {
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!imgRef.current) return;
      const moveX = (e.clientX - window.innerWidth / 2) * 0.005;
      const moveY = (e.clientY - window.innerHeight / 2) * 0.005;
      imgRef.current.style.transform = `scale(1.1) translate(${moveX}px, ${moveY}px)`;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <main className="relative min-h-screen flex items-center justify-center pt-24 pb-12 px-gutter overflow-hidden">
      {/* Desert dune hero background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          ref={imgRef}
          className="absolute inset-0 transition-transform duration-75 ease-out"
          style={{ transform: 'scale(1.1)' }}
        >
          <div className="w-full h-full bg-gradient-to-br from-secondary-container via-surface-container-high to-surface opacity-60" />
          {/* Desert dunes pattern */}
          <svg
            viewBox="0 0 1440 900"
            className="absolute inset-0 w-full h-full opacity-20"
            preserveAspectRatio="xMidYMid slice"
          >
            <path d="M0 600 Q360 400 720 550 Q1080 700 1440 450 L1440 900 L0 900 Z" fill="#9e3d00" opacity="0.3" />
            <path d="M0 700 Q400 500 800 650 Q1200 800 1440 600 L1440 900 L0 900 Z" fill="#675d4e" opacity="0.2" />
            <path d="M0 750 Q360 620 720 720 Q1080 820 1440 700 L1440 900 L0 900 Z" fill="#efe0cd" opacity="0.3" />
          </svg>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>

      <div className="relative z-20 max-w-4xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">

          {/* Main confirmation card */}
          <div
            className="md:col-span-8 glass-card rounded-3xl p-lg border border-outline-variant/30 shadow-2xl animate-fade-in-up"
            style={{ animationDelay: '0ms' }}
          >
            <div className="flex items-center gap-sm mb-md">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <span
                  className="material-symbols-outlined text-primary text-2xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  check_circle
                </span>
              </div>
              <span className="text-primary font-label-md text-label-md tracking-widest">APPOINTMENT SECURED</span>
            </div>

            <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-md">
              Your healing journey{' '}
              <br />
              <span className="text-primary italic">begins here.</span>
            </h1>

            <p className="text-body-lg text-on-surface-variant mb-lg max-w-lg">
              We&apos;ve confirmed your session. A detailed confirmation and preparation guide has been sent to your email.
            </p>

            <div className="flex flex-wrap gap-md">
              <button className="bg-primary text-on-primary px-8 py-4 rounded-full font-label-md text-label-md flex items-center gap-2 hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-primary/20">
                <span className="material-symbols-outlined text-xl">calendar_add_on</span>
                Add to Calendar
              </button>
              <button className="border border-outline text-on-surface px-8 py-4 rounded-full font-label-md text-label-md hover:bg-surface-variant transition-all">
                View Directions
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="md:col-span-4 flex flex-col gap-gutter">
            {/* Appointment details */}
            <div
              className="glass-card rounded-3xl p-md border border-outline-variant/30 flex-1 animate-fade-in-up"
              style={{ animationDelay: '200ms' }}
            >
              <h3 className="font-label-md text-label-md text-primary mb-md">DETAILS</h3>
              <div className="space-y-md">
                <div className="flex items-start gap-sm">
                  <span className="material-symbols-outlined text-on-surface-variant">schedule</span>
                  <div>
                    <p className="font-label-md text-label-md text-on-surface">Thursday, Oct 24</p>
                    <p className="text-sm text-on-surface-variant">09:15 AM — 10:15 AM</p>
                  </div>
                </div>
                <div className="flex items-start gap-sm">
                  <span className="material-symbols-outlined text-on-surface-variant">person</span>
                  <div>
                    <p className="font-label-md text-label-md text-on-surface">Dr. Elena Marais</p>
                    <p className="text-sm text-on-surface-variant">Senior Physiotherapist</p>
                  </div>
                </div>
                <div className="flex items-start gap-sm">
                  <span className="material-symbols-outlined text-on-surface-variant">location_on</span>
                  <div>
                    <p className="font-label-md text-label-md text-on-surface">Windhoek Central Clinic</p>
                    <p className="text-sm text-on-surface-variant">Independence Ave, Block C</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Patient Dashboard shortcut */}
            <Link
              href="/portal/dashboard"
              className="bg-secondary-container hover:bg-secondary-fixed transition-colors rounded-3xl p-md border border-outline-variant/20 group animate-fade-in-up block"
              style={{ animationDelay: '400ms' }}
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-label-md text-label-md text-on-secondary-container">Patient Dashboard</p>
                  <p className="text-sm text-on-secondary-container/80">Manage your health profile</p>
                </div>
                <span className="material-symbols-outlined text-on-secondary-container group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </div>
            </Link>
          </div>

          {/* Bottom utility strip */}
          <div
            className="md:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-gutter animate-fade-in-up"
            style={{ animationDelay: '600ms' }}
          >
            <div className="bg-surface-container-low rounded-2xl p-md flex items-center gap-md">
              <span className="material-symbols-outlined text-primary bg-primary/10 p-2 rounded-lg shrink-0">article</span>
              <p className="text-sm text-on-surface-variant">
                Complete your <span className="font-bold text-on-surface">Intake Form</span> before arrival.
              </p>
            </div>
            <div className="bg-surface-container-low rounded-2xl p-md flex items-center gap-md">
              <span className="material-symbols-outlined text-primary bg-primary/10 p-2 rounded-lg shrink-0">medical_services</span>
              <p className="text-sm text-on-surface-variant">
                Review our <span className="font-bold text-on-surface">Patient Care</span> protocols.
              </p>
            </div>
            <div className="bg-surface-container-low rounded-2xl p-md flex items-center gap-md">
              <span className="material-symbols-outlined text-primary bg-primary/10 p-2 rounded-lg shrink-0">chat_bubble</span>
              <p className="text-sm text-on-surface-variant">
                Need to reschedule?{' '}
                <Link href="/contact" className="font-bold text-on-surface hover:text-primary transition-colors">
                  Chat with us
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
