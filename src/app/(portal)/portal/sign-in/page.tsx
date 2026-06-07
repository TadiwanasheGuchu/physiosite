'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import Link from 'next/link';

type AuthMode = 'signin' | 'signup';

export default function PortalSignInPage() {
  const router = useRouter();
  const [mode, setMode] = useState<AuthMode>('signin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [bgPos, setBgPos] = useState({ x: 50, y: 50 });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setBgPos({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (mode === 'signup') {
      setError("Account creation is not yet available online. Please contact the clinic to be set up.");
      return;
    }

    setLoading(true);
    const result = await signIn("credentials", { email, password, redirect: false });
    setLoading(false);

    if (result?.error) {
      setError("Invalid email or password.");
    } else {
      router.push("/portal/dashboard");
    }
  };

  const isSignup = mode === 'signup';

  return (
    <div
      className="font-body-md text-on-background min-h-screen flex flex-col relative overflow-x-hidden"
      style={{
        background: `radial-gradient(circle at ${bgPos.x}% ${bgPos.y}%, rgba(158, 61, 0, 0.05), #f7f9ff 60%)`,
      }}
    >
      {/* Grain overlay */}
      <div className="fixed inset-0 pointer-events-none z-10 opacity-[0.03] grain-texture" />

      <main className="grow flex items-center justify-center relative p-gutter md:p-xl z-20">
        {/* Auth Module */}
        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-12 gap-0 overflow-hidden rounded-xl shadow-2xl glass-card">

          {/* Left: Cinematic desert panel */}
          <div className="hidden md:block md:col-span-5 relative overflow-hidden group">
            {/* Desert dunes SVG stand-in */}
            <div className="absolute inset-0 bg-linear-to-br from-secondary-container via-primary/20 to-primary/60 transition-transform duration-1000 group-hover:scale-105" />
            <svg
              viewBox="0 0 500 700"
              className="absolute inset-0 w-full h-full object-cover opacity-40"
              preserveAspectRatio="xMidYMid slice"
            >
              <defs>
                <linearGradient id="duneGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffb595" />
                  <stop offset="100%" stopColor="#9e3d00" />
                </linearGradient>
              </defs>
              <path d="M0 500 Q125 350 250 430 Q375 510 500 380 L500 700 L0 700 Z" fill="url(#duneGrad)" opacity="0.6" />
              <path d="M0 580 Q150 460 300 540 Q420 600 500 500 L500 700 L0 700 Z" fill="#675d4e" opacity="0.4" />
              <path d="M0 630 Q100 560 250 600 Q380 640 500 580 L500 700 L0 700 Z" fill="#efe0cd" opacity="0.5" />
              {/* Sun glow */}
              <circle cx="380" cy="120" r="60" fill="#ffb595" opacity="0.2" />
              <circle cx="380" cy="120" r="30" fill="#ff8c42" opacity="0.25" />
            </svg>
            <div className="absolute inset-0 bg-linear-to-t from-primary/60 to-transparent" />
            <div className="absolute bottom-md left-md right-md text-on-primary">
              <h2 className="font-headline-md text-headline-md leading-tight mb-xs">Renew Your Motion</h2>
              <p className="font-label-md text-label-md opacity-90">Expert care in the heart of the desert.</p>
            </div>
          </div>

          {/* Right: Form area */}
          <div className="md:col-span-7 bg-surface p-gutter md:p-xl flex flex-col">
            {/* Logo */}
            <div className="mb-lg">
              <Link href="/" className="inline-block mb-md group">
                <span className="font-headline-md text-headline-md text-primary tracking-tight block group-hover:text-primary-container transition-colors">
                  Sossus Physiotherapy
                </span>
              </Link>
              <h1 className="font-headline-md text-headline-md text-on-surface">
                {isSignup ? 'Patient Portal — Create Account' : 'Patient Portal — Sign In'}
              </h1>
            </div>

            {/* Tab toggle */}
            <div className="flex border-b border-outline-variant/30 mb-lg">
              <button
                onClick={() => setMode('signin')}
                className={`pb-base px-md font-label-md text-label-md transition-all duration-300 ${
                  !isSignup
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                Sign In
              </button>
              <button
                onClick={() => setMode('signup')}
                className={`pb-base px-md font-label-md text-label-md transition-all duration-300 ${
                  isSignup
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                Create Account
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-lg">
              {/* Sign-up only: Full Name */}
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  isSignup ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="relative group pb-xs">
                  <label className="font-label-md text-label-md text-on-surface-variant block mb-xs">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={e => setFullName(e.target.value)}
                    placeholder="John Doe"
                    className="input-minimal w-full text-on-surface placeholder:text-outline-variant/50"
                    tabIndex={isSignup ? 0 : -1}
                  />
                </div>
              </div>

              {/* Email */}
              <div className="relative group pb-xs">
                <label className="font-label-md text-label-md text-on-surface-variant block mb-xs">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  required
                  className="input-minimal w-full text-on-surface placeholder:text-outline-variant/50"
                />
              </div>

              {/* Password */}
              <div className="relative group pb-xs">
                <div className="flex justify-between items-center mb-xs">
                  <label className="font-label-md text-label-md text-on-surface-variant">Password</label>
                  {!isSignup && (
                    <button
                      type="button"
                      className="text-label-md text-primary hover:underline"
                    >
                      Forgot Password?
                    </button>
                  )}
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="input-minimal w-full text-on-surface placeholder:text-outline-variant/50"
                />
              </div>

              {error && (
                <p className="text-error font-body-md text-sm bg-error-container/30 px-md py-sm rounded-lg">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-primary text-on-primary py-md rounded-lg font-label-md text-label-md hover:bg-primary-container transition-all duration-300 active:scale-[0.98] shadow-lg shadow-primary/20 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-sm"
              >
                {loading ? (
                  <>
                    <span className="material-symbols-outlined animate-spin text-[18px]">progress_activity</span>
                    Signing in…
                  </>
                ) : (
                  isSignup ? 'Create Account' : 'Continue'
                )}
              </button>
            </form>

            {/* Social logins */}
            <div className="mt-lg">
              <div className="relative flex items-center mb-lg">
                <div className="grow border-t border-outline-variant/30" />
                <span className="shrink mx-md font-label-md text-label-md text-on-surface-variant opacity-60">OR</span>
                <div className="grow border-t border-outline-variant/30" />
              </div>
              <div className="grid grid-cols-2 gap-md">
                <button className="flex items-center justify-center gap-base border border-outline-variant/50 py-sm rounded-lg hover:bg-secondary-fixed transition-colors duration-300">
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                  </svg>
                  <span className="font-label-md text-label-md">Google</span>
                </button>
                <button className="flex items-center justify-center gap-base border border-outline-variant/50 py-sm rounded-lg hover:bg-secondary-fixed transition-colors duration-300">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.06.75.79-.02 2.05-.89 3.46-.72 1.45.16 2.54.74 3.12 1.62-2.91 1.75-2.43 5.7.53 7.06-.63 1.55-1.5 3.08-2.17 4.26zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                  </svg>
                  <span className="font-label-md text-label-md">Apple</span>
                </button>
              </div>
            </div>

            {/* Guest action */}
            <div className="mt-auto pt-lg text-center">
              <p className="font-label-md text-label-md text-on-surface-variant mb-base">
                Don&apos;t want to create an account yet?
              </p>
              <Link
                href="/book/guest"
                className="text-primary font-label-md text-label-md hover:underline active:opacity-70 transition-all flex items-center justify-center mx-auto gap-xs"
              >
                Continue as Guest
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Transactional footer */}
      <footer className="w-full px-gutter py-md z-20 relative">
        <div className="max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-center gap-sm opacity-60">
          <p className="font-label-md text-label-md">© 2026 Sossus Physiotherapy. Kinetic Hospitality.</p>
          <div className="flex gap-md">
            <Link href="/legal" className="font-label-md text-label-md hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/legal" className="font-label-md text-label-md hover:text-primary transition-colors">Terms of Service</Link>
            <Link href="/contact" className="font-label-md text-label-md hover:text-primary transition-colors">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
