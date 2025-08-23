import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const auroraButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-glass text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative overflow-hidden group",
  {
    variants: {
      variant: {
        aurora: "bg-aurora text-primary-foreground hover:shadow-aurora hover:scale-105 transition-all duration-300 animate-aurora-shift",
        glass: "bg-glass/50 backdrop-blur-glass text-foreground border border-glass-border hover:bg-glass/70 hover:shadow-glow transition-all duration-300",
        cosmic: "bg-primary/20 backdrop-blur-aurora text-primary hover:bg-primary/30 hover:shadow-glow border border-primary/30 transition-all duration-300",
        glow: "bg-background/10 backdrop-blur-glass text-foreground border border-primary/50 hover:shadow-aurora hover:border-primary transition-all duration-300",
        ghost: "text-foreground hover:bg-accent/20 hover:text-accent transition-colors duration-300",
        morphing: "bg-primary hover:bg-secondary transition-all duration-500 animate-morphing text-primary-foreground hover:shadow-glow",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        xl: "h-12 rounded-lg px-10 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "aurora",
      size: "default",
    },
  }
)

export interface AuroraButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof auroraButtonVariants> {
  asChild?: boolean
}

const AuroraButton = React.forwardRef<HTMLButtonElement, AuroraButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(auroraButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {variant === "aurora" && (
          <div className="absolute inset-0 bg-aurora opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
        )}
        {children}
        {variant === "glow" && (
          <div className="absolute inset-0 bg-primary/5 rounded-glass animate-glow-pulse" />
        )}
      </Comp>
    )
  }
)
AuroraButton.displayName = "AuroraButton"

export { AuroraButton, auroraButtonVariants }