import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const cosmicInputVariants = cva(
  "flex w-full rounded-glass border border-gray-300 bg-white/95 backdrop-blur-glass px-3 py-2 text-sm text-gray-900 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300",
  {
    variants: {
      variant: {
        default: "hover:bg-white focus:bg-white border-gray-400",
        glow: "focus:shadow-glow hover:border-primary/50 focus:border-primary",
        aurora: "focus:border-primary focus:shadow-aurora border-primary/30",
      },
      size: {
        default: "h-10",
        sm: "h-9",
        lg: "h-11",
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface CosmicInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof cosmicInputVariants> {}

const CosmicInput = React.forwardRef<HTMLInputElement, CosmicInputProps>(
  ({ className, variant, size, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(cosmicInputVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
CosmicInput.displayName = "CosmicInput"

export { CosmicInput, cosmicInputVariants }