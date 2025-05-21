"use client"

import type { ReactNode } from "react"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

type AnimationType = "fade-up" | "fade-down" | "fade-left" | "fade-right" | "zoom-in" | "zoom-out"

interface AnimatedElementProps {
  children: ReactNode
  animation: AnimationType
  duration?: number
  delay?: number
  className?: string
  threshold?: number
  triggerOnce?: boolean
}

export function AnimatedElement({
  children,
  animation,
  duration = 800,
  delay = 0,
  className,
  threshold = 0.1,
  triggerOnce = true,
}: AnimatedElementProps) {
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold, triggerOnce })

  const getAnimationClasses = (type: AnimationType, inView: boolean) => {
    if (!inView) {
      switch (type) {
        case "fade-up":
          return "opacity-0 translate-y-10"
        case "fade-down":
          return "opacity-0 -translate-y-10"
        case "fade-left":
          return "opacity-0 translate-x-10"
        case "fade-right":
          return "opacity-0 -translate-x-10"
        case "zoom-in":
          return "opacity-0 scale-95"
        case "zoom-out":
          return "opacity-0 scale-105"
        default:
          return "opacity-0"
      }
    }
    return "opacity-100 translate-y-0 translate-x-0 scale-100"
  }

  return (
    <div
      ref={ref}
      className={cn("transition-all will-change-transform", getAnimationClasses(animation, isInView), className)}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}
