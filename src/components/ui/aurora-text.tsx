import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const auroraTextVariants = cva(
  "bg-clip-text text-transparent bg-aurora animate-aurora-shift",
  {
    variants: {
      variant: {
        aurora: "bg-aurora",
        cosmic: "bg-gradient-to-r from-primary via-secondary to-accent",
        shimmer: "bg-gradient-to-r from-primary via-accent to-tertiary bg-[length:200%_auto] animate-text-shimmer",
        glow: "bg-primary drop-shadow-[0_0_20px_theme(colors.primary.glow)]",
      },
      size: {
        sm: "text-sm",
        default: "text-base",
        lg: "text-lg",
        xl: "text-xl",
        "2xl": "text-2xl",
        "3xl": "text-3xl",
        "4xl": "text-4xl",
        "5xl": "text-5xl",
        "6xl": "text-6xl",
      }
    },
    defaultVariants: {
      variant: "aurora",
      size: "default",
    },
  }
)

export interface AuroraTextProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof auroraTextVariants> {
  as?: "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p"
}

const AuroraText = React.forwardRef<HTMLElement, AuroraTextProps>(
  ({ className, variant, size, as: Component = "span", ...props }, ref) => {
    return (
      <Component
        className={cn(auroraTextVariants({ variant, size, className }))}
        ref={ref as any}
        {...props}
      />
    )
  }
)
AuroraText.displayName = "AuroraText"

export { AuroraText, auroraTextVariants }