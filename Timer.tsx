'use client'

import { useState, useEffect } from 'react'
import { Play, Pause, RotateCcw } from 'lucide-react'

interface TimerProps {
  duration: string // es. "2m", "1.5-2m"
  onComplete?: () => void
}

export function Timer({ duration, onComplete }: TimerProps) {
  const [seconds, setSeconds] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const [targetSeconds, setTargetSeconds] = useState(0)

  useEffect(() => {
    // Parse duration string (es. "2m", "1.5-2m")
    const parseTime = (time: string): number => {
      const match = time.match(/(\d+\.?\d*)m/)
      if (match) {
        return parseFloat(match[1]) * 60
      }
      return 120 // default 2 minutes
    }

    const parts = duration.split('-')
    const target = parseTime(parts[parts.length - 1])
    setTargetSeconds(target)
  }, [duration])

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null

    if (isRunning && seconds < targetSeconds) {
      interval = setInterval(() => {
        setSeconds(s => {
          if (s + 1 >= targetSeconds) {
            setIsRunning(false)
            if (onComplete) onComplete()
            return s + 1
          }
          return s + 1
        })
      }, 1000)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isRunning, seconds, targetSeconds, onComplete])

  const toggleTimer = () => {
    setIsRunning(!isRunning)
  }

  const resetTimer = () => {
    setSeconds(0)
    setIsRunning(false)
  }

  const formatTime = (secs: number): string => {
    const mins = Math.floor(secs / 60)
    const remainingSecs = secs % 60
    return `${mins}:${remainingSecs.toString().padStart(2, '0')}`
  }

  const progress = (seconds / targetSeconds) * 100

  return (
    <div className="flex items-center gap-3 bg-secondary/50 rounded-lg p-3">
      <div className="relative w-16 h-16">
        <svg className="w-16 h-16 transform -rotate-90">
          <circle
            cx="32"
            cy="32"
            r="28"
            stroke="currentColor"
            strokeWidth="4"
            fill="none"
            className="text-muted"
          />
          <circle
            cx="32"
            cy="32"
            r="28"
            stroke="currentColor"
            strokeWidth="4"
            fill="none"
            strokeDasharray={`${2 * Math.PI * 28}`}
            strokeDashoffset={`${2 * Math.PI * 28 * (1 - progress / 100)}`}
            className="text-primary transition-all duration-300"
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-sm font-bold">{formatTime(seconds)}</span>
        </div>
      </div>

      <div className="flex-1">
        <div className="text-xs text-muted-foreground mb-1">
          Recupero: {duration}
        </div>
        <div className="flex gap-2">
          <button
            onClick={toggleTimer}
            className="flex items-center gap-1 px-3 py-1.5 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            {isRunning ? (
              <>
                <Pause className="w-3 h-3" />
                Pausa
              </>
            ) : (
              <>
                <Play className="w-3 h-3" />
                Avvia
              </>
            )}
          </button>
          <button
            onClick={resetTimer}
            className="flex items-center gap-1 px-3 py-1.5 bg-secondary text-secondary-foreground rounded-md text-sm font-medium hover:bg-secondary/80 transition-colors"
          >
            <RotateCcw className="w-3 h-3" />
            Reset
          </button>
        </div>
      </div>
    </div>
  )
}
