'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp, Edit2, Check } from 'lucide-react'
import { Timer } from './Timer'
import type { Exercise } from '../data/workouts'

interface ExerciseCardProps {
  exercise: Exercise
  onUpdate?: (exercise: Exercise) => void
}

export function ExerciseCard({ exercise, onUpdate }: ExerciseCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [completedSets, setCompletedSets] = useState<number[]>([])
  const [editedExercise, setEditedExercise] = useState(exercise)

  const toggleSet = (setNumber: number) => {
    if (completedSets.includes(setNumber)) {
      setCompletedSets(completedSets.filter(s => s !== setNumber))
    } else {
      setCompletedSets([...completedSets, setNumber])
    }
  }

  const saveEdit = () => {
    if (onUpdate) {
      onUpdate(editedExercise)
    }
    setIsEditing(false)
  }

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden shadow-sm">
      {/* Header */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-4 py-3 flex items-center justify-between hover:bg-accent/50 transition-colors"
      >
        <div className="flex-1 text-left">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-semibold text-primary uppercase tracking-wide">
              {exercise.muscleGroup}
            </span>
            <span className="text-xs text-muted-foreground">
              {exercise.sets} serie × {exercise.reps} rip
            </span>
          </div>
          <h3 className="font-semibold text-sm md:text-base">{exercise.name}</h3>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="text-xs text-muted-foreground">
            {completedSets.length}/{exercise.sets}
          </div>
          {isExpanded ? (
            <ChevronUp className="w-5 h-5 text-muted-foreground" />
          ) : (
            <ChevronDown className="w-5 h-5 text-muted-foreground" />
          )}
        </div>
      </button>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="px-4 pb-4 space-y-4 border-t border-border">
          {/* Exercise Info */}
          <div className="grid grid-cols-2 gap-3 pt-4">
            <div className="bg-secondary/50 rounded-lg p-3">
              <div className="text-xs text-muted-foreground mb-1">Ripetizioni</div>
              <div className="font-bold text-lg">{exercise.reps}</div>
            </div>
            <div className="bg-secondary/50 rounded-lg p-3">
              <div className="text-xs text-muted-foreground mb-1">Recupero</div>
              <div className="font-bold text-lg">{exercise.rest}</div>
            </div>
          </div>

          {/* Warmup */}
          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-3">
            <div className="text-xs font-semibold text-yellow-600 dark:text-yellow-400 mb-2">
              RISCALDAMENTO
            </div>
            <div className="text-sm">
              {exercise.warmup.reps} rip × TUT {exercise.warmup.tut} × RPE @{exercise.warmup.rpe}
            </div>
          </div>

          {/* Working Sets */}
          <div className="space-y-2">
            <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
              Serie di lavoro
            </div>
            {exercise.workingSets.map((set) => (
              <div
                key={set.setNumber}
                className={`border rounded-lg p-3 transition-all ${
                  completedSets.includes(set.setNumber)
                    ? 'bg-green-500/10 border-green-500/30'
                    : 'bg-secondary/30 border-border'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="font-semibold">Serie {set.setNumber}</div>
                  <button
                    onClick={() => toggleSet(set.setNumber)}
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                      completedSets.includes(set.setNumber)
                        ? 'bg-green-500 border-green-500'
                        : 'border-muted-foreground'
                    }`}
                  >
                    {completedSets.includes(set.setNumber) && (
                      <Check className="w-4 h-4 text-white" />
                    )}
                  </button>
                </div>
                <div className="flex gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">TUT:</span>{' '}
                    <span className="font-medium">{set.tut}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">RPE:</span>{' '}
                    <span className="font-medium">{set.rpe}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Timer */}
          <Timer duration={exercise.rest} />

          {/* Notes */}
          {exercise.notes && (
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-3">
              <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 mb-1">
                NOTE
              </div>
              <div className="text-sm">{exercise.notes}</div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
