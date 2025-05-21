"use client"

import { type ReactNode, Children, cloneElement, isValidElement } from "react"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

interface StaggeredChildrenProps {
  children: ReactNode
  staggerAmount?: number
  baseDelay?: number
  className?: string
  threshold?: number
  triggerOnce?: boolean
  animation?: "fade-up" | "fade-down" | "fade-left" | "fade-right" | "zoom-in" | "zoom-out"
}

export function StaggeredChildren({
  children,
  staggerAmount = 100,
  baseDelay = 0,
  className,
  threshold = 0.1,
  triggerOnce = true,
  animation = "fade-up",
}: StaggeredChildrenProps) {
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold, triggerOnce })

  const getAnimationClasses = (type: string, inView: boolean) => {
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

  const childrenArray = Children.toArray(children)

  return (
    <div ref={ref} className={className}>
      {childrenArray.map((child, index) => {
        if (isValidElement(child)) {
          return cloneElement(child, {
            ...child.props,
            className: cn(
              child.props.className,
              "transition-all will-change-transform",
              getAnimationClasses(animation, isInView),
            ),
            style: {
              ...child.props.style,
              transitionDuration: "800ms",
              transitionDelay: `${baseDelay + index * staggerAmount}ms`,
            },
            key: index,
          })
        }
        return child
      })}
    </div>
  )
}
