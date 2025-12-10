'use client'

import { Modal } from '@/components/ui/Modal'
import { useState } from 'react'

interface VideoModalProps {
  videoSrc: string
  trigger: React.ReactNode
}

export function VideoModal({ videoSrc, trigger }: VideoModalProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div onClick={() => setIsOpen(true)}>{trigger}</div>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} size="xl">
        <div className="aspect-video bg-black rounded-lg overflow-hidden">
          <video
            src={videoSrc}
            controls
            autoPlay
            className="w-full h-full"
            onEnded={() => setIsOpen(false)}
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </Modal>
    </>
  )
}








