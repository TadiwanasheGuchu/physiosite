'use client';

import { useState } from 'react';
import Link from 'next/link';

type PainArea = 'shoulder' | 'lower-back' | 'knee';

interface PainEntry {
  area: PainArea;
  label: string;
  severity: number | null;
  sensation: string | null;
}

const PAIN_POINTS: { id: PainArea; label: string; top: string; left: string }[] = [
  { id: 'shoulder', label: 'Shoulder', top: '25%', left: '40%' },
  { id: 'lower-back', label: 'Lower Back', top: '48%', left: 'calc(50% - 16px)' },
  { id: 'knee', label: 'Knee', top: '72%', left: '44%' },
];

const SENSATION_OPTIONS = [
  { value: 'sharp', label: 'Sharp / Stabbing', description: 'Sudden, intense localized pain' },
  { value: 'dull', label: 'Dull Ache', description: 'Constant, low-level soreness' },
  { value: 'burning', label: 'Burning', description: 'Hot, radiating discomfort' },
  { value: 'throbbing', label: 'Throbbing', description: 'Pulsing, rhythmic pain' },
];

export default function AssessPage() {
  const [selectedArea, setSelectedArea] = useState<PainArea | null>(null);
  const [painEntries, setPainEntries] = useState<Record<PainArea, PainEntry>>({
    shoulder: { area: 'shoulder', label: 'Shoulder', severity: null, sensation: null },
    'lower-back': { area: 'lower-back', label: 'Lower Back', severity: null, sensation: null },
    knee: { area: 'knee', label: 'Knee', severity: null, sensation: null },
  });
  const [view, setView] = useState<'front' | 'back'>('front');
  const [timeline, setTimeline] = useState<string | null>(null);
  const [mobility, setMobility] = useState('');

  const handlePointClick = (area: PainArea) => {
    setSelectedArea(area);
  };

  const setSeverity = (area: PainArea, value: number) => {
    setPainEntries(prev => ({ ...prev, [area]: { ...prev[area], severity: value } }));
  };

  const setSensation = (area: PainArea, value: string) => {
    setPainEntries(prev => ({ ...prev, [area]: { ...prev[area], sensation: value } }));
  };

  const resetMap = () => {
    setSelectedArea(null);
    setPainEntries({
      shoulder: { area: 'shoulder', label: 'Shoulder', severity: null, sensation: null },
      'lower-back': { area: 'lower-back', label: 'Lower Back', severity: null, sensation: null },
      knee: { area: 'knee', label: 'Knee', severity: null, sensation: null },
    });
    setTimeline(null);
    setMobility('');
  };

  const hasSelection = selectedArea !== null;
  const currentEntry = selectedArea ? painEntries[selectedArea] : null;
  const canContinue = hasSelection && currentEntry?.severity !== null && currentEntry?.sensation !== null;

  return (
    <main className="pt-xl pb-xl px-gutter max-w-container-max mx-auto">
      {/* Header */}
      <header className="text-center mt-xl mb-lg">
        <span className="font-label-md text-label-md text-primary uppercase tracking-widest block mb-xs">
          Diagnostic Assessment
        </span>
        <h1 className="font-headline-lg text-headline-lg md:text-display-lg text-on-surface">
          Map Your Discomfort
        </h1>
        <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto mt-sm">
          Select the areas on the map where you are experiencing pain or tension to help us prepare your personalized care plan.
        </p>
      </header>

      {/* Assessment Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-md items-stretch">

        {/* Left: Anatomical Map */}
        <section className="lg:col-span-7 bg-surface-container rounded-xl border border-outline/10 overflow-hidden min-h-[600px] relative flex items-center justify-center group">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />

          <div className="relative w-full h-full flex items-center justify-center">
            {/* Body diagram placeholder */}
            <div className="relative w-64 h-[500px] flex items-center justify-center">
              {/* Stylised body silhouette using CSS */}
              <svg
                viewBox="0 0 200 480"
                className="w-full h-full opacity-30"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                {/* Head */}
                <ellipse cx="100" cy="40" rx="28" ry="32" className="text-on-surface" />
                {/* Neck */}
                <rect x="88" y="70" width="24" height="20" rx="4" className="text-on-surface" />
                {/* Torso */}
                <path d="M60 90 L140 90 L148 240 L52 240 Z" className="text-on-surface" />
                {/* Left arm */}
                <path d="M60 95 L30 170 L38 310 L50 310 L55 175 L70 110" className="text-on-surface" />
                {/* Right arm */}
                <path d="M140 95 L170 170 L162 310 L150 310 L145 175 L130 110" className="text-on-surface" />
                {/* Left leg */}
                <path d="M75 240 L65 370 L70 470 L90 470 L95 380 L100 240" className="text-on-surface" />
                {/* Right leg */}
                <path d="M125 240 L135 370 L130 470 L110 470 L105 380 L100 240" className="text-on-surface" />
              </svg>

              {/* Pain point hotspots */}
              {PAIN_POINTS.map(point => {
                const isSelected = selectedArea === point.id;
                const hasData = painEntries[point.id].severity !== null;
                return (
                  <button
                    key={point.id}
                    className="absolute group/point"
                    style={{ top: point.top, left: point.left }}
                    onClick={() => handlePointClick(point.id)}
                    aria-label={`Select ${point.label}`}
                  >
                    <span className="relative flex h-8 w-8">
                      <span
                        className={`pain-point-pulse absolute inline-flex h-full w-full rounded-full opacity-75 ${
                          isSelected ? 'bg-primary' : hasData ? 'bg-primary/60' : 'bg-primary'
                        }`}
                      />
                      <span
                        className={`relative inline-flex rounded-full h-8 w-8 border-2 transition-all ${
                          isSelected
                            ? 'bg-primary border-on-primary scale-110'
                            : hasData
                            ? 'bg-primary/70 border-on-primary'
                            : 'bg-primary border-on-primary'
                        }`}
                      />
                    </span>
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-inverse-surface text-inverse-on-surface px-sm py-xs rounded text-xs opacity-0 group-hover/point:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                      {point.label}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* View toggle */}
          <div className="absolute bottom-md left-md flex gap-xs">
            <button
              onClick={() => setView('front')}
              className={`px-md py-2 rounded-lg font-label-md text-label-md border border-outline/10 shadow-sm transition-colors ${
                view === 'front' ? 'bg-surface text-primary' : 'bg-secondary-container/50 text-on-secondary-container hover:bg-surface'
              }`}
            >
              Front View
            </button>
            <button
              onClick={() => setView('back')}
              className={`px-md py-2 rounded-lg font-label-md text-label-md border border-outline/10 shadow-sm transition-colors ${
                view === 'back' ? 'bg-surface text-primary' : 'bg-secondary-container/50 text-on-secondary-container hover:bg-surface'
              }`}
            >
              Back View
            </button>
          </div>
        </section>

        {/* Right: Assessment Details */}
        <section className="lg:col-span-5 flex flex-col gap-md">
          {/* Selection Card */}
          <div className="bg-surface-container-high rounded-xl p-lg border border-outline/10 flex-grow shadow-sm">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-md">Assessment Progress</h2>

            {!hasSelection ? (
              <div className="text-center py-xl">
                <span className="material-symbols-outlined text-outline text-5xl mb-sm block">location_on</span>
                <p className="text-on-surface-variant font-body-md">
                  Tap any highlighted point on the map to begin your assessment.
                </p>
              </div>
            ) : (
              <div className="step-transition opacity-100 translate-y-0">
                {/* Step 1: Severity */}
                <div className="flex items-center gap-xs mb-md">
                  <span className="bg-primary text-on-primary w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0">1</span>
                  <h3 className="font-label-md text-on-surface uppercase tracking-wider">Pain Intensity</h3>
                </div>
                <p className="text-on-surface-variant mb-md">
                  On a scale of 1–10, how intense is your {currentEntry?.label.toLowerCase()} discomfort?
                </p>
                <div className="flex flex-wrap gap-2 mb-lg">
                  {Array.from({ length: 10 }, (_, i) => i + 1).map(n => (
                    <button
                      key={n}
                      onClick={() => setSeverity(selectedArea!, n)}
                      className={`w-12 h-12 rounded-lg border-2 transition-all font-medium ${
                        currentEntry?.severity === n
                          ? 'border-primary bg-primary-fixed text-primary font-bold'
                          : 'border-outline-variant text-on-surface hover:bg-primary hover:text-on-primary hover:border-primary'
                      }`}
                    >
                      {n}
                    </button>
                  ))}
                </div>

                {/* Step 2: Sensation */}
                <div className="flex items-center gap-xs mb-md mt-lg border-t border-outline/10 pt-lg">
                  <span className="bg-outline text-on-primary w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0">2</span>
                  <h3 className="font-label-md text-on-surface-variant uppercase tracking-wider">Type of Sensation</h3>
                </div>
                <div className="grid grid-cols-2 gap-sm">
                  {SENSATION_OPTIONS.map(opt => (
                    <button
                      key={opt.value}
                      onClick={() => setSensation(selectedArea!, opt.value)}
                      className={`p-md rounded-xl border text-left transition-colors ${
                        currentEntry?.sensation === opt.value
                          ? 'border-primary bg-primary-fixed/20'
                          : 'bg-surface border-outline/10 hover:border-primary'
                      }`}
                    >
                      <span className="font-label-md text-label-md block mb-1">{opt.label}</span>
                      <span className="text-xs text-on-surface-variant">{opt.description}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Action Bar */}
          <div className="flex gap-sm">
            <button
              onClick={resetMap}
              className="flex-1 bg-surface-container border border-outline/20 text-on-surface-variant py-md rounded-xl font-label-md text-label-md hover:bg-surface transition-all flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-lg">refresh</span>
              Reset Map
            </button>
            {canContinue ? (
              <Link
                href="/book"
                className="flex-[2] bg-primary text-on-primary py-md rounded-xl font-label-md text-label-md hover:bg-primary-container transition-all flex items-center justify-center gap-2"
              >
                Continue to Summary
                <span className="material-symbols-outlined">chevron_right</span>
              </Link>
            ) : (
              <button
                disabled
                className="flex-[2] bg-primary/20 text-on-surface/40 py-md rounded-xl font-label-md text-label-md cursor-not-allowed flex items-center justify-center gap-2"
              >
                Continue to Summary
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            )}
          </div>
        </section>
      </div>

      {/* Descriptive Symptoms Section */}
      <section className="mt-lg grid grid-cols-1 md:grid-cols-3 gap-md">
        {/* Timeline */}
        <div className="bg-secondary-container p-lg rounded-xl flex flex-col gap-sm">
          <span className="material-symbols-outlined text-primary text-3xl">schedule</span>
          <h4 className="font-headline-md text-headline-md text-on-surface">Timeline</h4>
          <p className="text-on-secondary-container/80 font-body-md">
            Has this pain persisted for more than 48 hours or is it a recurring injury?
          </p>
          <div className="mt-auto flex gap-2 flex-wrap">
            {['Acute', 'Chronic', 'Recurring'].map(t => (
              <button
                key={t}
                onClick={() => setTimeline(timeline === t ? null : t)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                  timeline === t
                    ? 'bg-primary text-on-primary'
                    : 'bg-surface/50 text-on-surface hover:bg-surface'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Mobility */}
        <div className="bg-surface-container p-lg rounded-xl border border-outline/10 flex flex-col gap-sm">
          <span className="material-symbols-outlined text-primary text-3xl">accessibility_new</span>
          <h4 className="font-headline-md text-headline-md text-on-surface">Mobility</h4>
          <p className="text-on-surface-variant font-body-md">
            Does the pain limit your range of motion during daily activities like lifting or walking?
          </p>
          <select
            value={mobility}
            onChange={e => setMobility(e.target.value)}
            className="bg-surface border border-outline/20 rounded-lg text-body-md mt-sm focus:ring-primary focus:border-primary px-sm py-xs"
          >
            <option value="">Select Impact...</option>
            <option>Severe Limitation</option>
            <option>Moderate Difficulty</option>
            <option>Slight Stiffness</option>
            <option>No Limitation</option>
          </select>
        </div>

        {/* CTA */}
        <div className="bg-primary text-on-primary p-lg rounded-xl flex flex-col justify-center items-center text-center gap-md">
          <h4 className="font-headline-md text-headline-md">Ready to start healing?</h4>
          <p className="opacity-90">Book a comprehensive physical assessment with our desert specialists.</p>
          <Link
            href="/book"
            className="bg-on-primary text-primary px-lg py-md rounded-full font-label-md text-label-md hover:shadow-xl transition-all w-full text-center"
          >
            Schedule Appointment
          </Link>
        </div>
      </section>
    </main>
  );
}
