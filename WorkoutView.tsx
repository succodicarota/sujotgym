'use client';

import { useState, useEffect } from 'react';
import { Workout, WorkoutExercise } from '../data/workouts';
import { ArrowLeft, Play, Pause, RotateCcw, Check, Edit2, Info } from 'lucide-react';
import Timer from './Timer';
import ExerciseCard from './ExerciseCard';

interface WorkoutViewProps {
  workout: Workout;
  onBack: () => void;
}

interface ExerciseProgress {
  exerciseId: string;
  completedSets: number[];
  weights: Record<number, number>;
  notes: string;
}

export default function WorkoutView({ workout, onBack }: WorkoutViewProps) {
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [currentSet, setCurrentSet] = useState(0);
  const [isResting, setIsResting] = useState(false);
  const [showMobility, setShowMobility] = useState(true);
  const [progress, setProgress] = useState<Record<string, ExerciseProgress>>({});
  const [workoutStartTime, setWorkoutStartTime] = useState<Date | null>(null);

  const currentExercise = workout.exercises[currentExerciseIndex];
  const totalExercises = workout.exercises.length;
  const isWarmupSet = currentSet === 0;

  useEffect(() => {
    // Initialize progress for all exercises
    const initialProgress: Record<string, ExerciseProgress> = {};
    workout.exercises.forEach(exercise => {
      initialProgress[exercise.id] = {
        exerciseId: exercise.id,
        completedSets: [],
        weights: {},
        notes: ''
      };
    });
    setProgress(initialProgress);
  }, [workout]);

  const handleStartWorkout = () => {
    setShowMobility(false);
    setWorkoutStartTime(new Date());
  };

  const handleCompleteSet = (weight?: number) => {
    const exerciseId = currentExercise.id;
    const newProgress = { ...progress };
    
    if (!newProgress[exerciseId].completedSets.includes(currentSet)) {
      newProgress[exerciseId].completedSets.push(currentSet);
    }
    
    if (weight !== undefined) {
      newProgress[exerciseId].weights[currentSet] = weight;
    }
    
    setProgress(newProgress);

    // Move to next set or exercise
    if (currentSet < currentExercise.sets) {
      setCurrentSet(currentSet + 1);
      setIsResting(true);
    } else {
      // Move to next exercise
      if (currentExerciseIndex < totalExercises - 1) {
        setCurrentExerciseIndex(currentExerciseIndex + 1);
        setCurrentSet(0);
        setIsResting(false);
      } else {
        // Workout complete!
        handleWorkoutComplete();
      }
    }
  };

  const handleWorkoutComplete = () => {
    const endTime = new Date();
    const duration = workoutStartTime 
      ? Math.round((endTime.getTime() - workoutStartTime.getTime()) / 60000)
      : 0;
    
    // Save to localStorage
    const workoutLog = {
      workoutId: workout.id,
      date: endTime.toISOString(),
      duration,
      progress
    };
    
    const history = JSON.parse(localStorage.getItem('workoutHistory') || '[]');
    history.push(workoutLog);
    localStorage.setItem('workoutHistory', JSON.stringify(history));
    
    // Show completion screen
    alert(`Allenamento completato! Durata: ${duration} minuti`);
    onBack();
  };

  const handleSkipExercise = () => {
    if (currentExerciseIndex < totalExercises - 1) {
      setCurrentExerciseIndex(currentExerciseIndex + 1);
      setCurrentSet(0);
      setIsResting(false);
    }
  };

  const handlePreviousExercise = () => {
    if (currentExerciseIndex > 0) {
      setCurrentExerciseIndex(currentExerciseIndex - 1);
      setCurrentSet(0);
      setIsResting(false);
    }
  };

  if (showMobility) {
    return (
      <div className="min-h-screen bg-og-dark">
        <div className="bg-og-card border-b border-og-border sticky top-0 z-10">
          <div className="max-w-4xl mx-auto px-4 py-4">
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Indietro</span>
            </button>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-6">
          {/* Warmup Section */}
          <div className="card mb-4">
            <h2 className="text-xl font-bold text-og-yellow mb-4">WARM UP - 5 minuti</h2>
            <p className="text-sm text-gray-400 mb-4">Scegli uno tra i seguenti esercizi di riscaldamento:</p>
            <div className="grid grid-cols-2 gap-2">
              {workout.warmup.map((exercise) => (
                <div key={exercise} className="bg-og-dark px-3 py-2 rounded border border-og-border text-sm">
                  {exercise}
                </div>
              ))}
            </div>
          </div>

          {/* Mobility Section */}
          <div className="card mb-6">
            <h2 className="text-xl font-bold text-og-yellow mb-4">
              {workout.mobility.program}
            </h2>
            <p className="text-sm text-gray-400 mb-4">
              Eseguire in ordine numerico per almeno 10 minuti; non è necessario svolgere tutti gli esercizi.
            </p>
            <div className="bg-og-dark p-4 rounded border border-og-border mb-4">
              <p className="text-sm font-semibold mb-2">Mobilità utile per:</p>
              <div className="flex flex-wrap gap-2">
                {workout.mobility.targetAreas.map((area) => (
                  <span key={area} className="text-xs px-2 py-1 bg-og-card rounded border border-og-border">
                    {area}
                  </span>
                ))}
              </div>
            </div>
            <p className="text-xs text-gray-500 text-center">
              Durata consigliata: {workout.mobility.duration}
            </p>
          </div>

          {/* Start Workout Button */}
          <button
            onClick={handleStartWorkout}
            className="w-full btn-primary text-lg py-4"
          >
            <div className="flex items-center justify-center gap-2">
              <Play className="w-6 h-6" />
              <span>Inizia Allenamento</span>
            </div>
          </button>

          {/* Workout Preview */}
          <div className="mt-6 card">
            <h3 className="font-semibold mb-3">Panoramica Allenamento</h3>
            <div className="space-y-2">
              {workout.exercises.map((exercise, index) => (
                <div key={exercise.id} className="flex items-center gap-3 text-sm">
                  <span className="text-gray-500 w-6">{index + 1}.</span>
                  <div className="flex-1">
                    <p className="font-medium">{exercise.name}</p>
                    <p className="text-xs text-gray-400">
                      {exercise.sets} serie × {exercise.reps} rip
                    </p>
                  </div>
                  <span className="text-xs text-gray-500">{exercise.muscleGroup}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-og-dark pb-20">
      {/* Header */}
      <div className="bg-og-card border-b border-og-border sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-3">
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Esci</span>
            </button>
            <div className="text-sm text-gray-400">
              {currentExerciseIndex + 1} / {totalExercises}
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="w-full bg-og-dark rounded-full h-2">
            <div
              className="bg-og-yellow h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentExerciseIndex + 1) / totalExercises) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-6">
        {isResting ? (
          <Timer
            duration={parseFloat(currentExercise.rest.split('-')[0] || currentExercise.rest) * 60}
            onComplete={() => setIsResting(false)}
            exerciseName={currentExercise.name}
            nextSet={currentSet}
          />
        ) : (
          <ExerciseCard
            exercise={currentExercise}
            currentSet={currentSet}
            isWarmup={isWarmupSet}
            onCompleteSet={handleCompleteSet}
            progress={progress[currentExercise.id]}
          />
        )}

        {/* Navigation */}
        <div className="mt-6 flex gap-3">
          <button
            onClick={handlePreviousExercise}
            disabled={currentExerciseIndex === 0}
            className="flex-1 btn-secondary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Precedente
          </button>
          <button
            onClick={handleSkipExercise}
            className="flex-1 btn-secondary"
          >
            Salta
          </button>
        </div>

        {/* Exercise List */}
        <div className="mt-6 card">
          <h3 className="font-semibold mb-3 text-sm text-gray-400">PROSSIMI ESERCIZI</h3>
          <div className="space-y-2">
            {workout.exercises.slice(currentExerciseIndex + 1, currentExerciseIndex + 4).map((exercise, index) => (
              <div key={exercise.id} className="flex items-center gap-3 text-sm py-2 border-b border-og-border last:border-0">
                <span className="text-gray-500 w-6">{currentExerciseIndex + index + 2}.</span>
                <div className="flex-1">
                  <p className="font-medium text-sm">{exercise.name}</p>
                  <p className="text-xs text-gray-400">
                    {exercise.sets} serie × {exercise.reps} rip • {exercise.muscleGroup}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
