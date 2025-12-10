'use client'

import { useState, useEffect } from 'react'

interface TypewriterProps {
  phrases: string[]
  speed?: number
  deleteSpeed?: number
  pauseTime?: number
  className?: string
}

export function Typewriter({ 
  phrases, 
  speed = 100, 
  deleteSpeed = 50,
  pauseTime = 2000,
  className = '' 
}: TypewriterProps) {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (phrases.length === 0) return

    const currentPhrase = phrases[currentPhraseIndex]
    
    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false)
        setIsDeleting(true)
      }, pauseTime)
      return () => clearTimeout(pauseTimer)
    }

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (currentText.length < currentPhrase.length) {
          setCurrentText(currentPhrase.slice(0, currentText.length + 1))
        } else {
          // Finished typing, pause then start deleting
          setIsPaused(true)
        }
      } else {
        // Deleting
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1))
        } else {
          // Finished deleting, move to next phrase
          setIsDeleting(false)
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length)
        }
      }
    }, isDeleting ? deleteSpeed : speed)

    return () => clearTimeout(timer)
  }, [currentText, isDeleting, isPaused, currentPhraseIndex, phrases, speed, deleteSpeed, pauseTime])

  return (
    <span className={className}>
      {currentText}
      <span className="inline-block w-0.5 h-[1em] bg-current ml-1 animate-[blink_1s_step-end_infinite]" />
    </span>
  )
}

