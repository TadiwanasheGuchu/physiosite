'use client';

import { useState } from 'react';
import Link from 'next/link';

const METRICS = [
  { label: 'Appointments Today', value: '14', delta: '+2 vs yesterday', icon: 'event_available', positive: true },
  { label: 'Active Patients', value: '87', delta: '+5 this week', icon: 'group', positive: true },
  { label: 'Avg Wait Time', value: '6 min', delta: '-2 min vs last week', icon: 'schedule', positive: true },
  { label: 'Room Utilisation', value: '78%', delta: '-4% vs target', icon: 'meeting_room', positive: false },
];

const SCHEDULE = [
  { time: '08:00', patient: 'Michael Amukoto', type: 'Initial Assessment', clinician: 'Dr. Marais', room: 'A1', status: 'completed' },
  { time: '09:15', patient: 'Sarah Nghipondoka', type: 'Lower Back Therapy', clinician: 'Dr. Marais', room: 'A1', status: 'completed' },
  { time: '10:00', patient: 'Pieter van Zyl', type: 'Sports Performance', clinician: 'J. van Wyk', room: 'B2', status: 'in-progress' },
  { time: '11:00', patient: 'Anna-Marie Swart', type: 'Follow-up Session', clinician: 'Dr. Marais', room: 'A1', status: 'upcoming' },
  { time: '12:30', patient: 'Festus Haimbodi', type: 'Virtual Consult', clinician: 'J. van Wyk', room: 'Virtual', status: 'upcoming' },
  { time: '14:00', patient: 'Claudia Nakale', type: 'Post-op Rehab', clinician: 'Dr. Marais', room: 'A2', status: 'upcoming' },
  { time: '15:30', patient: 'Heinrich Müller', type: 'Initial Assessment', clinician: 'J. van Wyk', room: 'B2', status: 'upcoming' },
];

const STAFF = [
  { name: 'Dr. Elena Marais', role: 'Senior Specialist', sessions: 6, status: 'busy', next: '11:00 – Anna-Marie Swart' },
  { name: 'Johan van Wyk', role: 'Lead Clinician', sessions: 5, status: 'available', next: '12:30 – Festus Haimbodi' },
  { name: 'Lerato Mokoena', role: 'Physiotherapist', sessions: 3, status: 'break', next: '14:30 – Thomas Kapia' },
];

const ACTIVITY = [
  { text: 'New booking by Festus Haimbodi for Virtual Consult', time: '9 min ago', icon: 'event_available' },
  { text: 'Dr. Marais completed session with Sarah Nghipondoka', time: '34 min ago', icon: 'check_circle' },
  { text: 'Treatment plan updated for Michael Amukoto', time: '1 hr ago', icon: 'edit_note' },
  { text: 'Invoice #2041 generated — N$ 1,200.00', time: '2 hr ago', icon: 'receipt_long' },
  { text: 'Anna-Marie Swart confirmed appointment', time: '3 hr ago', icon: 'notifications' },
];

const STATUS_STYLES: Record<string, string> = {
  completed: 'bg-tertiary/10 text-tertiary',
  'in-progress': 'bg-primary/10 text-primary',
  upcoming: 'bg-surface-container text-on-surface-variant',
};

const STAFF_STATUS: Record<string, { dot: string; label: string }> = {
  busy: { dot: 'bg-primary', label: 'In Session' },
  available: { dot: 'bg-secondary', label: 'Available' },
  break: { dot: 'bg-tertiary', label: 'On Break' },
};

export default function AdminDashboardPage() {
  const [selectedDate] = useState('Today — Thursday, June 6 2026');

  return (
    <div className="pb-xl px-gutter max-w-container-max mx-auto">
      {/* Admin header bar */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-md mb-lg mt-lg">
        <div>
          <span className="font-label-md text-label-md text-primary uppercase tracking-widest block mb-xs">
            Admin Console
          </span>
          <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">
            Clinic Overview
          </h1>
          <p className="text-on-surface-variant font-body-md mt-xs">{selectedDate}</p>
        </div>
        <div className="flex gap-sm flex-wrap">
          <Link
            href="/admin/treatment-plans"
            className="flex items-center gap-xs border border-outline/30 text-on-surface px-md py-sm rounded-lg font-label-md text-label-md hover:bg-secondary-container/30 transition-colors"
          >
            <span className="material-symbols-outlined text-base">edit_note</span>
            Treatment Plans
          </Link>
          <Link
            href="/book"
            className="flex items-center gap-xs bg-primary text-on-primary px-md py-sm rounded-lg font-label-md text-label-md hover:bg-primary-container transition-colors shadow-md"
          >
            <span className="material-symbols-outlined text-base">add</span>
            New Booking
          </Link>
        </div>
      </div>

      {/* Metrics strip */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-md mb-md">
        {METRICS.map(m => (
          <div key={m.label} className="bento-card bg-surface-container-low rounded-xl p-md border border-outline/10 flex flex-col gap-sm">
            <div className="flex justify-between items-start">
              <span className="material-symbols-outlined text-primary text-xl">{m.icon}</span>
              <span className={`text-xs font-label-md ${m.positive ? 'text-secondary' : 'text-error'}`}>
                {m.delta}
              </span>
            </div>
            <div>
              <p className="font-headline-md text-headline-md text-on-surface leading-none">{m.value}</p>
              <p className="text-xs text-on-surface-variant mt-xs font-label-md uppercase tracking-wider">{m.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Main grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-md">

        {/* Today's schedule — spans 8 */}
        <div className="lg:col-span-8 bento-card bg-surface-container-low rounded-xl p-lg border border-outline/10">
          <div className="flex justify-between items-center mb-md">
            <h2 className="font-headline-md text-headline-md text-on-surface">Today&apos;s Schedule</h2>
            <span className="text-xs font-label-md text-on-surface-variant">
              {SCHEDULE.filter(s => s.status === 'completed').length}/{SCHEDULE.length} done
            </span>
          </div>

          <div className="space-y-sm">
            {SCHEDULE.map((appt, i) => (
              <div
                key={i}
                className={`flex items-center gap-md p-md rounded-xl transition-colors ${
                  appt.status === 'in-progress'
                    ? 'bg-primary/5 border border-primary/20'
                    : 'bg-surface border border-outline/5 hover:border-outline/20'
                }`}
              >
                {/* Time */}
                <div className="w-14 shrink-0 text-center">
                  <p className="font-label-md text-label-md text-on-surface">{appt.time}</p>
                </div>

                {/* Divider line */}
                <div className="w-px h-10 bg-outline/10 shrink-0" />

                {/* Patient info */}
                <div className="grow min-w-0">
                  <p className="font-label-md text-label-md text-on-surface truncate">{appt.patient}</p>
                  <p className="text-xs text-on-surface-variant truncate">{appt.type}</p>
                </div>

                {/* Clinician */}
                <div className="hidden md:block shrink-0 text-right">
                  <p className="text-xs font-label-md text-on-surface">{appt.clinician}</p>
                  <p className="text-xs text-on-surface-variant">{appt.room}</p>
                </div>

                {/* Status chip */}
                <span className={`px-3 py-1 rounded-full text-xs font-label-md uppercase shrink-0 ${STATUS_STYLES[appt.status]}`}>
                  {appt.status === 'in-progress' ? 'Now' : appt.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right column — spans 4 */}
        <div className="lg:col-span-4 flex flex-col gap-md">

          {/* Staff status */}
          <div className="bento-card bg-surface-container-low rounded-xl p-lg border border-outline/10">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-md">Staff Status</h2>
            <div className="space-y-md">
              {STAFF.map(s => (
                <div key={s.name} className="flex items-start gap-sm">
                  <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center shrink-0 mt-xs">
                    <span className="font-label-md text-label-md text-on-primary-fixed text-xs">
                      {s.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                    </span>
                  </div>
                  <div className="grow min-w-0">
                    <div className="flex items-center gap-xs">
                      <p className="font-label-md text-label-md text-on-surface truncate">{s.name}</p>
                      <span className={`w-2 h-2 rounded-full shrink-0 ${STAFF_STATUS[s.status].dot}`} />
                    </div>
                    <p className="text-xs text-on-surface-variant">{s.role}</p>
                    <p className="text-xs text-on-surface-variant mt-xs truncate">
                      <span className="text-primary font-medium">{STAFF_STATUS[s.status].label}</span>
                      {s.next && ` · Next: ${s.next}`}
                    </p>
                  </div>
                  <div className="shrink-0 text-right">
                    <p className="font-label-md text-label-md text-on-surface">{s.sessions}</p>
                    <p className="text-xs text-on-surface-variant">sessions</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Activity feed */}
          <div className="bento-card bg-surface-container-low rounded-xl p-lg border border-outline/10 grow">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-md">Recent Activity</h2>
            <div className="space-y-sm">
              {ACTIVITY.map((item, i) => (
                <div key={i} className="flex items-start gap-sm py-sm border-b border-outline/5 last:border-0">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-xs">
                    <span className="material-symbols-outlined text-primary text-sm">{item.icon}</span>
                  </div>
                  <div className="grow min-w-0">
                    <p className="text-sm text-on-surface leading-snug">{item.text}</p>
                    <p className="text-xs text-on-surface-variant mt-xs">{item.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Revenue snapshot — full width bottom */}
        <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-md">
          <div className="bento-card bg-primary text-on-primary rounded-xl p-lg flex flex-col gap-sm">
            <span className="material-symbols-outlined opacity-70">payments</span>
            <p className="font-headline-md text-headline-md">N$ 12,400</p>
            <p className="font-label-md text-label-md opacity-80 uppercase tracking-wider">Revenue this week</p>
            <div className="mt-auto">
              <div className="h-1 w-full bg-on-primary/20 rounded-full overflow-hidden">
                <div className="h-full bg-on-primary rounded-full" style={{ width: '72%' }} />
              </div>
              <p className="text-xs opacity-70 mt-xs">72% of monthly target</p>
            </div>
          </div>
          <div className="bento-card bg-secondary-container rounded-xl p-lg flex flex-col gap-sm">
            <span className="material-symbols-outlined text-on-secondary-container">pending_actions</span>
            <p className="font-headline-md text-headline-md text-on-surface">4</p>
            <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Outstanding invoices</p>
            <button className="mt-auto text-primary font-label-md text-label-md text-left hover:underline">
              View all →
            </button>
          </div>
          <div className="bento-card bg-surface-container-low rounded-xl p-lg border border-outline/10 flex flex-col gap-sm">
            <span className="material-symbols-outlined text-primary">star_rate</span>
            <p className="font-headline-md text-headline-md text-on-surface">4.9 / 5</p>
            <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Patient satisfaction</p>
            <p className="text-xs text-on-surface-variant mt-auto">Based on 63 reviews this month</p>
          </div>
        </div>
      </div>
    </div>
  );
}
