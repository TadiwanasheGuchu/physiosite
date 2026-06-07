'use client';

import { useState } from 'react';
import { useSession, signOut } from 'next-auth/react';
import Link from 'next/link';

const EXERCISES = [
  { name: 'Hip Flexor Stretch', sets: '3 × 45s', icon: 'self_improvement', done: true },
  { name: 'Bird Dog', sets: '3 × 12 reps', icon: 'fitness_center', done: true },
  { name: 'Glute Bridge', sets: '3 × 15 reps', icon: 'sports_gymnastics', done: false },
  { name: 'Cat-Cow Mobilisation', sets: '2 × 10 reps', icon: 'accessibility_new', done: false },
  { name: 'Dead Bug', sets: '3 × 10 reps', icon: 'fitness_center', done: false },
];

const SESSIONS = [
  { date: 'May 28, 2026', clinician: 'Dr. Elena Marais', type: 'Spinal Assessment', status: 'Completed' },
  { date: 'May 14, 2026', clinician: 'Dr. Elena Marais', type: 'Manual Therapy', status: 'Completed' },
  { date: 'Apr 30, 2026', clinician: 'Johan van Wyk', type: 'Sports Performance', status: 'Completed' },
];

const PROGRESS_METRICS = [
  { label: 'Pain Level', value: 3, max: 10, unit: '/10', color: 'bg-primary', icon: 'monitor_heart' },
  { label: 'Mobility Score', value: 72, max: 100, unit: '%', color: 'bg-secondary', icon: 'accessibility_new' },
  { label: 'Sessions Done', value: 8, max: 12, unit: '/12', color: 'bg-tertiary', icon: 'event_available' },
];

export default function PatientDashboardPage() {
  const { data: session } = useSession();
  const firstName = session?.user?.name?.split(' ')[0] ?? 'Patient';

  const [exerciseDone, setExerciseDone] = useState<Record<number, boolean>>(
    Object.fromEntries(EXERCISES.map((e, i) => [i, e.done]))
  );

  const completedCount = Object.values(exerciseDone).filter(Boolean).length;
  const totalExercises = EXERCISES.length;
  const exerciseProgress = Math.round((completedCount / totalExercises) * 100);

  const toggleExercise = (index: number) => {
    setExerciseDone(prev => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div>
      <div className="pb-xl px-gutter max-w-container-max mx-auto">
        {/* Welcome strip */}
        <div className="mt-lg mb-lg flex flex-col md:flex-row md:items-end justify-between gap-md">
          <div>
            <span className="font-label-md text-label-md text-primary uppercase tracking-widest block mb-xs">
              Recovery Hub
            </span>
            <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">
              Welcome back, {firstName}.
            </h1>
            <p className="text-body-lg text-on-surface-variant mt-xs">
              Week 4 of your Lower Back Recovery Programme.
            </p>
          </div>
          <div className="flex items-center gap-md self-start md:self-auto">
            <Link
              href="/book"
              className="bg-primary text-on-primary px-lg py-md rounded-full font-label-md text-label-md hover:bg-primary-container transition-all shadow-md active:scale-95 whitespace-nowrap"
            >
              Book Next Session
            </Link>
            <button
              onClick={() => signOut({ callbackUrl: "/portal/sign-in" })}
              className="border border-outline/40 text-on-surface-variant px-md py-md rounded-full font-label-md text-label-md hover:bg-surface-container transition-all whitespace-nowrap flex items-center gap-xs"
            >
              <span className="material-symbols-outlined text-[16px]">logout</span>
              Sign Out
            </button>
          </div>
        </div>

        {/* Main bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-md">

          {/* Upcoming appointment — spans 5 */}
          <div className="md:col-span-5 bento-card bg-primary text-on-primary rounded-xl p-lg flex flex-col gap-md relative overflow-hidden">
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-on-primary/5 rounded-full blur-2xl pointer-events-none" />
            <div className="flex justify-between items-start">
              <span className="font-label-md text-label-md uppercase tracking-widest opacity-80">
                Next Appointment
              </span>
              <span className="material-symbols-outlined opacity-60">calendar_month</span>
            </div>
            <div>
              <p className="font-headline-md text-headline-md leading-tight">Thursday, June 12</p>
              <p className="text-on-primary/80 font-body-lg">09:15 AM — 10:15 AM</p>
            </div>
            <div className="flex flex-col gap-xs border-t border-on-primary/20 pt-md">
              <div className="flex items-center gap-sm">
                <span className="material-symbols-outlined text-sm opacity-70">person</span>
                <span className="font-label-md text-label-md">Dr. Elena Marais</span>
              </div>
              <div className="flex items-center gap-sm">
                <span className="material-symbols-outlined text-sm opacity-70">location_on</span>
                <span className="font-label-md text-label-md">Windhoek Central Clinic</span>
              </div>
            </div>
            <div className="flex gap-sm mt-auto">
              <button className="flex-1 bg-on-primary/10 hover:bg-on-primary/20 text-on-primary py-sm rounded-lg font-label-md text-label-md transition-colors text-center">
                Directions
              </button>
              <button className="flex-1 bg-on-primary text-primary py-sm rounded-lg font-label-md text-label-md hover:bg-primary-fixed transition-colors text-center">
                Reschedule
              </button>
            </div>
          </div>

          {/* Progress metrics — spans 7 */}
          <div className="md:col-span-7 grid grid-rows-3 gap-md">
            {PROGRESS_METRICS.map(metric => (
              <div
                key={metric.label}
                className="bento-card bg-surface-container-low rounded-xl p-md border border-outline/10 flex items-center gap-md"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary">{metric.icon}</span>
                </div>
                <div className="grow">
                  <div className="flex justify-between items-baseline mb-xs">
                    <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">
                      {metric.label}
                    </span>
                    <span className="font-headline-md text-on-surface">
                      {metric.value}
                      <span className="text-sm font-body-md text-on-surface-variant">{metric.unit}</span>
                    </span>
                  </div>
                  <div className="h-2 w-full bg-surface-container rounded-full overflow-hidden">
                    <div
                      className={`h-full ${metric.color} rounded-full transition-all duration-700`}
                      style={{ width: `${(metric.value / metric.max) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Today's exercises — spans 7 */}
          <div className="md:col-span-7 bento-card bg-surface-container-low rounded-xl p-lg border border-outline/10">
            <div className="flex justify-between items-center mb-md">
              <div>
                <h2 className="font-headline-md text-headline-md text-on-surface">Today&apos;s Exercises</h2>
                <p className="text-on-surface-variant text-sm mt-xs">
                  {completedCount} of {totalExercises} completed
                </p>
              </div>
              <div className="relative w-14 h-14">
                <svg viewBox="0 0 56 56" className="w-full h-full -rotate-90">
                  <circle cx="28" cy="28" r="22" fill="none" stroke="#e3efff" strokeWidth="4" />
                  <circle
                    cx="28" cy="28" r="22"
                    fill="none"
                    stroke="#9e3d00"
                    strokeWidth="4"
                    strokeDasharray={`${2 * Math.PI * 22}`}
                    strokeDashoffset={`${2 * Math.PI * 22 * (1 - exerciseProgress / 100)}`}
                    strokeLinecap="round"
                    className="transition-all duration-500"
                  />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center font-label-md text-label-md text-primary">
                  {exerciseProgress}%
                </span>
              </div>
            </div>

            <div className="space-y-sm">
              {EXERCISES.map((exercise, i) => (
                <button
                  key={exercise.name}
                  onClick={() => toggleExercise(i)}
                  className={`w-full flex items-center gap-md p-md rounded-xl border transition-all text-left ${
                    exerciseDone[i]
                      ? 'bg-primary/5 border-primary/20'
                      : 'bg-surface border-outline/10 hover:border-primary/20'
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                      exerciseDone[i] ? 'bg-primary text-on-primary' : 'bg-surface-container text-on-surface-variant'
                    }`}
                  >
                    <span className="material-symbols-outlined text-base">
                      {exerciseDone[i] ? 'check' : exercise.icon}
                    </span>
                  </div>
                  <div className="grow">
                    <p
                      className={`font-label-md text-label-md transition-colors ${
                        exerciseDone[i] ? 'text-on-surface/50 line-through' : 'text-on-surface'
                      }`}
                    >
                      {exercise.name}
                    </p>
                    <p className="text-xs text-on-surface-variant">{exercise.sets}</p>
                  </div>
                  <span
                    className={`material-symbols-outlined text-sm transition-opacity ${
                      exerciseDone[i] ? 'text-primary opacity-100' : 'opacity-20'
                    }`}
                  >
                    check_circle
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Right column: Pain check + Quick actions */}
          <div className="md:col-span-5 flex flex-col gap-md">
            {/* Pain check CTA */}
            <div className="bento-card bg-secondary-container rounded-xl p-lg flex flex-col gap-md">
              <div className="flex items-center gap-sm">
                <span className="material-symbols-outlined text-on-secondary-container text-3xl">
                  orthopedics
                </span>
                <div>
                  <h3 className="font-headline-md text-headline-md text-on-surface">Pain Check-in</h3>
                  <p className="text-sm text-on-surface-variant">How are you feeling today?</p>
                </div>
              </div>
              <p className="text-on-secondary-container/80 font-body-md text-sm">
                Log your daily pain level to help your physiotherapist track your recovery trajectory.
              </p>
              <Link
                href="/assess"
                className="bg-primary text-on-primary px-md py-sm rounded-lg font-label-md text-label-md hover:bg-primary-container transition-all text-center"
              >
                Start Check-in
              </Link>
            </div>

            {/* Quick actions */}
            <div className="bento-card bg-surface-container-low rounded-xl p-lg border border-outline/10 flex flex-col gap-sm">
              <h3 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-xs">
                Quick Actions
              </h3>
              {[
                { icon: 'chat_bubble', label: 'Message Your Physio', href: '/contact' },
                { icon: 'article', label: 'View Treatment Plan', href: '#' },
                { icon: 'download', label: 'Download Session Notes', href: '#' },
                { icon: 'medical_services', label: 'Request Medical Certificate', href: '#' },
              ].map(action => (
                <Link
                  key={action.label}
                  href={action.href}
                  className="flex items-center gap-md py-sm px-md rounded-lg hover:bg-surface-container transition-colors group"
                >
                  <span className="material-symbols-outlined text-primary text-xl">{action.icon}</span>
                  <span className="font-label-md text-label-md text-on-surface grow">{action.label}</span>
                  <span className="material-symbols-outlined text-outline text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    arrow_forward
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Session history — full width */}
          <div className="md:col-span-12 bento-card bg-surface-container-low rounded-xl p-lg border border-outline/10">
            <div className="flex justify-between items-center mb-md">
              <h2 className="font-headline-md text-headline-md text-on-surface">Session History</h2>
              <button className="text-primary font-label-md text-label-md hover:underline">View All</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-outline/10">
                    <th className="text-left font-label-md text-label-md text-on-surface-variant uppercase tracking-wider pb-sm">Date</th>
                    <th className="text-left font-label-md text-label-md text-on-surface-variant uppercase tracking-wider pb-sm">Clinician</th>
                    <th className="text-left font-label-md text-label-md text-on-surface-variant uppercase tracking-wider pb-sm hidden md:table-cell">Session Type</th>
                    <th className="text-left font-label-md text-label-md text-on-surface-variant uppercase tracking-wider pb-sm">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline/5">
                  {SESSIONS.map(session => (
                    <tr key={session.date} className="hover:bg-surface-container/50 transition-colors group">
                      <td className="py-md font-body-md text-on-surface">{session.date}</td>
                      <td className="py-md font-body-md text-on-surface">{session.clinician}</td>
                      <td className="py-md font-body-md text-on-surface-variant hidden md:table-cell">{session.type}</td>
                      <td className="py-md">
                        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-label-md text-label-md uppercase text-xs">
                          {session.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
