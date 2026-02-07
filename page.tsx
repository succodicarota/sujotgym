'use client'

import { useState } from 'react'
import { Moon, Sun, Dumbbell, Calendar, Info } from 'lucide-react'
import { useTheme } from './components/ThemeProvider'
import { ExerciseCard } from './components/ExerciseCard'
import { workouts, weekSchedule } from './data/workouts'
import type { Workout } from './data/workouts'

export default function Home() {
  const { theme, toggleTheme } = useTheme()
  const [selectedWorkout, setSelectedWorkout] = useState<Workout>(workouts[0])
  const [showInfo, setShowInfo] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Dumbbell className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="font-bold text-lg">OG Workout Tracker</h1>
                <p className="text-xs text-muted-foreground">Sukhjot Singh Jaswal</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowInfo(!showInfo)}
                className="p-2 hover:bg-accent rounded-lg transition-colors"
              >
                <Info className="w-5 h-5" />
              </button>
              <button
                onClick={toggleTheme}
                className="p-2 hover:bg-accent rounded-lg transition-colors"
              >
                {theme === 'dark' ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* Workout Selector */}
          <div className="grid grid-cols-4 gap-2">
            {workouts.map((workout) => (
              <button
                key={workout.id}
                onClick={() => setSelectedWorkout(workout)}
                className={`py-3 px-2 rounded-lg font-semibold text-xs transition-all ${
                  selectedWorkout.id === workout.id
                    ? 'bg-primary text-primary-foreground shadow-lg scale-105'
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                }`}
              >
                <div className="mb-1">GIORNO {workout.day}</div>
                <div className="text-lg">{workout.name}</div>
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Info Panel */}
      {showInfo && (
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="bg-card border border-border rounded-lg p-4 space-y-3">
            <h2 className="font-bold text-lg flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              Programma 9 Settimane
            </h2>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {weekSchedule.map((day) => (
                <div key={day.day} className="bg-secondary/50 rounded p-2">
                  <div className="font-semibold">Giorno {day.day}</div>
                  <div className="text-xs text-muted-foreground">{day.name}</div>
                </div>
              ))}
            </div>
            <div className="text-xs text-muted-foreground pt-2 border-t border-border">
              💡 Ogni allenamento include riscaldamento cardio/core (5min), mobilità specifica
              (10min), esercizi di forza e cooldown (5min stretching/cardio)
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-6 pb-20">
        {/* Workout Header */}
        <div className="mb-6">
          <div className="bg-gradient-to-r from-primary/20 to-primary/5 rounded-xl p-6 mb-4">
            <h2 className="text-2xl font-bold mb-2">{selectedWorkout.name}</h2>
            <div className="flex flex-wrap gap-2">
              {selectedWorkout.muscleGroups.map((group) => (
                <span
                  key={group}
                  className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-semibold"
                >
                  {group}
                </span>
              ))}
            </div>
          </div>

          {/* Warmup Section */}
          <div className="bg-card border border-border rounded-lg p-4 mb-4">
            <h3 className="font-bold text-sm mb-3 flex items-center gap-2">
              <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
              WARM UP - 5 minuti (cardio/core)
            </h3>
            <div className="flex flex-wrap gap-2">
              {selectedWorkout.warmup.map((exercise) => (
                <span
                  key={exercise}
                  className="px-3 py-1 bg-secondary text-secondary-foreground rounded-md text-xs"
                >
                  {exercise}
                </span>
              ))}
            </div>
          </div>

          {/* Mobility Section */}
          <div className="bg-card border border-border rounded-lg p-4 mb-6">
            <h3 className="font-bold text-sm mb-3 flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              MOBILITÀ - {selectedWorkout.mobility.duration}
            </h3>
            <div className="text-sm mb-2">
              <span className="font-semibold">Programma:</span>{' '}
              {selectedWorkout.mobility.program}
            </div>
            <div className="text-xs text-muted-foreground">
              Focus: {selectedWorkout.mobility.focus.join(', ')}
            </div>
          </div>
        </div>

        {/* Exercises */}
        <div className="space-y-3">
          <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-primary rounded-full"></span>
            Esercizi ({selectedWorkout.exercises.length})
          </h3>
          {selectedWorkout.exercises.map((exercise, index) => (
            <ExerciseCard key={exercise.id} exercise={exercise} />
          ))}
        </div>

        {/* Cooldown */}
        <div className="mt-6 bg-card border border-border rounded-lg p-4">
          <h3 className="font-bold text-sm mb-3 flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            COOL DOWN - 5 minuti
          </h3>
          <div className="flex flex-wrap gap-2">
            {selectedWorkout.cooldown.map((exercise) => (
              <span
                key={exercise}
                className="px-3 py-1 bg-secondary text-secondary-foreground rounded-md text-xs"
              >
                {exercise}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-8 text-center text-xs text-muted-foreground">
          <p>È sempre consigliabile consultare il coach in caso di dubbi</p>
          <p className="mt-2">💪 Buon allenamento!</p>
        </div>
      </main>
    </div>
  )
}
