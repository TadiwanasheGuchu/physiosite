'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function GuestBookingPage() {
  const router = useRouter();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [createAccount, setCreateAccount] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/book/confirmed');
  };

  return (
    <div className="min-h-screen flex flex-col bg-surface">
      <main className="flex-grow pt-xl pb-xl px-gutter">
        <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-12 gap-md mt-xl">

          {/* Left: Form */}
          <div className="md:col-span-7 flex flex-col gap-md">
            <div className="mb-md">
              <Link
                href="/book"
                className="flex items-center gap-xs text-primary font-label-md text-label-md mb-base group"
              >
                <span className="material-symbols-outlined group-hover:-translate-x-1 transition-transform">arrow_back</span>
                Back to Selection
              </Link>
              <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-xs">
                Guest Booking
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg">
                Complete your details to secure your recovery session. No account required for a seamless experience.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="glass-card p-md md:p-lg rounded-xl flex flex-col gap-lg">
              {/* Name row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
                <div className="flex flex-col gap-xs">
                  <label htmlFor="first-name" className="font-label-md text-label-md text-on-surface-variant">
                    First Name
                  </label>
                  <input
                    id="first-name"
                    type="text"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                    placeholder="Enter your first name"
                    required
                    className="input-minimal font-body-md text-body-md w-full"
                  />
                </div>
                <div className="flex flex-col gap-xs">
                  <label htmlFor="last-name" className="font-label-md text-label-md text-on-surface-variant">
                    Last Name
                  </label>
                  <input
                    id="last-name"
                    type="text"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                    placeholder="Enter your last name"
                    required
                    className="input-minimal font-body-md text-body-md w-full"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-xs">
                <label htmlFor="email" className="font-label-md text-label-md text-on-surface-variant">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="email@example.com"
                  required
                  className="input-minimal font-body-md text-body-md w-full"
                />
              </div>

              <div className="flex flex-col gap-xs">
                <label htmlFor="phone" className="font-label-md text-label-md text-on-surface-variant">
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  placeholder="+264 81 000 0000"
                  className="input-minimal font-body-md text-body-md w-full"
                />
              </div>

              {/* Optional account creation */}
              <div className="flex items-start gap-md mt-base p-md bg-secondary-fixed/30 rounded-lg border border-outline-variant/30">
                <div className="flex items-center h-6">
                  <input
                    id="create-account"
                    type="checkbox"
                    checked={createAccount}
                    onChange={e => setCreateAccount(e.target.checked)}
                    className="w-5 h-5 text-primary border-outline rounded focus:ring-primary"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="create-account" className="font-label-md text-label-md text-on-surface cursor-pointer">
                    Create account for faster booking next time
                  </label>
                  <span className="font-label-md text-xs text-on-surface-variant mt-xs">
                    Securely save your patient history and manage appointments easily.
                  </span>
                </div>
              </div>

              <div className="mt-md flex flex-col md:flex-row items-center justify-between gap-md">
                <p className="font-label-md text-xs text-on-surface-variant text-center md:text-left">
                  By proceeding, you agree to our{' '}
                  <Link href="/legal" className="underline text-primary">Patient Care Policy</Link>{' '}
                  and Privacy Terms.
                </p>
                <button
                  type="submit"
                  className="w-full md:w-auto bg-primary text-on-primary px-xl py-4 rounded-full font-label-md text-label-md hover:bg-primary-container transition-all flex items-center justify-center gap-sm shadow-lg shadow-primary/20"
                >
                  Proceed to Payment
                  <span className="material-symbols-outlined">chevron_right</span>
                </button>
              </div>
            </form>
          </div>

          {/* Right: Booking Summary */}
          <div className="md:col-span-5 flex flex-col gap-md">
            {/* Summary Card */}
            <div className="glass-card p-md rounded-xl overflow-hidden relative">
              <div className="absolute top-0 right-0 p-md opacity-10 pointer-events-none">
                <span className="material-symbols-outlined" style={{ fontSize: '80px' }}>calendar_month</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-md">Appointment Summary</h3>
              <div className="flex flex-col gap-md border-b border-outline-variant/20 pb-md mb-md">
                <div className="flex items-start gap-md">
                  <div className="w-12 h-12 rounded-lg bg-primary-fixed flex items-center justify-center text-primary shrink-0">
                    <span className="material-symbols-outlined">physical_therapy</span>
                  </div>
                  <div>
                    <p className="font-label-md text-label-md text-on-surface">Lower Back Recovery</p>
                    <p className="font-label-md text-xs text-on-surface-variant">60 Minute Assessment &amp; Therapy</p>
                  </div>
                </div>
                <div className="flex items-start gap-md">
                  <div className="w-12 h-12 rounded-lg bg-secondary-fixed flex items-center justify-center text-secondary shrink-0">
                    <span className="material-symbols-outlined">event_available</span>
                  </div>
                  <div>
                    <p className="font-label-md text-label-md text-on-surface">Friday, October 25th</p>
                    <p className="font-label-md text-xs text-on-surface-variant">09:30 AM — 10:30 AM</p>
                  </div>
                </div>
                <div className="flex items-start gap-md">
                  <div className="w-12 h-12 rounded-lg bg-tertiary-fixed flex items-center justify-center text-tertiary shrink-0">
                    <span className="material-symbols-outlined">location_on</span>
                  </div>
                  <div>
                    <p className="font-label-md text-label-md text-on-surface">Windhoek Central Clinic</p>
                    <p className="font-label-md text-xs text-on-surface-variant">Independence Ave, Block C</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center px-xs">
                <span className="font-body-md text-on-surface">Total Session Cost</span>
                <span className="font-headline-md text-headline-md text-primary">N$ 850.00</span>
              </div>
            </div>

            {/* Trust Card */}
            <div className="glass-card p-md rounded-xl bg-primary/5 flex items-center gap-md">
              <span
                className="material-symbols-outlined text-primary text-2xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                verified_user
              </span>
              <div>
                <p className="font-label-md text-label-md text-on-surface">Medical Aid Recognition</p>
                <p className="font-label-md text-xs text-on-surface-variant">
                  We provide detailed invoices for easy medical aid claims.
                </p>
              </div>
            </div>

            {/* Aesthetic Image */}
            <div className="rounded-xl overflow-hidden aspect-video md:aspect-auto md:h-48 relative">
              <div className="w-full h-full bg-gradient-to-br from-secondary-container to-surface-container flex items-center justify-center">
                <span className="material-symbols-outlined text-outline/40 text-7xl">spa</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-md">
                <p className="text-white font-label-md text-xs italic">
                  Kinetic Hospitality: Reimagining healing through desert wisdom.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
