import * as React from "react"
import { cn } from "@/lib/utils"

interface ScrollRevealProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "scale"
  className?: string
}

const ScrollReveal = React.forwardRef<HTMLDivElement, ScrollRevealProps>(
  ({ children, delay = 0, direction = "up", className, ...props }, ref) => {
    const [isVisible, setIsVisible] = React.useState(false)
    const elementRef = React.useRef<HTMLDivElement>(null)

    React.useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(true)
            }, delay)
          }
        },
        {
          threshold: 0.1,
          rootMargin: "0px 0px -10% 0px"
        }
      )

      const currentElement = elementRef.current
      if (currentElement) {
        observer.observe(currentElement)
      }

      return () => {
        if (currentElement) {
          observer.unobserve(currentElement)
        }
      }
    }, [delay])

    const getAnimationClass = () => {
      if (!isVisible) {
        switch (direction) {
          case "up":
            return "opacity-0 translate-y-10"
          case "down":
            return "opacity-0 -translate-y-10"
          case "left":
            return "opacity-0 translate-x-10"
          case "right":
            return "opacity-0 -translate-x-10"
          case "scale":
            return "opacity-0 scale-95"
          default:
            return "opacity-0 translate-y-10"
        }
      }
      return "opacity-100 translate-y-0 translate-x-0 scale-100"
    }

    return (
      <div
        ref={elementRef}
        className={cn(
          "transition-all duration-700 ease-smooth",
          getAnimationClass(),
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)
ScrollReveal.displayName = "ScrollReveal"

export { ScrollReveal }