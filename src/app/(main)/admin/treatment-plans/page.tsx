'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Exercise {
  id: string;
  name: string;
  category: string;
  icon: string;
  sets: string;
  reps: string;
  frequency: string;
}

interface PlanItem extends Exercise {
  notes: string;
}

const PATIENTS = [
  { id: '1', name: 'Sarah Nghipondoka', condition: 'Lower Back — Week 4', avatar: 'SN' },
  { id: '2', name: 'Michael Amukoto', condition: 'Shoulder — Initial', avatar: 'MA' },
  { id: '3', name: 'Pieter van Zyl', condition: 'Sports Knee — Week 2', avatar: 'PZ' },
  { id: '4', name: 'Anna-Marie Swart', condition: 'Hip — Post-op Week 6', avatar: 'AS' },
];

const EXERCISE_LIBRARY: Exercise[] = [
  { id: 'e1', name: 'Bird Dog', category: 'Core', icon: 'fitness_center', sets: '3', reps: '12 each side', frequency: 'Daily' },
  { id: 'e2', name: 'Glute Bridge', category: 'Hips', icon: 'sports_gymnastics', sets: '3', reps: '15', frequency: 'Daily' },
  { id: 'e3', name: 'Dead Bug', category: 'Core', icon: 'fitness_center', sets: '3', reps: '10 each side', frequency: 'Daily' },
  { id: 'e4', name: 'Cat-Cow', category: 'Spine', icon: 'accessibility_new', sets: '2', reps: '10', frequency: 'Twice daily' },
  { id: 'e5', name: 'Hip Flexor Stretch', category: 'Flexibility', icon: 'self_improvement', sets: '3', reps: '45s hold', frequency: 'Daily' },
  { id: 'e6', name: 'Clamshell', category: 'Hips', icon: 'sports_gymnastics', sets: '3', reps: '15 each side', frequency: 'Daily' },
  { id: 'e7', name: 'Pallof Press', category: 'Core', icon: 'fitness_center', sets: '3', reps: '10 each side', frequency: '3× / week' },
  { id: 'e8', name: 'Thoracic Rotation', category: 'Spine', icon: 'rotate_right', sets: '2', reps: '10 each side', frequency: 'Daily' },
  { id: 'e9', name: 'Single-leg Deadlift', category: 'Balance', icon: 'sports_gymnastics', sets: '3', reps: '8 each side', frequency: '3× / week' },
  { id: 'e10', name: 'Seated Hamstring Stretch', category: 'Flexibility', icon: 'self_improvement', sets: '2', reps: '30s hold', frequency: 'Daily' },
];

const CATEGORIES = ['All', 'Core', 'Hips', 'Spine', 'Flexibility', 'Balance'];

const GOALS = [
  'Reduce pain to ≤ 2/10 by week 8',
  'Restore full lumbar flexion',
  'Return to work without limitations',
];

export default function TreatmentPlanBuilderPage() {
  const [selectedPatient, setSelectedPatient] = useState(PATIENTS[0]);
  const [planItems, setPlanItems] = useState<PlanItem[]>([
    { ...EXERCISE_LIBRARY[0], notes: '' },
    { ...EXERCISE_LIBRARY[1], notes: '' },
    { ...EXERCISE_LIBRARY[3], notes: 'Focus on lumbar segment only' },
  ]);
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [search, setSearch] = useState('');
  const [planTitle, setPlanTitle] = useState('Lower Back Recovery — Phase 2');
  const [goals, setGoals] = useState(GOALS);
  const [newGoal, setNewGoal] = useState('');
  const [saved, setSaved] = useState(false);

  const filteredExercises = EXERCISE_LIBRARY.filter(e => {
    const matchesCategory = categoryFilter === 'All' || e.category === categoryFilter;
    const matchesSearch = e.name.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const addExercise = (exercise: Exercise) => {
    if (planItems.find(p => p.id === exercise.id)) return;
    setPlanItems(prev => [...prev, { ...exercise, notes: '' }]);
  };

  const removeItem = (id: string) => {
    setPlanItems(prev => prev.filter(p => p.id !== id));
  };

  const updateNotes = (id: string, notes: string) => {
    setPlanItems(prev => prev.map(p => p.id === id ? { ...p, notes } : p));
  };

  const addGoal = () => {
    if (newGoal.trim()) {
      setGoals(prev => [...prev, newGoal.trim()]);
      setNewGoal('');
    }
  };

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  const isInPlan = (id: string) => planItems.some(p => p.id === id);

  return (
    <div className="pb-xl px-gutter max-w-container-max mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-md mb-lg mt-lg">
        <div>
          <div className="flex items-center gap-sm mb-xs">
            <Link
              href="/admin"
              className="flex items-center gap-xs text-on-surface-variant hover:text-primary transition-colors font-label-md text-label-md group"
            >
              <span className="material-symbols-outlined text-base group-hover:-translate-x-0.5 transition-transform">arrow_back</span>
              Clinic Overview
            </Link>
            <span className="text-outline/40">/</span>
            <span className="font-label-md text-label-md text-primary">Treatment Plans</span>
          </div>
          <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">
            Plan Builder
          </h1>
        </div>
        <button
          onClick={handleSave}
          className={`flex items-center gap-sm px-lg py-md rounded-lg font-label-md text-label-md transition-all shadow-md ${
            saved
              ? 'bg-secondary text-on-secondary'
              : 'bg-primary text-on-primary hover:bg-primary-container'
          }`}
        >
          <span className="material-symbols-outlined text-base">
            {saved ? 'check' : 'save'}
          </span>
          {saved ? 'Saved!' : 'Save Plan'}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-md items-start">

        {/* Left panel: Patient + Exercise Library */}
        <div className="lg:col-span-4 flex flex-col gap-md">

          {/* Patient selector */}
          <div className="bento-card bg-surface-container-low rounded-xl p-md border border-outline/10">
            <h2 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-md">Patient</h2>
            <div className="space-y-xs">
              {PATIENTS.map(patient => (
                <button
                  key={patient.id}
                  onClick={() => setSelectedPatient(patient)}
                  className={`w-full flex items-center gap-md p-sm rounded-xl transition-all text-left ${
                    selectedPatient.id === patient.id
                      ? 'bg-primary/10 border border-primary/30'
                      : 'hover:bg-surface-container border border-transparent'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                    selectedPatient.id === patient.id ? 'bg-primary text-on-primary' : 'bg-primary-fixed text-on-primary-fixed'
                  }`}>
                    <span className="font-label-md text-xs">{patient.avatar}</span>
                  </div>
                  <div className="grow min-w-0">
                    <p className="font-label-md text-label-md text-on-surface truncate">{patient.name}</p>
                    <p className="text-xs text-on-surface-variant truncate">{patient.condition}</p>
                  </div>
                  {selectedPatient.id === patient.id && (
                    <span className="material-symbols-outlined text-primary text-base shrink-0">check_circle</span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Exercise library */}
          <div className="bento-card bg-surface-container-low rounded-xl p-md border border-outline/10">
            <h2 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-md">Exercise Library</h2>

            {/* Search */}
            <div className="relative mb-sm">
              <span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-outline text-base">search</span>
              <input
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search exercises..."
                className="w-full bg-surface border border-outline/20 rounded-lg pl-9 pr-sm py-sm text-body-md focus:outline-none focus:border-primary transition-colors"
              />
            </div>

            {/* Category filter */}
            <div className="flex flex-wrap gap-xs mb-md">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setCategoryFilter(cat)}
                  className={`px-sm py-xs rounded-full text-xs font-label-md transition-colors ${
                    categoryFilter === cat
                      ? 'bg-primary text-on-primary'
                      : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Exercise list */}
            <div className="space-y-xs max-h-80 overflow-y-auto pr-xs">
              {filteredExercises.map(exercise => (
                <div
                  key={exercise.id}
                  className={`flex items-center gap-sm p-sm rounded-xl border transition-all ${
                    isInPlan(exercise.id)
                      ? 'bg-primary/5 border-primary/20 opacity-60'
                      : 'bg-surface border-outline/5 hover:border-primary/30 cursor-pointer'
                  }`}
                  onClick={() => !isInPlan(exercise.id) && addExercise(exercise)}
                >
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary text-sm">{exercise.icon}</span>
                  </div>
                  <div className="grow min-w-0">
                    <p className="font-label-md text-xs text-on-surface truncate">{exercise.name}</p>
                    <p className="text-xs text-on-surface-variant">{exercise.sets} × {exercise.reps}</p>
                  </div>
                  <span className={`material-symbols-outlined text-sm shrink-0 ${isInPlan(exercise.id) ? 'text-primary' : 'text-outline hover:text-primary'}`}>
                    {isInPlan(exercise.id) ? 'check' : 'add_circle'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right panel: Plan editor */}
        <div className="lg:col-span-8 flex flex-col gap-md">

          {/* Plan metadata */}
          <div className="bento-card bg-surface-container-low rounded-xl p-lg border border-outline/10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
              <div>
                <label className="font-label-md text-xs text-primary uppercase tracking-wider block mb-xs">Plan Title</label>
                <input
                  value={planTitle}
                  onChange={e => setPlanTitle(e.target.value)}
                  className="w-full bg-transparent border-b border-outline/30 focus:border-primary text-headline-md font-headline-md py-xs transition-colors outline-none"
                />
              </div>
              <div className="flex flex-col gap-xs">
                <label className="font-label-md text-xs text-primary uppercase tracking-wider">Patient</label>
                <div className="flex items-center gap-sm border-b border-outline/30 py-xs">
                  <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center shrink-0">
                    <span className="font-label-md text-xs text-on-primary">{selectedPatient.avatar}</span>
                  </div>
                  <span className="font-headline-md text-headline-md text-on-surface">{selectedPatient.name}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Goals */}
          <div className="bento-card bg-secondary-container rounded-xl p-lg flex flex-col gap-md">
            <h2 className="font-headline-md text-headline-md text-on-surface">Treatment Goals</h2>
            <div className="space-y-xs">
              {goals.map((goal, i) => (
                <div key={i} className="flex items-start gap-sm group">
                  <span className="material-symbols-outlined text-primary text-base mt-xs shrink-0">target</span>
                  <p className="text-body-md text-on-surface grow">{goal}</p>
                  <button
                    onClick={() => setGoals(prev => prev.filter((_, j) => j !== i))}
                    className="opacity-0 group-hover:opacity-100 transition-opacity text-outline hover:text-error shrink-0"
                    aria-label="Remove goal"
                  >
                    <span className="material-symbols-outlined text-base">remove_circle</span>
                  </button>
                </div>
              ))}
            </div>
            <div className="flex gap-sm">
              <input
                type="text"
                value={newGoal}
                onChange={e => setNewGoal(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && addGoal()}
                placeholder="Add a goal..."
                className="grow bg-surface/70 border border-outline/20 rounded-lg px-md py-sm text-body-md focus:outline-none focus:border-primary transition-colors"
              />
              <button
                onClick={addGoal}
                className="bg-primary text-on-primary px-md py-sm rounded-lg font-label-md text-label-md hover:bg-primary-container transition-colors shrink-0"
              >
                Add
              </button>
            </div>
          </div>

          {/* Exercise plan */}
          <div className="bento-card bg-surface-container-low rounded-xl p-lg border border-outline/10">
            <div className="flex justify-between items-center mb-md">
              <h2 className="font-headline-md text-headline-md text-on-surface">Exercise Programme</h2>
              <span className="text-xs font-label-md text-on-surface-variant">
                {planItems.length} exercise{planItems.length !== 1 ? 's' : ''}
              </span>
            </div>

            {planItems.length === 0 ? (
              <div className="text-center py-xl">
                <span className="material-symbols-outlined text-outline text-5xl block mb-sm">playlist_add</span>
                <p className="text-on-surface-variant">Add exercises from the library on the left.</p>
              </div>
            ) : (
              <div className="space-y-sm">
                {planItems.map((item, i) => (
                  <div key={item.id} className="bg-surface rounded-xl border border-outline/10 overflow-hidden">
                    <div className="flex items-center gap-md p-md">
                      {/* Drag handle (decorative) */}
                      <span className="material-symbols-outlined text-outline text-base cursor-grab shrink-0">drag_indicator</span>

                      {/* Number */}
                      <div className="w-7 h-7 rounded-full bg-primary text-on-primary flex items-center justify-center shrink-0">
                        <span className="font-label-md text-xs">{i + 1}</span>
                      </div>

                      {/* Name + meta */}
                      <div className="grow min-w-0">
                        <p className="font-label-md text-label-md text-on-surface">{item.name}</p>
                        <div className="flex flex-wrap gap-xs mt-xs">
                          <span className="text-xs bg-surface-container px-xs py-0.5 rounded text-on-surface-variant">
                            {item.sets} sets
                          </span>
                          <span className="text-xs bg-surface-container px-xs py-0.5 rounded text-on-surface-variant">
                            {item.reps}
                          </span>
                          <span className="text-xs bg-primary/10 px-xs py-0.5 rounded text-primary">
                            {item.frequency}
                          </span>
                        </div>
                      </div>

                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-outline hover:text-error transition-colors shrink-0"
                        aria-label={`Remove ${item.name}`}
                      >
                        <span className="material-symbols-outlined text-base">delete</span>
                      </button>
                    </div>

                    {/* Inline notes */}
                    <div className="px-md pb-md">
                      <input
                        type="text"
                        value={item.notes}
                        onChange={e => updateNotes(item.id, e.target.value)}
                        placeholder="Clinician note (optional)..."
                        className="w-full bg-surface-container border-0 rounded-lg px-sm py-xs text-xs text-on-surface-variant placeholder:text-outline focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer actions */}
          <div className="flex flex-col sm:flex-row gap-sm justify-end">
            <button className="flex items-center justify-center gap-xs border border-outline/30 text-on-surface px-lg py-md rounded-lg font-label-md text-label-md hover:bg-surface-container transition-colors">
              <span className="material-symbols-outlined text-base">print</span>
              Print Plan
            </button>
            <button className="flex items-center justify-center gap-xs border border-outline/30 text-on-surface px-lg py-md rounded-lg font-label-md text-label-md hover:bg-surface-container transition-colors">
              <span className="material-symbols-outlined text-base">send</span>
              Send to Patient
            </button>
            <button
              onClick={handleSave}
              className={`flex items-center justify-center gap-xs px-lg py-md rounded-lg font-label-md text-label-md transition-all shadow-md ${
                saved ? 'bg-secondary text-on-secondary' : 'bg-primary text-on-primary hover:bg-primary-container'
              }`}
            >
              <span className="material-symbols-outlined text-base">{saved ? 'check' : 'save'}</span>
              {saved ? 'Saved!' : 'Save Plan'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
